import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
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
    question: "Quais documentos preciso levar na consulta?",
    answer: "Para a primeira consulta, traga seus documentos pessoais (RG, CPF), carteira de trabalho (se for caso trabalhista), documentos do INSS (se for caso previdenciário) e qualquer documento relacionado ao seu caso.",
  },
  {
    question: "Como são cobrados os honorários?",
    answer: "Os honorários variam conforme o tipo de caso. Em muitos casos trabalhistas e previdenciários, trabalhamos com êxito, ou seja, você só paga se ganhar a causa. Explicamos todas as opções na consulta.",
  },
  {
    question: "Quanto tempo demora um processo?",
    answer: "O tempo varia conforme o tipo de processo e a complexidade do caso. Processos trabalhistas costumam levar de 1 a 3 anos, enquanto processos previdenciários administrativos podem ser resolvidos em meses. Mantemos você informado em cada etapa.",
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
