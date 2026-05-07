import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../legal.module.css';

const LAST_UPDATE = '07 de maio de 2026';
const VERSION = '1.0';

export const metadata: Metadata = {
  title: 'Termo de Consentimento',
  description:
    'Termo de Consentimento para tratamento de dados pessoais pelo Mané Mercado, em conformidade com a Lei Geral de Proteção de Dados (LGPD).',
  alternates: { canonical: '/termo-de-consentimento' },
  robots: { index: true, follow: true },
};

export default function TermoDeConsentimentoPage() {
  return (
    <main className={styles.container}>
      <span className={styles.eyebrow}>Documento legal</span>
      <h1 className={styles.title}>Termo de Consentimento</h1>
      <p className={styles.lede}>
        Este Termo registra a manifestação <strong>livre, informada, específica e
        inequívoca</strong> de consentimento do titular para o tratamento de seus
        dados pessoais pelo <strong>Mané Mercado</strong>, nos termos do art. 5º,
        XII, e do art. 8º da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados —
        LGPD).
      </p>

      <div className={styles.meta}>
        <span>
          <strong>Versão:</strong> {VERSION}
        </span>
        <span>
          <strong>Última atualização:</strong> {LAST_UPDATE}
        </span>
        <span>
          <strong>Vigência:</strong> a partir da data de publicação
        </span>
      </div>

      <nav className={styles.toc} aria-label="Sumário">
        <p className={styles.tocTitle}>Sumário</p>
        <ol className={styles.tocList}>
          <li>
            <a href="#identificacao">Identificação das partes</a>
          </li>
          <li>
            <a href="#objeto">Objeto do consentimento</a>
          </li>
          <li>
            <a href="#dados">Dados pessoais tratados</a>
          </li>
          <li>
            <a href="#finalidades">Finalidades autorizadas</a>
          </li>
          <li>
            <a href="#compartilhamento">Compartilhamento autorizado</a>
          </li>
          <li>
            <a href="#prazo">Prazo do consentimento</a>
          </li>
          <li>
            <a href="#revogacao">Revogação do consentimento</a>
          </li>
          <li>
            <a href="#consequencias">Consequências da não concessão</a>
          </li>
          <li>
            <a href="#direitos">Direitos do titular</a>
          </li>
          <li>
            <a href="#aceite">Manifestação de vontade</a>
          </li>
        </ol>
      </nav>

      <section id="identificacao" className={styles.section}>
        <h2>1. Identificação das partes</h2>
        <p>
          <strong>Controlador:</strong> Mané Mercado, doravante denominado
          “Controlador” ou “Mané Mercado”.
        </p>
        <div className={styles.callout}>
          <strong>Razão social:</strong> R2B PRODUÇÕES
          <br />
          <strong>CNPJ:</strong> 14.123.557/0002-05
          <br />
          <strong>Endereço da sede:</strong> SRPN — Edifício I, Térreo, Parte
          B, Brasília/DF
          <br />
          <strong>E-mail administrativo:</strong>{' '}
          <a href="mailto:financeiro@r2.com.vc">financeiro@r2.com.vc</a>
          <br />
          <strong>Canal LGPD (Encarregado/DPO):</strong>{' '}
          <a href="mailto:contato@mane.com.vc">contato@mane.com.vc</a>
        </div>
        <p>
          <strong>Titular:</strong> a pessoa natural que, ao preencher
          formulários nos sites e aplicações do Mané Mercado, marcar a opção de
          aceite ou prosseguir com a interação após ser informada deste Termo,
          manifesta a sua concordância com o tratamento de seus dados pessoais
          aqui descritos.
        </p>
      </section>

      <section id="objeto" className={styles.section}>
        <h2>2. Objeto do consentimento</h2>
        <p>
          O Titular declara que leu, compreendeu e está de acordo com a{' '}
          <Link href="/politica-de-privacidade">Política de Privacidade</Link> do
          Mané Mercado e, por meio deste Termo, autoriza expressamente o
          Controlador a coletar, armazenar, utilizar, compartilhar e tratar seus
          dados pessoais nas hipóteses em que a base legal aplicável for o{' '}
          <strong>consentimento</strong>, conforme detalhado adiante.
        </p>
        <div className={styles.callout}>
          <strong>Importante:</strong> tratamentos baseados em outras hipóteses
          legais (ex.: execução de contrato, cumprimento de obrigação legal,
          legítimo interesse) <strong>não dependem deste Termo</strong> e são
          descritos integralmente na Política de Privacidade.
        </div>
      </section>

      <section id="dados" className={styles.section}>
        <h2>3. Dados pessoais tratados</h2>
        <p>
          As categorias de dados tratadas com base no consentimento podem
          incluir, conforme a interação:
        </p>
        <ul>
          <li>
            <strong>Identificação e contato:</strong> nome completo, número de
            WhatsApp/telefone e e-mail.
          </li>
          <li>
            <strong>Informações comerciais e de evento:</strong> tipo de evento,
            data prevista, número estimado de convidados, unidade de preferência,
            serviços desejados e horário sugerido para reunião comercial.
          </li>
          <li>
            <strong>Conteúdo de mensagens:</strong> textos, áudios e mídias que
            você nos envia voluntariamente pelos canais de atendimento.
          </li>
          <li>
            <strong>Identificadores digitais:</strong> cookies de marketing,
            identificadores de campanha e eventos de conversão associados ao seu
            navegador ou dispositivo.
          </li>
        </ul>
      </section>

      <section id="finalidades" className={styles.section}>
        <h2>4. Finalidades autorizadas</h2>
        <p>
          O Titular autoriza o tratamento dos dados acima para as seguintes
          finalidades, sujeitas ao consentimento:
        </p>
        <ol>
          <li>
            <strong>Contato comercial:</strong> retorno via WhatsApp, ligação
            telefônica e/ou e-mail para apresentar propostas de eventos, dar
            continuidade a negociações e esclarecer dúvidas.
          </li>
          <li>
            <strong>Envio de comunicações de marketing:</strong> novidades,
            campanhas, promoções, eventos especiais, lançamentos de cardápios,
            conteúdos institucionais e pesquisas de satisfação, por WhatsApp,
            e-mail e/ou SMS.
          </li>
          <li>
            <strong>Personalização e remarketing:</strong> uso de cookies de
            marketing e identificadores digitais para mensurar campanhas em redes
            como Meta (Facebook/Instagram) e Google e exibir anúncios mais
            relevantes ao Titular.
          </li>
          <li>
            <strong>Estatísticas e melhoria do serviço:</strong> análise
            agregada do comportamento de navegação para aprimorar a experiência
            no site e nos canais digitais, quando essa atividade não for
            enquadrada como legítimo interesse.
          </li>
        </ol>
        <p>
          O Titular reconhece que pode aceitar uma, algumas ou todas as
          finalidades acima e que, em formulários específicos, opções de aceite
          poderão ser apresentadas separadamente. A recusa de uma finalidade
          específica não impede a utilização dos demais serviços do Mané Mercado.
        </p>
      </section>

      <section id="compartilhamento" className={styles.section}>
        <h2>5. Compartilhamento autorizado</h2>
        <p>
          Para a realização das finalidades acima, o Titular autoriza o
          compartilhamento dos dados, exclusivamente quando necessário, com:
        </p>
        <ul>
          <li>
            <strong>Provedores de mensageria:</strong> Meta Platforms, Inc.
            (WhatsApp Business API) e plataformas de atendimento utilizadas pelo
            Mané Mercado;
          </li>
          <li>
            <strong>Plataformas de e-mail e marketing:</strong> ferramentas
            utilizadas para envio de comunicações segmentadas;
          </li>
          <li>
            <strong>Plataformas de mídia paga e analytics:</strong> Google LLC
            (Google Ads, Google Analytics) e Meta Platforms, Inc. (Meta Pixel,
            Conversions API), para mensuração de campanhas e remarketing;
          </li>
          <li>
            <strong>Provedores de infraestrutura:</strong> empresas de cloud que
            armazenam e processam dados em nome do Mané Mercado.
          </li>
        </ul>
        <p>
          Alguns destes destinatários estão sediados fora do Brasil, em países
          que podem oferecer grau de proteção diverso do nacional. O Titular
          autoriza expressamente a transferência internacional dos dados para
          tais finalidades, observados os requisitos do art. 33 da LGPD.
        </p>
      </section>

      <section id="prazo" className={styles.section}>
        <h2>6. Prazo do consentimento</h2>
        <p>
          O presente consentimento permanece válido enquanto perdurar a
          finalidade para a qual foi concedido ou até que o Titular o revogue,
          observados os prazos legais de retenção descritos na Política de
          Privacidade.
        </p>
      </section>

      <section id="revogacao" className={styles.section}>
        <h2>7. Revogação do consentimento</h2>
        <p>
          O Titular pode, a qualquer momento e gratuitamente, revogar o
          consentimento aqui concedido, total ou parcialmente, sem necessidade
          de justificativa, mediante manifestação inequívoca dirigida ao
          Encarregado pelos canais abaixo:
        </p>
        <ul>
          <li>
            <strong>E-mail:</strong>{' '}
            <a href="mailto:contato@mane.com.vc">contato@mane.com.vc</a> com o
            assunto <em>“Revogação de consentimento — LGPD”</em>;
          </li>
          <li>
            <strong>Descadastro de e-mail marketing:</strong> link “cancelar
            inscrição” disponível no rodapé de cada comunicação;
          </li>
          <li>
            <strong>Descadastro de WhatsApp:</strong> resposta com a palavra{' '}
            <strong>“SAIR”</strong> em qualquer mensagem comercial recebida.
          </li>
        </ul>
        <p>
          A revogação produzirá efeitos a partir da sua confirmação e não afetará
          a licitude dos tratamentos realizados anteriormente com base no
          consentimento, nem os tratamentos amparados em outras bases legais
          previstas na LGPD.
        </p>
      </section>

      <section id="consequencias" className={styles.section}>
        <h2>8. Consequências da não concessão ou da revogação</h2>
        <p>
          O Titular reconhece que a não concessão ou a revogação do consentimento
          poderá implicar, conforme o caso:
        </p>
        <ul>
          <li>
            Impossibilidade de receber comunicações de marketing, ofertas
            personalizadas, novidades e convites para eventos exclusivos;
          </li>
          <li>
            Redução da personalização da experiência publicitária em redes como
            Meta e Google;
          </li>
          <li>
            Eventual interrupção de etapas que dependam exclusivamente do contato
            comercial, sem prejuízo de canais alternativos disponibilizados pelo
            Mané Mercado.
          </li>
        </ul>
        <p>
          Tratamentos amparados em outras bases legais — como execução de
          contrato (atendimento de uma reserva ou solicitação ativa) e
          cumprimento de obrigações legais — continuarão a ser realizados
          independentemente da revogação deste consentimento.
        </p>
      </section>

      <section id="direitos" className={styles.section}>
        <h2>9. Direitos do titular</h2>
        <p>
          Independentemente deste Termo, o Titular pode exercer, a qualquer
          tempo, todos os direitos previstos no art. 18 da LGPD, conforme
          descrito na seção 10 da{' '}
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>,
          incluindo confirmação de tratamento, acesso, correção, portabilidade,
          eliminação e oposição.
        </p>
      </section>

      <section id="aceite" className={styles.section}>
        <h2>10. Manifestação de vontade</h2>
        <p>
          Ao marcar a opção de aceite ou prosseguir com a interação no formulário
          após ser informado da existência deste Termo e da Política de
          Privacidade, o Titular declara, sob as penas da lei, que:
        </p>
        <ol>
          <li>
            Possui capacidade civil para concordar com este Termo e fornece dados
            verídicos;
          </li>
          <li>
            Leu e compreendeu integralmente os termos aqui dispostos e a Política
            de Privacidade do Mané Mercado;
          </li>
          <li>
            Manifesta sua concordância de maneira <strong>livre,
            informada, específica e inequívoca</strong> com o tratamento de seus
            dados pessoais para as finalidades descritas;
          </li>
          <li>
            Está ciente de que pode revogar este consentimento a qualquer
            momento, conforme a seção 7.
          </li>
        </ol>
        <p>
          O registro do consentimento, com data, hora, IP e forma de coleta, será
          armazenado pelo Mané Mercado como evidência da manifestação, nos termos
          do art. 8º, § 1º, da LGPD.
        </p>
      </section>

      <div className={styles.contactBox}>
        <h2>Dúvidas ou solicitações?</h2>
        <p>
          Fale com o Encarregado pelo Tratamento de Dados Pessoais do Mané
          Mercado.
        </p>
        <p>
          <strong>E-mail:</strong>{' '}
          <a href="mailto:contato@mane.com.vc">contato@mane.com.vc</a>
        </p>
        <p>
          <strong>Assunto sugerido:</strong> “LGPD — [seu pedido]”
        </p>
      </div>

      <div className={styles.footerLinks}>
        <Link href="/politica-de-privacidade">Política de Privacidade</Link>
        <Link href="/">Voltar para a home</Link>
      </div>
    </main>
  );
}
