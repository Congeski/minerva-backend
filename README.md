# App

CivilSoft Tech

## RFs (Requisitos funcionais)

- [X] O Secretário pode criar, editar e excluir outros secretários.
- [X] O Secretário pode criar, editar e excluir um Fiscal.
- [X] O Secretário pode criar, editar e excluir um Empreendimento.
- [X] O Secretário pode criar e editar um chamado.
- [X] O Fiscal pode criar um relatório.
- [X] O Secretário não deve finalizar o chamado antes da conclusão do relatório.
- [X] O Secretário pode cancelar um chamado a qualquer momento.

## RNs (Regras de negócio)

- [X] Um chamado só pode ser finalizado após a conclusão do relatório pelo Fiscal.
- [X] O Fiscal deve verificar se o problema reportado está coberto pela garantia, conforme o manual do proprietário.
- [X] O Secretário deve realizar uma análise do relatório do Fiscal e fazer observações antes de decidir se a manutenção deve ser realizada.
- [X] O Secretário deve solicitar orçamentos de materiais e equipes de manutenção, caso a obra seja terceirizada.
- [X]  O Fiscal é responsável por manter a base de dados atualizada com chamados recebidos, relatórios, soluções para os chamados, e detalhes de chamados não aprovados.

## RNFs (Requisitos não-funcionais)

- [X] A senha do usuário precisa estar criptografada;
- [X] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [] O aplicativo deve permitir operação offline, mantendo os dados localmente caso não haja conexão com a internet.
- [] O aplicativo deve permitir o upload de fotos diretamente de dispositivos móveis.

