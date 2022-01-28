### IDEIAS PARA API ###

- Gerenciamento de Coplayers

- Dado uma conta(usuario)
    - Cadastro/Login (JSON WEBTOKEN)
    - Associar novos coplayers
    - Remover antigos coplayers
    - Listar coplayers ativos
- Ao logar
    - Enviar notificacao (email) para os outros coplayers
    - Verificar se não ha outro jogador logado - Não pode dois ao mesmo  tempo
- Ao deslogar 
    - Enviar notificacao (email) para os outros coplayers

### GIT ###
    - 1 Branch por feature
    - 1 commit por branch (Vamos usar o conceito de Trunked Base)
    - Merge através de Pull Requests
    - Criar fluxo de CI para rodar os testes

### Regras de código ### 
    - Seguir os conceitos de SOLID (principalmente inversao de dependencias)
    - Clean Code
    - DDD
    - TDD

### METAS ###
    - +80% cobertura de testes
    - Mensagens de erros e httpCode corretos

### TASKS FUTURAS ###
    - Kanban para gerenciamento de tarefas entre coplayers 
        - Associar uma tarefa a um coplayer