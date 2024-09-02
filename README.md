# App

CivilSoft Tech

## RFs (Requisitos funcionais)

- [] O Secretário pode criar, editar e excluir outros secretários.
- [] O Secretário pode criar, editar e excluir um Fiscal.
- [] O Secretário pode criar, editar e excluir um Empreendimento.
- [] O Secretário pode criar e editar um chamado.
- [] O Fiscal pode criar um relatório.
- [] O Secretário não deve finalizar o chamado antes da conclusão do relatório.
- [] O Secretário pode cancelar um chamado a qualquer momento.

## RNs (Regras de negócio)

- [] Um chamado só pode ser finalizado após a conclusão do relatório pelo Fiscal.
- [] O Fiscal deve verificar se o problema reportado está coberto pela garantia, conforme o manual do proprietário.
- [] O Secretário deve realizar uma análise do relatório do Fiscal e fazer observações antes de decidir se a manutenção deve ser realizada.
- [] O Secretário deve solicitar orçamentos de materiais e equipes de manutenção, caso a obra seja terceirizada.
- []  O Fiscal é responsável por manter a base de dados atualizada com chamados recebidos, relatórios, soluções para os chamados, e detalhes de chamados não aprovados.

## RNFs (Requisitos não-funcionais)

- [] A senha do usuário precisa estar criptografada;
- [] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [] O aplicativo deve permitir operação offline, mantendo os dados localmente caso não haja conexão com a internet.
- [] O aplicativo deve permitir o upload de fotos diretamente de dispositivos móveis.

