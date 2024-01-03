
interface ContactUsEmailTemplatProps {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  web_development: boolean;
  ui_design: boolean;
  time_available: string;
  budget: string;
  description: string;
}


const projectTime: Record<string, string> = {
  "time_is_not_a_problem": 'Tempo não é problema',
  "one_two_months": 'Um a dois meses',
  "three_four_months": 'Três a quatro meses',
  "urgency": 'É urgente',
}

const projectBudget: Record<string, string> = {
  "less_than_1000": 'Menos de R$1000',
  "1k_5k": 'R$1000 - R$5 mil',
  "5k_10k": 'R$5000 - R$10 mil',
  "greater_than_10k": 'Acima de R$10 mil',
}

export const ContactUsEmailTemplate = ({
  name,
  company,
  email,
  whatsapp,
  web_development,
  ui_design,
  time_available,
  budget,
  description,
}: ContactUsEmailTemplatProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-5">
      <div className="text-center w-full rounded-lg bg-dark p-5 h-80 flex items-center justify-center">
        <h1 className="text-white text-6xl">Async</h1>
      </div>
      <p className="text-md text-dark">Uma nova mensagem vinda do formulário de contato do site da Async acabou de ser enviado.</p>
      <p className="text-md text-dark">A seguir estão os dados obtidos do formulário:</p>
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-lg font-bold text-dark">Informações Gerais e de Contato</h2>
          <ul>
            <li>Nome: {name}</li>
            <li>Empresa: {company}</li>
            <li>E-mail: {email}</li>
            <li>Whatsapp: {whatsapp}</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold text-dark">Informações sobre o projeto</h2>
          <ul>
            <li>Desenvolvimento Web: {web_development ? 'Sim' : 'Não'}</li>
            <li>UI Design:  {ui_design ? 'Sim' : 'Não'}</li>
            <li>Tempo Disponível: {projectTime[time_available]}</li>
            <li>Orçamento: {projectBudget[budget]}</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold text-dark">Descrição sobre o projeto</h2>
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}