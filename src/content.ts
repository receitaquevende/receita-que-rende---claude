/**
 * ============================================================================
 *  TEXTOS DA PÁGINA — RECEITA QUE RENDE | MORANGO CRAVEJADO
 * ----------------------------------------------------------------------------
 *  Toda a copy fica aqui. Edite livremente. Nenhuma frase inventa depoimento,
 *  número de alunos, faturamento ou resultado — mantenha assim.
 * ============================================================================
 */

import { PRODUCT } from './config';

/* -------------------------------------------------------------------------- */
/*  NAVEGAÇÃO                                                                  */
/* -------------------------------------------------------------------------- */

export const NAV = [
  { label: 'O produto', href: '#o-morango' },
  { label: 'O que você aprende', href: '#o-que-aprende' },
  { label: 'Oferta', href: '#oferta' },
  { label: 'Dúvidas', href: '#faq' },
] as const;

export const CTA_LABEL = {
  hero: 'Quero aprender',
  offer: `Quero o ${PRODUCT.name}`,
  final: 'Quero acessar agora',
  sticky: 'Quero aprender',
};

/* -------------------------------------------------------------------------- */
/*  HERO                                                                       */
/* -------------------------------------------------------------------------- */

export const HERO = {
  brand: PRODUCT.name,
  eyebrow: 'Guia digital de confeitaria',
  title: PRODUCT.item,
  lead:
    'Aprenda a preparar um Morango Cravejado irresistível — morango fresco, ' +
    'recheio cremoso, chocolate branco e o acabamento cravejado que faz o produto parar o olhar.',
  bullets: ['Passo a passo completo', 'Do morango à precificação', 'Acesso imediato no celular'],
  note: 'Conteúdo digital • Acesso vitalício • Pagamento único',
};

/* -------------------------------------------------------------------------- */
/*  SEÇÃO 2 — DESEJO                                                           */
/* -------------------------------------------------------------------------- */

export const DESIRE = {
  headline: 'Você não consegue olhar e não sentir vontade de provar.',
  sub:
    'Um morango inteiro no ponto certo, envolvido em creme e chocolate branco, ' +
    'cravejado até brilhar como pequenas pedras. É bonito antes de ser doce.',
  captions: [
    { title: 'O morango', text: 'Inteiro, firme, vermelho no centro.' },
    { title: 'O recheio', text: 'Cremoso, envolvente, no ponto certo.' },
    { title: 'O cravejado', text: 'Textura e brilho que param o scroll.' },
  ],
};

/* -------------------------------------------------------------------------- */
/*  SEÇÃO 3 — TÉCNICA / CAMADAS                                                */
/* -------------------------------------------------------------------------- */

export const TECHNIQUE = {
  headline: 'Por trás de um morango tão bonito, existe técnica.',
  intro:
    'O resultado final parece simples. Mas cada camada tem um porquê, uma ordem ' +
    'e um ponto certo. É isso que separa um doce caseiro de um produto de vitrine.',
  layers: [
    {
      n: '01',
      name: 'Morango',
      text: 'A fruta fresca no centro. A escolha e a secagem certas definem a aparência e a durabilidade.',
    },
    {
      n: '02',
      name: 'Recheio',
      text: 'O creme que envolve o morango precisa de consistência para modelar sem escorrer.',
    },
    {
      n: '03',
      name: 'Chocolate branco',
      text: 'A cobertura sela o doce, dá firmeza e cria a superfície para o cravejado.',
    },
    {
      n: '04',
      name: 'Cravejado',
      text: 'Calda de açúcar que vira cristais — o acabamento que dá nome e identidade ao doce.',
    },
  ],
  disclaimer: 'As proporções, os pontos e o passo a passo completo fazem parte do guia.',
};

/* -------------------------------------------------------------------------- */
/*  SEÇÃO 4 — O QUE VOCÊ VAI APRENDER                                          */
/* -------------------------------------------------------------------------- */

