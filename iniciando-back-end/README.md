# Recuperação de senha

  **RequisitosFuncionais**

  - Usuário deve poder recuperar sua senha informando seu e-mail;
  - Usuário deve receber um e-mail com instruções de recuperação de senha;
  - Usuário deve poder resetar sua senha;

  **RequisitosNãoFuncionais**

  - Utilizar Mailtrap para testar em mbiente de dev;
  - Utilizar o Amazon SES para envios em produção;
  - O envio de emails deve acontecer em segundo plano (background job);

  **RegrasdeNegócio**

  - O link enviado por email para resetar a senha deve expirar em 2h;
  - O usuário precisa confirmar a nova senha ao resetar a senha;

# Atualização do Perfil

**RF**
- O Usuário deve poder alterar seu nome, email e senha;

**RN**

- Usuário não pode alterar seu email para um email ja utilizado;
- para atualizar sua senha, o usuário deve informar sua senha antiga;
- para atualizar sua senha, o usuário precisa confirmar a nova senha;

# painel do prestador

**RF**

-o USUÁRIO DEVE PODER LISTAR SEUS AGENDAMENTOS DE UM DIA ESPECÍFICO;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**
- Os agendamentos do prestador no dia, devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real via Socket.io;

**RN**

- A Notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de Serviços

**RF**
- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usupario deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar o agendamento;


**RNF**

- A listagem de prestadores deve ser armazenada em cache;


**RN**
- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h(primeiro às 8h, último as 17h);
- O usuário não pode agendar em um horário ja ocupado;
- O usuário não pode agendar um horário que ja passou;
- O usuário não pode agendar um horário consigo mesmo;

