import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  // Perguntas Gerais
  {
    question: "Quanto custa a consulta inicial?",
    answer: "A primeira consulta é gratuita! Analisamos seu caso sem compromisso para orientar você sobre as melhores opções jurídicas disponíveis.",
  },
  {
    question: "Vocês atendem minha cidade?",
    answer: "Atendemos toda a Região do Cariri (Juazeiro do Norte, Crato, Barbalha e cidades vizinhas) e também realizamos atendimentos online para todo o Ceará e Brasil.",
  },
  {
    question: "Como funciona o atendimento pelo WhatsApp?",
    answer: "Você pode entrar em contato a qualquer momento pelo WhatsApp. Respondemos em até 5 minutos durante o horário comercial. Após o primeiro contato, agendamos uma consulta presencial ou por videochamada.",
  },
  {
    question: "Como são cobrados os honorários?",
    answer: "Os honorários variam conforme o tipo de caso. Em muitos casos trabalhistas e previdenciários, trabalhamos com êxito, ou seja, você só paga se ganhar a causa. Explicamos todas as opções na consulta.",
  },
  // Direitos Trabalhistas
  {
    question: "Fui demitido sem justa causa. Quais são meus direitos?",
    answer: "Você tem direito a: aviso prévio (trabalhado ou indenizado), saldo de salário, férias proporcionais + 1/3, 13º proporcional, multa de 40% do FGTS, liberação do FGTS e seguro-desemprego (se preencher os requisitos). É importante verificar se todas as verbas foram pagas corretamente.",
  },
  {
    question: "Minha empresa não está pagando as horas extras. O que fazer?",
    answer: "Você pode entrar com uma ação trabalhista para cobrar as horas extras não pagas dos últimos 5 anos. É importante guardar provas como registro de ponto, mensagens, e-mails ou testemunhas que comprovem a jornada real de trabalho.",
  },
  {
    question: "Trabalhei sem carteira assinada. Tenho algum direito?",
    answer: "Sim! Você pode entrar com ação trabalhista para reconhecer o vínculo empregatício e receber todos os direitos: FGTS, férias, 13º, horas extras e demais verbas. É importante ter provas do trabalho realizado.",
  },
  {
    question: "Sofri assédio moral no trabalho. Posso processar?",
    answer: "Sim. O assédio moral gera direito a indenização por danos morais. Documente as situações (e-mails, mensagens, gravações), anote datas e testemunhas. Você pode pedir rescisão indireta e receber todas as verbas como se tivesse sido demitido sem justa causa.",
  },
  {
    question: "Estou grávida e fui demitida. Isso é legal?",
    answer: "Não! A gestante tem estabilidade desde a confirmação da gravidez até 5 meses após o parto. Se foi demitida, você pode pedir reintegração ao emprego ou indenização de todo o período de estabilidade.",
  },
  // Direitos Previdenciários (INSS)
  {
    question: "Tive meu benefício do INSS negado. O que fazer?",
    answer: "Você pode entrar com recurso administrativo (no próprio INSS) ou ação judicial. Muitos benefícios negados são revertidos na Justiça com a documentação correta e perícia médica judicial. Quanto antes agir, melhor.",
  },
  {
    question: "Quando posso me aposentar?",
    answer: "Depende da sua situação. Após a Reforma da Previdência (2019), existem regras de transição para quem já contribuía e regras novas para quem começou depois. Fazemos uma análise completa do seu histórico contributivo para identificar a melhor opção.",
  },
  {
    question: "O que é aposentadoria por invalidez e como conseguir?",
    answer: "É um benefício para quem está incapacitado de forma total e permanente para qualquer trabalho. É necessário comprovar a incapacidade por perícia médica do INSS. Se negado, podemos recorrer na Justiça com laudo médico particular.",
  },
  {
    question: "Tenho direito ao BPC/LOAS?",
    answer: "O BPC (Benefício de Prestação Continuada) é um salário mínimo mensal para idosos acima de 65 anos ou pessoas com deficiência de qualquer idade, que comprovem renda familiar per capita de até 1/4 do salário mínimo. Não é necessário ter contribuído ao INSS.",
  },
  {
    question: "Quanto tempo demora um processo?",
    answer: "Processos trabalhistas costumam levar de 1 a 3 anos. Processos previdenciários administrativos podem ser resolvidos em meses, e judiciais de 1 a 2 anos. Mantemos você informado em cada etapa e buscamos sempre a solução mais rápida.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-cream">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <p className="text-accent font-medium mb-4">Perguntas Frequentes</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
              Tire suas dúvidas
            </h2>
            <p className="text-lg text-muted-foreground">
              Respondemos as perguntas mais comuns dos nossos clientes
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 data-[state=open]:shadow-card transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