export const LEARN = {
  headline: 'O que você vai aprender',
  sub: 'Um caminho completo, do primeiro morango à venda.',
  items: [
    { n: '01', title: 'Escolha do morango', text: 'Como selecionar a fruta ideal em firmeza, ponto e tamanho.' },
    { n: '02', title: 'Higienização e secagem', text: 'O processo correto para conservar melhor e vender com segurança.' },
    { n: '03', title: 'Recheios', text: 'Duas bases cremosas: uma clássica e uma versão cítrica.' },
    { n: '04', title: 'Modelagem', text: 'Como dar forma e deixar todos os doces no mesmo padrão.' },
    { n: '05', title: 'Calda vidrada', text: 'O preparo da calda de açúcar que vira o acabamento cristalizado.' },
    { n: '06', title: 'Cravejado', text: 'A técnica que transforma a calda nos cristais que param o scroll.' },
    { n: '07', title: 'Chocolate branco', text: 'Como trabalhar a cobertura para selar e firmar o doce.' },
    { n: '08', title: 'Acabamento', text: 'Os detalhes finais que deixam o produto com cara de vitrine.' },
    { n: '09', title: 'Conservação', text: 'Validade real, armazenamento e o que fazer para durar mais.' },
    { n: '10', title: 'Embalagem', text: 'Como embalar para proteger, transportar e valorizar o doce.' },
    { n: '11', title: 'Delivery', text: 'Cuidados para o doce chegar inteiro na casa do cliente.' },
    { n: '12', title: 'Precificação', text: 'Como calcular o custo real antes de definir o preço.' },
    { n: '13', title: 'Estratégias de venda', text: 'Como apresentar, divulgar e vender o seu Morango Cravejado.' },
  ],
  disclaimer: 'A página apresenta o conteúdo. O passo a passo detalhado, as receitas e as vídeo-aulas estão dentro do guia.',
};

/* -------------------------------------------------------------------------- */
/*  SEÇÃO 5 — O ACABAMENTO                                                     */
/* -------------------------------------------------------------------------- */

export const FINISH = {
  headline: 'O acabamento que faz o morango parar o scroll.',
  sub:
    'O cravejado não é enfeite. É o que dá textura, brilho e identidade ao produto — ' +
    'e o que faz alguém parar para olhar de novo.',
  steps: [
    { n: '1', name: 'Calda', text: 'Uma calda de açúcar no ponto certo, espalhada em camada fina.' },
    { n: '2', name: 'Cristalização', text: 'Ao esfriar, a calda vira uma placa rígida e quebradiça.' },
    { n: '3', name: 'Cristais', text: 'A placa é quebrada em cristais irregulares e brilhantes.' },
    { n: '4', name: 'Acabamento', text: 'Os cristais entram no chocolate e cobrem o doce por inteiro.' },
  ],
};

/* -------------------------------------------------------------------------- */
/*  SEÇÃO 6 — NÃO É SÓ UMA RECEITA                                             */
/* -------------------------------------------------------------------------- */

export const PROCESS = {
  headlineTop: 'Não é só aprender uma receita.',
  headlineBottom: 'É aprender o processo.',
  intro:
    'Fazer um morango bonito uma vez é sorte. Fazer sempre no mesmo padrão, ' +
    'embalar bem, conservar e vender com preço certo é processo. O guia trata das duas coisas.',
  checks: [
    'Preparo', 'Montagem', 'Acabamento', 'Padronização',
    'Conservação', 'Embalagem', 'Precificação', 'Venda',
  ],
};

/* -------------------------------------------------------------------------- */
/*  SEÇÃO 7 — PARA QUEM É                                                      */
/* -------------------------------------------------------------------------- */

