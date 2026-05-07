import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../legal.module.css';

const LAST_UPDATE = '07 de maio de 2026';
const VERSION = '1.0';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de Privacidade do Mané Mercado — como tratamos seus dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD).',
  alternates: { canonical: '/politica-de-privacidade' },
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <main className={styles.container}>
      <span className={styles.eyebrow}>Documento legal</span>
      <h1 className={styles.title}>Política de Privacidade</h1>
      <p className={styles.lede}>
        Esta Política descreve como o <strong>Mané Mercado</strong> coleta, utiliza,
        armazena, compartilha e protege os dados pessoais de visitantes, clientes e
        interessados em nossos serviços, em conformidade com a Lei nº 13.709/2018
        (Lei Geral de Proteção de Dados — LGPD).
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
            <a href="#controlador">Controlador dos dados</a>
          </li>
          <li>
            <a href="#definicoes">Definições</a>
          </li>
          <li>
            <a href="#dados-coletados">Dados pessoais que coletamos</a>
          </li>
          <li>
            <a href="#finalidades">Finalidades e bases legais</a>
          </li>
          <li>
            <a href="#compartilhamento">Compartilhamento com terceiros</a>
          </li>
          <li>
            <a href="#transferencia-internacional">Transferência internacional</a>
          </li>
          <li>
            <a href="#cookies">Cookies e tecnologias similares</a>
          </li>
          <li>
            <a href="#retencao">Prazo de retenção</a>
          </li>
          <li>
            <a href="#seguranca">Segurança da informação</a>
          </li>
          <li>
            <a href="#direitos">Direitos do titular</a>
          </li>
          <li>
            <a href="#criancas">Crianças e adolescentes</a>
          </li>
          <li>
            <a href="#alteracoes">Alterações desta Política</a>
          </li>
          <li>
            <a href="#contato">Encarregado e contato</a>
          </li>
          <li>
            <a href="#legislacao">Legislação aplicável e foro</a>
          </li>
        </ol>
      </nav>

      <section id="controlador" className={styles.section}>
        <h2>1. Controlador dos dados</h2>
        <p>
          O controlador dos dados pessoais tratados nos termos desta Política é o{' '}
          <strong>Mané Mercado</strong>, pessoa jurídica de direito privado, doravante
          denominado simplesmente “Mané Mercado”, “nós” ou “nosso”.
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
          <br />
          <strong>Site institucional:</strong>{' '}
          <a href="https://mane.com.vc">mane.com.vc</a>
        </div>
        <p>
          O Mané Mercado opera unidades em <strong>Brasília (DF)</strong>,{' '}
          <strong>Águas Claras (DF)</strong> e <strong>São Paulo (SP)</strong>, e
          mantém sites e aplicações nos domínios <em>mane.com.vc</em> e seus
          subdomínios (incluindo, sem limitação, <em>b2b.mane.com.vc</em>,{' '}
          <em>reservas.mane.com.vc</em>, <em>menu.mane.com.vc</em>,{' '}
          <em>chat.mane.com.vc</em> e <em>engine.mane.com.vc</em>).
        </p>
      </section>

      <section id="definicoes" className={styles.section}>
        <h2>2. Definições</h2>
        <p>Para os fins desta Política, considera-se:</p>
        <ul>
          <li>
            <strong>Dado pessoal:</strong> informação relacionada a pessoa natural
            identificada ou identificável.
          </li>
          <li>
            <strong>Titular:</strong> pessoa natural a quem se referem os dados
            pessoais.
          </li>
          <li>
            <strong>Tratamento:</strong> toda operação realizada com dados pessoais,
            como coleta, armazenamento, utilização, compartilhamento e eliminação.
          </li>
          <li>
            <strong>Controlador:</strong> pessoa natural ou jurídica a quem competem
            as decisões sobre o tratamento dos dados — neste caso, o Mané Mercado.
          </li>
          <li>
            <strong>Operador:</strong> pessoa natural ou jurídica que realiza o
            tratamento em nome do controlador (ex.: prestadores de serviço de
            hospedagem, mensageria, analytics).
          </li>
          <li>
            <strong>Encarregado (DPO):</strong> pessoa indicada pelo controlador como
            canal de comunicação entre o controlador, os titulares e a Autoridade
            Nacional de Proteção de Dados (ANPD).
          </li>
        </ul>
      </section>

      <section id="dados-coletados" className={styles.section}>
        <h2>3. Dados pessoais que coletamos</h2>
        <p>
          Coletamos apenas os dados estritamente necessários para cumprir as
          finalidades descritas nesta Política. A depender da forma como você
          interage com o Mané Mercado, podemos tratar:
        </p>

        <h3>3.1. Dados fornecidos diretamente por você</h3>
        <ul>
          <li>
            <strong>Identificação:</strong> nome completo.
          </li>
          <li>
            <strong>Contato:</strong> número de WhatsApp/telefone e endereço de
            e-mail.
          </li>
          <li>
            <strong>Solicitação de evento (B2B):</strong> tipo de evento
            (aniversário, confraternização, formatura, casamento, etc.), data
            prevista, número estimado de convidados, unidade de preferência
            (Brasília, Águas Claras ou São Paulo), serviços desejados (área
            reservada, cardápio especial, bolo/docinhos, open bar, etc.) e horário
            preferido para reunião comercial.
          </li>
          <li>
            <strong>Reserva de mesa:</strong> dados informados em formulários de
            reserva (nome, contato, número de pessoas, data, ocasião).
          </li>
          <li>
            <strong>Comunicação:</strong> conteúdo das mensagens trocadas com a
            nossa equipe pelos canais de atendimento (WhatsApp, e-mail, chat do
            site).
          </li>
        </ul>

        <h3>3.2. Dados coletados automaticamente</h3>
        <ul>
          <li>
            <strong>Dados de navegação:</strong> endereço IP, identificador de
            dispositivo, sistema operacional, tipo e versão do navegador, idioma,
            fuso horário, páginas visitadas, tempo de permanência, origem do
            tráfego (referrer) e cliques.
          </li>
          <li>
            <strong>Identificadores de marketing:</strong> cookies e tecnologias
            similares utilizadas por Google Analytics, Meta Pixel e ferramentas
            equivalentes (ver seção <a href="#cookies">7</a>).
          </li>
        </ul>

        <h3>3.3. Dados sensíveis</h3>
        <p>
          O Mané Mercado <strong>não solicita nem trata, de forma rotineira, dados
          pessoais sensíveis</strong> (origem racial, convicção religiosa, opinião
          política, filiação sindical, dado referente à saúde, vida sexual,
          biométrico ou genético). Caso, em situação excepcional (por exemplo,
          restrição alimentar grave), você forneça espontaneamente esse tipo de
          informação, ela será tratada com base no seu consentimento específico e
          utilizada exclusivamente para a finalidade indicada.
        </p>
      </section>

      <section id="finalidades" className={styles.section}>
        <h2>4. Finalidades e bases legais</h2>
        <p>
          Tratamos seus dados pessoais com finalidades específicas e legítimas,
          sempre amparadas em uma das hipóteses legais previstas nos artigos 7º e
          11 da LGPD:
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Finalidade</th>
                <th>Dados envolvidos</th>
                <th>Base legal (LGPD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Atender solicitações de orçamento e contratação de eventos
                  corporativos e particulares (B2B).
                </td>
                <td>
                  Nome, WhatsApp, e-mail, dados do evento (tipo, data, convidados,
                  unidade, necessidades).
                </td>
                <td>
                  Execução de procedimentos preliminares e contrato (Art. 7º, V);
                  consentimento (Art. 7º, I) para contato comercial.
                </td>
              </tr>
              <tr>
                <td>
                  Realizar reservas de mesa, gerenciar agenda e confirmar
                  comparecimento.
                </td>
                <td>Nome, contato, data, número de pessoas, ocasião.</td>
                <td>Execução de contrato (Art. 7º, V).</td>
              </tr>
              <tr>
                <td>
                  Agendar reuniões comerciais via Google Calendar e enviar convite
                  com link de videoconferência.
                </td>
                <td>Nome, e-mail, telefone, horário escolhido.</td>
                <td>Execução de procedimentos preliminares (Art. 7º, V).</td>
              </tr>
              <tr>
                <td>
                  Enviar comunicações por WhatsApp e e-mail relacionadas à
                  solicitação ou reserva (confirmações, lembretes, propostas).
                </td>
                <td>Nome, WhatsApp, e-mail, conteúdo da mensagem.</td>
                <td>Execução de contrato (Art. 7º, V); legítimo interesse (Art. 7º, IX).</td>
              </tr>
              <tr>
                <td>
                  Enviar comunicações de marketing, novidades, campanhas e
                  promoções.
                </td>
                <td>Nome, WhatsApp, e-mail.</td>
                <td>Consentimento específico (Art. 7º, I).</td>
              </tr>
              <tr>
                <td>
                  Medir audiência, entender uso do site e melhorar a experiência
                  (analytics).
                </td>
                <td>
                  Dados de navegação, identificadores de cookies, IP pseudonimizado.
                </td>
                <td>Legítimo interesse (Art. 7º, IX) ou consentimento, conforme o caso.</td>
              </tr>
              <tr>
                <td>
                  Mensurar campanhas publicitárias e exibir anúncios mais relevantes
                  (Meta, Google e parceiros).
                </td>
                <td>Identificadores de cookies de marketing, eventos de conversão.</td>
                <td>Consentimento (Art. 7º, I).</td>
              </tr>
              <tr>
                <td>
                  Prevenir fraudes, abusos e garantir a segurança dos sistemas.
                </td>
                <td>IP, logs de acesso, dispositivo.</td>
                <td>Legítimo interesse (Art. 7º, IX); cumprimento de obrigação legal (Art. 7º, II).</td>
              </tr>
              <tr>
                <td>
                  Cumprir obrigações legais, regulatórias, fiscais e contábeis.
                </td>
                <td>Dados de identificação e transação.</td>
                <td>Cumprimento de obrigação legal (Art. 7º, II).</td>
              </tr>
              <tr>
                <td>Exercer direitos em processos judiciais, administrativos ou arbitrais.</td>
                <td>Dados de identificação, contato e transação.</td>
                <td>Exercício regular de direitos (Art. 7º, VI).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="compartilhamento" className={styles.section}>
        <h2>5. Compartilhamento com terceiros</h2>
        <p>
          O Mané Mercado <strong>não vende dados pessoais</strong>. Compartilhamos
          informações apenas com terceiros que atuam como nossos operadores ou
          parceiros, na medida estritamente necessária às finalidades desta
          Política e mediante a celebração de contratos com cláusulas adequadas de
          confidencialidade e proteção de dados.
        </p>

        <h3>5.1. Categorias de operadores e parceiros</h3>
        <ul>
          <li>
            <strong>Infraestrutura e hospedagem:</strong> provedores de cloud
            (Railway, Cloudflare, Vercel e equivalentes) que armazenam dados em
            servidores destinados à operação dos nossos sistemas.
          </li>
          <li>
            <strong>Mensageria e atendimento:</strong> Meta Platforms, Inc.
            (WhatsApp Business API), Chatwoot e plataformas internas de
            engajamento, utilizadas para receber e responder mensagens.
          </li>
          <li>
            <strong>Agenda e produtividade:</strong> Google LLC (Google Calendar e
            Google Workspace), utilizado para agendamento de reuniões comerciais e
            envio de convites.
          </li>
          <li>
            <strong>Analytics e medição:</strong> Google LLC (Google Analytics 4) e
            Meta Platforms, Inc. (Meta Pixel), para medir audiência e desempenho
            de campanhas.
          </li>
          <li>
            <strong>Marketing e mídia:</strong> redes de anúncio (Google Ads, Meta
            Ads e parceiros), para mensuração de conversões e remarketing, sempre
            sujeito a consentimento.
          </li>
          <li>
            <strong>Sistemas internos do Mané Mercado:</strong> CRM, ERP, sistemas
            de reservas, de cardápio digital e de notificações desenvolvidos pela
            própria empresa.
          </li>
          <li>
            <strong>Autoridades públicas:</strong> quando exigido por lei, ordem
            judicial ou requisição administrativa legítima.
          </li>
          <li>
            <strong>Sucessores empresariais:</strong> em caso de fusão, aquisição,
            reorganização societária ou venda de ativos, observada a legislação
            aplicável.
          </li>
        </ul>

        <p>
          Sempre que possível, utilizamos técnicas de minimização e
          pseudonimização e exigimos contratualmente que nossos operadores tratem
          os dados apenas conforme as instruções do Mané Mercado.
        </p>
      </section>

      <section id="transferencia-internacional" className={styles.section}>
        <h2>6. Transferência internacional de dados</h2>
        <p>
          Alguns dos operadores indicados na seção 5 estão sediados ou possuem
          servidores fora do Brasil (notadamente nos Estados Unidos da América e
          em países da União Europeia). Nestes casos, a transferência
          internacional ocorre nos termos do art. 33 da LGPD, mediante
          mecanismos adequados, como cláusulas contratuais padrão, certificações
          de adequação e/ou consentimento específico do titular, sempre garantindo
          o nível de proteção previsto na legislação brasileira.
        </p>
      </section>

      <section id="cookies" className={styles.section}>
        <h2>7. Cookies e tecnologias similares</h2>
        <p>
          Cookies são pequenos arquivos armazenados no seu dispositivo que
          permitem reconhecer o navegador e lembrar informações sobre sua visita.
          Utilizamos as seguintes categorias:
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Finalidade</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Estritamente necessários</strong>
                </td>
                <td>
                  Garantem o funcionamento básico do site (navegação, segurança,
                  preferências de idioma). Não podem ser desativados.
                </td>
                <td>Sessão, preferências, anti-CSRF.</td>
              </tr>
              <tr>
                <td>
                  <strong>Desempenho e analytics</strong>
                </td>
                <td>
                  Ajudam a entender como o site é utilizado e a melhorar a
                  experiência.
                </td>
                <td>Google Analytics 4 (_ga, _ga_*).</td>
              </tr>
              <tr>
                <td>
                  <strong>Marketing</strong>
                </td>
                <td>
                  Utilizados para mensurar campanhas publicitárias e exibir
                  anúncios mais relevantes.
                </td>
                <td>Meta Pixel (_fbp, fr), Google Ads.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Você pode, a qualquer momento, gerenciar ou bloquear cookies pelas
          configurações do seu navegador. A desativação de cookies analíticos e de
          marketing não compromete a navegação, mas pode reduzir a personalização
          de conteúdo. Cookies estritamente necessários não podem ser desativados
          sem prejuízo do funcionamento do site.
        </p>
      </section>

      <section id="retencao" className={styles.section}>
        <h2>8. Prazo de retenção</h2>
        <p>
          Conservamos os dados pessoais apenas pelo tempo necessário ao
          cumprimento das finalidades para as quais foram coletados, observados os
          seguintes prazos referenciais:
        </p>
        <ul>
          <li>
            <strong>Solicitações de evento (B2B) sem contratação:</strong> até{' '}
            <strong>24 meses</strong> após o último contato, para fins de
            relacionamento comercial e prospecção.
          </li>
          <li>
            <strong>Eventos contratados, reservas e pedidos:</strong> pelo prazo
            de execução do serviço e, posteriormente, pelos prazos legais
            aplicáveis (em regra, até <strong>5 anos</strong> após o término da
            relação, conforme arts. 27 e 206 do Código Civil e Código de Defesa do
            Consumidor).
          </li>
          <li>
            <strong>Documentos fiscais e contábeis:</strong> pelo prazo exigido
            pela legislação tributária aplicável (em regra, até{' '}
            <strong>5 anos</strong>).
          </li>
          <li>
            <strong>Logs de acesso:</strong> mínimo de <strong>6 meses</strong>{' '}
            (art. 15 do Marco Civil da Internet — Lei nº 12.965/2014).
          </li>
          <li>
            <strong>Dados tratados com base em consentimento:</strong> até a
            revogação do consentimento ou enquanto perdurar a finalidade.
          </li>
        </ul>
        <p>
          Após o fim do prazo, os dados serão eliminados ou anonimizados, salvo
          quando sua conservação for necessária para o exercício regular de
          direitos em processo judicial, administrativo ou arbitral.
        </p>
      </section>

      <section id="seguranca" className={styles.section}>
        <h2>9. Segurança da informação</h2>
        <p>
          Adotamos medidas técnicas e administrativas razoáveis e proporcionais
          aos riscos envolvidos para proteger seus dados pessoais contra acessos
          não autorizados, perda, destruição, alteração ou divulgação indevida,
          incluindo, sem limitação:
        </p>
        <ul>
          <li>Criptografia em trânsito (TLS/HTTPS) e, quando aplicável, em repouso;</li>
          <li>Controle de acesso baseado em perfis e princípio do menor privilégio;</li>
          <li>Registro de logs e monitoramento de eventos de segurança;</li>
          <li>Atualização periódica de softwares e revisão de vulnerabilidades;</li>
          <li>
            Treinamento e termos de confidencialidade celebrados com colaboradores
            e parceiros.
          </li>
        </ul>
        <p>
          Apesar dos esforços empregados, nenhum sistema é absolutamente seguro.
          Caso você identifique qualquer falha de segurança, pedimos que entre em
          contato pelos canais indicados na seção 13.
        </p>
      </section>

      <section id="direitos" className={styles.section}>
        <h2>10. Direitos do titular</h2>
        <p>
          Nos termos do art. 18 da LGPD, você pode, a qualquer momento e
          gratuitamente, exercer os seguintes direitos sobre seus dados pessoais:
        </p>
        <ul>
          <li>
            <strong>Confirmação</strong> da existência de tratamento;
          </li>
          <li>
            <strong>Acesso</strong> aos dados;
          </li>
          <li>
            <strong>Correção</strong> de dados incompletos, inexatos ou
            desatualizados;
          </li>
          <li>
            <strong>Anonimização, bloqueio ou eliminação</strong> de dados
            desnecessários, excessivos ou tratados em desconformidade com a LGPD;
          </li>
          <li>
            <strong>Portabilidade</strong> a outro fornecedor de serviço ou
            produto, observados os segredos comercial e industrial;
          </li>
          <li>
            <strong>Eliminação</strong> dos dados pessoais tratados com base no
            seu consentimento;
          </li>
          <li>
            <strong>Informação</strong> sobre as entidades públicas e privadas com
            as quais o controlador realizou uso compartilhado de dados;
          </li>
          <li>
            <strong>Informação</strong> sobre a possibilidade de não fornecer
            consentimento e as consequências da negativa;
          </li>
          <li>
            <strong>Revogação do consentimento</strong>, nos termos do § 5º do
            art. 8º da LGPD;
          </li>
          <li>
            <strong>Oposição</strong> a tratamentos realizados com fundamento em
            outras hipóteses legais que não o consentimento, em caso de
            descumprimento da LGPD;
          </li>
          <li>
            <strong>Revisão</strong> de decisões tomadas unicamente com base em
            tratamento automatizado de dados pessoais que afetem seus interesses.
          </li>
        </ul>
        <p>
          Para exercer qualquer um destes direitos, basta enviar uma solicitação
          ao Encarregado pelos canais da seção 13. Poderemos solicitar
          informações adicionais para confirmar sua identidade antes de atender
          ao pedido. Responderemos em prazo razoável e, sempre que possível, no
          prazo de 15 (quinze) dias.
        </p>
      </section>

      <section id="criancas" className={styles.section}>
        <h2>11. Crianças e adolescentes</h2>
        <p>
          Nossos canais digitais não se destinam a crianças. Não coletamos,
          conscientemente, dados pessoais de crianças (menores de 12 anos
          completos). O tratamento de dados de adolescentes (entre 12 e 18 anos)
          ocorre apenas em seu melhor interesse, observado o disposto no art. 14
          da LGPD e, quando aplicável, mediante consentimento específico de pelo
          menos um dos pais ou responsável legal.
        </p>
      </section>

      <section id="alteracoes" className={styles.section}>
        <h2>12. Alterações desta Política</h2>
        <p>
          Esta Política pode ser atualizada periodicamente para refletir
          alterações em nossos serviços, na legislação aplicável ou em melhores
          práticas de proteção de dados. Sempre que houver mudança relevante,
          comunicaremos por meio dos nossos canais habituais e/ou por aviso no
          próprio site, indicando a data da nova versão. Recomendamos que você
          revise esta Política regularmente.
        </p>
      </section>

      <section id="contato" className={styles.section}>
        <h2>13. Encarregado e contato</h2>
        <p>
          Para qualquer dúvida, solicitação ou exercício de direitos relacionados
          aos seus dados pessoais, entre em contato com o nosso Encarregado pelo
          Tratamento de Dados Pessoais (DPO):
        </p>
      </section>

      <section id="legislacao" className={styles.section}>
        <h2>14. Legislação aplicável e foro</h2>
        <p>
          Esta Política é regida pelas leis da República Federativa do Brasil,
          em especial pela Lei nº 13.709/2018 (LGPD), pela Lei nº 12.965/2014
          (Marco Civil da Internet) e pelo Código de Defesa do Consumidor.
        </p>
        <p>
          Fica eleito o foro da Comarca de Brasília — Distrito Federal para
          dirimir quaisquer controvérsias decorrentes desta Política, com renúncia
          expressa a qualquer outro, por mais privilegiado que seja, ressalvado o
          direito do titular consumidor de propor ação no foro do seu domicílio.
        </p>
      </section>

      <div className={styles.contactBox}>
        <h2>Fale com o Encarregado (DPO)</h2>
        <p>
          <strong>E-mail:</strong>{' '}
          <a href="mailto:contato@mane.com.vc">contato@mane.com.vc</a>
        </p>
        <p>
          <strong>Assunto sugerido:</strong> “LGPD — [seu pedido]”
        </p>
        <p>
          Você também pode, a qualquer momento, apresentar reclamação diretamente
          à Autoridade Nacional de Proteção de Dados (ANPD):{' '}
          <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">
            gov.br/anpd
          </a>
          .
        </p>
      </div>

      <div className={styles.footerLinks}>
        <Link href="/termo-de-consentimento">Termo de Consentimento</Link>
        <Link href="/">Voltar para a home</Link>
      </div>
    </main>
  );
}
