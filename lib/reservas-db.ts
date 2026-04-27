/**
 * Acesso direto ao banco MySQL de reservas (mane-reservas-api / Railway).
 * SOMENTE server-side — nunca importar em arquivos client.
 */
import 'server-only';
import mysql, { Pool, RowDataPacket } from 'mysql2/promise';

const RESERVAS_DATABASE_URL =
  process.env.RESERVAS_DATABASE_URL ?? process.env.MANE_RESERVAS_DB_URL ?? '';

if (!RESERVAS_DATABASE_URL && process.env.NODE_ENV === 'production') {
  console.warn('[reservas-db] RESERVAS_DATABASE_URL não definida.');
}

declare global {
  // eslint-disable-next-line no-var
  var __reservasPool: Pool | undefined;
}

export function getReservasPool(): Pool {
  if (!RESERVAS_DATABASE_URL) {
    throw new Error('RESERVAS_DATABASE_URL não configurada');
  }
  if (!globalThis.__reservasPool) {
    globalThis.__reservasPool = mysql.createPool({
      uri: RESERVAS_DATABASE_URL,
      connectionLimit: 5,
      waitForConnections: true,
      enableKeepAlive: true,
      charset: 'utf8mb4',
    });
  }
  return globalThis.__reservasPool;
}

export type Unit = {
  id: string;
  name: string;
  slug: string;
  isActive: number;
};

export type Area = {
  id: string;
  unitId: string;
  name: string;
  isActive: number;
  capacityAfternoon: number | null;
  capacityNight: number | null;
};

export type ReservationStatus = 'AWAITING_CHECKIN' | 'CHECKED_IN' | 'NO_SHOW';
export type ReservationType = 'PARTICULAR' | 'CONFRATERNIZACAO' | 'EMPRESA' | 'ANIVERSARIO';

export type ReservationRow = {
  id: string;
  reservationCode: string | null;
  fullName: string;
  cpf: string | null;
  phone: string | null;
  email: string | null;
  people: number;
  kids: number;
  reservationDate: Date;
  birthdayDate: Date | null;
  unit: string | null;
  unitId: string | null;
  area: string | null;
  areaId: string | null;
  areaName: string | null;
  status: ReservationStatus;
  reservationType: ReservationType;
  source: string | null;
  notes: string | null;
  createdAt: Date;
};

export type ReservasStats = {
  total: number;
  byStatus: Record<ReservationStatus, number>;
  byUnit: { unit: string | null; count: number }[];
  upcoming: number;
};

async function query<T extends RowDataPacket>(sql: string, params?: unknown[]): Promise<T[]> {
  const pool = getReservasPool();
  const [rows] = await pool.query<T[]>(sql, params);
  return rows;
}

export async function listUnits() {
  return query<Unit & RowDataPacket>(
    'SELECT id, name, slug, isActive FROM Unit WHERE isActive = 1 ORDER BY name',
  );
}

export async function listAreasByUnit(unitId: string) {
  return query<Area & RowDataPacket>(
    `SELECT id, unitId, name, isActive, capacityAfternoon, capacityNight
     FROM Area WHERE unitId = ? AND isActive = 1
     ORDER BY name`,
    [unitId],
  );
}

export async function getReservasStats(): Promise<ReservasStats> {
  const total = await query<{ c: number } & RowDataPacket>(
    'SELECT COUNT(*) AS c FROM Reservation',
  );
  const byStatus = await query<{ status: ReservationStatus; c: number } & RowDataPacket>(
    'SELECT status, COUNT(*) AS c FROM Reservation GROUP BY status',
  );
  const byUnit = await query<{ unit: string | null; c: number } & RowDataPacket>(
    `SELECT COALESCE(u.slug, r.unit) AS unit, COUNT(*) AS c
     FROM Reservation r LEFT JOIN Unit u ON u.id = r.unitId
     GROUP BY COALESCE(u.slug, r.unit)
     ORDER BY c DESC`,
  );
  const upcoming = await query<{ c: number } & RowDataPacket>(
    'SELECT COUNT(*) AS c FROM Reservation WHERE reservationDate >= NOW()',
  );

  const status: ReservasStats['byStatus'] = {
    AWAITING_CHECKIN: 0,
    CHECKED_IN: 0,
    NO_SHOW: 0,
  };
  for (const row of byStatus) status[row.status] = Number(row.c);

  return {
    total: Number(total[0]?.c ?? 0),
    byStatus: status,
    byUnit: byUnit.map((r) => ({ unit: r.unit, count: Number(r.c) })),
    upcoming: Number(upcoming[0]?.c ?? 0),
  };
}

export async function findReservationByCode(code: string) {
  const rows = await query<ReservationRow & RowDataPacket>(
    `SELECT id, reservationCode, fullName, cpf, phone, email, people, kids,
            reservationDate, birthdayDate, unit, unitId, area, areaId, areaName,
            status, reservationType, source, notes, createdAt
     FROM Reservation
     WHERE reservationCode = ?
     LIMIT 1`,
    [code],
  );
  return rows[0] ?? null;
}

export async function listUpcomingByUnit(unitSlug: string, limit = 20) {
  return query<ReservationRow & RowDataPacket>(
    `SELECT r.id, r.reservationCode, r.fullName, r.people, r.kids,
            r.reservationDate, r.area, r.areaName, r.status, r.reservationType
     FROM Reservation r
     LEFT JOIN Unit u ON u.id = r.unitId
     WHERE (u.slug = ? OR r.unit = ?) AND r.reservationDate >= NOW()
     ORDER BY r.reservationDate ASC
     LIMIT ?`,
    [unitSlug, unitSlug, limit],
  );
}