export const FOR_WHO = {
  headline: 'Para quem é o Receita Que Rende',
  personas: [
    {
      title: 'Para quem quer começar',
      text: 'Para quem quer aprender o produto do zero, com um caminho claro do início ao fim.',
    },
    {
      title: 'Para quem já vende doces',
      text: 'Para quem quer adicionar ao catálogo um produto visualmente diferente do comum.',
    },
    {
      title: 'Para quem vende por encomenda',
      text: 'Para quem quer melhorar a apresentação e deixar toda a produção no mesmo padrão.',
    },
    {
      title: 'Para quem quer testar uma ideia',
      text: 'Para quem quer entender o processo inteiro antes de começar a produzir.',
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  SEÇÃO 8 — PRECIFICAÇÃO                                                     */
/* -------------------------------------------------------------------------- */

export const PRICING = {
  headline: 'Antes de definir o preço, entenda o seu custo.',
  intro:
    'Muita gente erra o preço porque calcula só os ingredientes. O guia mostra como ' +
    'somar tudo o que entra no produto antes de decidir quanto cobrar.',
  costParts: ['Ingredientes', 'Embalagem', 'Produção'],
  costResult: 'Custo',
  chain: ['Custo', 'Preço', 'Margem'],
  note:
    'O guia ensina o método de cálculo. Os valores dependem da sua região, dos seus ' +
    'fornecedores e das suas escolhas — aqui não há promessa de lucro ou faturamento.',
};

/* -------------------------------------------------------------------------- */
/*  SEÇÃO 9 — O PRODUTO                                                        */
/* -------------------------------------------------------------------------- */

export const PRODUCT_SECTION = {
  kicker: PRODUCT.name,
  title: PRODUCT.item,
  format: PRODUCT.format,
  tagline: `Seu guia para dominar o processo do ${PRODUCT.item}.`,
  description:
    'Um material digital, direto e organizado por etapas, com 5 receitas-base e 3 vídeo-aulas. ' +
    'Você abre no celular ou no computador, acompanha na ordem e volta sempre que precisar.',
  highlights: [
    'Guia com 11 etapas',
    '5 receitas-base',
    '3 vídeo-aulas',
    'Técnica do cravejado',
    'Conservação e embalagem',
    'Precificação e venda',
  ],
};

/* -------------------------------------------------------------------------- */
/*  SEÇÃO 10 — OFERTA                                                          */
/* -------------------------------------------------------------------------- */

export const OFFER = {
  kicker: 'A oferta',
  title: `${PRODUCT.name} — ${PRODUCT.item}`,
  subtitle: 'Tudo o que está incluído no guia digital:',
  includes: [
    'Guia completo do Morango Cravejado (11 etapas)',
    '5 receitas-base: recheios, calda e chocolate',
    '3 vídeo-aulas passo a passo',
    '2 sabores de recheio (clássico e cítrico)',
    'Técnica da calda vidrada e do cravejado',
    'Modelagem e padronização',
    'Acabamento de vitrine',
    'Conservação, validade e embalagem',
    'Produção para delivery',
    'Estratégias de venda e divulgação',
  ],
  priceCaption: 'Pagamento único • Acesso imediato',
  afterPriceNote: 'Acesso liberado por e-mail assim que o pagamento é confirmado.',
  noPriceNote: 'Toque no botão para ver a oferta completa.',
};

/* -------------------------------------------------------------------------- */
/*  SEÇÃO 11 — GARANTIA                                                        */
/* -------------------------------------------------------------------------- */

export const GUARANTEE = {
  kicker: 'Garantia',
  title: (days: number) => `${days} dias de garantia`,
  text: (days: number) =>
    `Você tem ${days} dias para acessar o conteúdo com calma. Se entender que não ` +
    `era para você, é só pedir o reembolso dentro do prazo — sem complicação.`,
};

/* -------------------------------------------------------------------------- */
/*  SEÇÃO 12 — FAQ                                                             */
/* -------------------------------------------------------------------------- */

export const FAQ = [
  {
    q: 'É um produto digital?',
    a: 'Sim. É um guia digital, com material escrito e vídeo-aulas. Não enviamos nada pelos Correios — o acesso é online.',
  },
  {
    q: 'Como eu recebo o acesso?',
    a: 'Assim que o pagamento é confirmado, o acesso é liberado automaticamente no e-mail que você usar na compra.',
  },
  {
    q: 'Consigo acessar pelo celular?',
    a: 'Sim. O conteúdo foi pensado para ser acompanhado pelo celular, tablet ou computador, e fica disponível para você rever quando quiser.',
  },
  {
    q: 'Preciso ter experiência com confeitaria?',
    a: 'Não. O guia começa pela escolha do morango e segue etapa por etapa. Quem já vende doces também aproveita a parte de padronização, embalagem e preço.',
  },
  {
    q: 'O conteúdo ensina o Morango Cravejado completo?',
    a: 'Sim. São 11 etapas, da escolha do morango ao acabamento cravejado, mais 5 receitas-base (recheios, calda e chocolate) e 3 vídeo-aulas.',
  },
  {
    q: 'O guia fala sobre precificação?',
    a: 'Sim. Há uma parte dedicada a calcular o custo real do produto antes de definir o preço de venda.',
  },
  {
    q: 'E sobre embalagem e entrega?',
    a: 'Sim. O guia trata de embalagem, conservação e dos cuidados para o doce chegar bem no delivery.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'O pagamento é feito em ambiente seguro e aceita cartão, Pix e boleto. No Pix e no cartão, a confirmação costuma ser na hora.',
  },
];

/* -------------------------------------------------------------------------- */
/*  SEÇÃO 13 — CTA FINAL                                                       */
/* -------------------------------------------------------------------------- */

export const FINAL_CTA = {
  headline: 'Pronto para aprender o Morango Cravejado?',
  sub:
    `Tenha acesso ao ${PRODUCT.name} e aprenda o processo completo para preparar, ` +
    'finalizar e estruturar o seu produto.',
};

/* -------------------------------------------------------------------------- */
/*  RODAPÉ                                                                     */
/* -------------------------------------------------------------------------- */

export const FOOTER = {
  tagline: 'Guia digital para preparar, finalizar e vender o Morango Cravejado.',
  disclaimer:
    'Este site não faz parte do Facebook, do Instagram ou da Meta, e não é endossado por eles. ' +
    'O conteúdo é educativo e não garante resultado de vendas ou de faturamento — ' +
    'os resultados dependem da aplicação de cada pessoa.',
  links: [
    { label: 'Termos de uso', href: '/termos' },
    { label: 'Política de privacidade', href: '/privacidade' },
  ],
};
