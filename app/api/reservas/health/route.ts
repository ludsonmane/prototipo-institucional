import { NextResponse } from 'next/server';
import { RESERVAS_API_BASE, getAreas, getUnits, pingReservasApi } from '@/lib/reservas';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const [ping, units, areas] = await Promise.all([pingReservasApi(), getUnits(), getAreas()]);
    return NextResponse.json({
      ok: true,
      apiBase: RESERVAS_API_BASE,
      api: ping,
      units: units.items.map((u) => ({ id: u.id, slug: u.slug, name: u.name })),
      areas,
    });
  } catch (err) {
    const e = err as { status?: number; message?: string; body?: unknown };
    return NextResponse.json(
      {
        ok: false,
        apiBase: RESERVAS_API_BASE,
        error: e.message ?? 'unknown',
        status: e.status ?? 500,
        body: e.body,
      },
      { status: 500 },
    );
  }
}
