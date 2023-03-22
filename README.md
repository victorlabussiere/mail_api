# Node.js Nodemailer Email Sender
Este é um projeto de exemplo para enviar emails com Node.js usando o pacote Nodemailer.
<br/>

## Instalação
<br/>
Clone este repositório para sua máquina local usando o seguinte comando:
~~~
git clone https://github.com/victorlabussiere/mail_api.git
~~~
<br/>
Na pasta raiz do projeto, instale as dependências do Node.js com o seguinte comando:

~~~
npm install
~~~
<br/>
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

~~~
SERVER_MAIL= O e-mail responsável pelo envio das mensagens
PASS= Senha do e-mail responsável pelos envios

SMTP_HOST= O smtp do provedor de e-mail do servidor.
SMTP_PORT= A porta smtp que o provedor de e-mail utiliza

ADM_MAIL= O e-mail do adm
~~~
>Este sistema realiza o envio de dois e-mails com o e-mail do servidor como remetente.

>O primeiro envio será para o client, e o segundo para o admin, com o corpo da mensagem enviado pelo client.

>Nota: Certifique-se de substituir seu-email@gmail.com e sua-senha-de-email pelas suas informações de login do Gmail.

<br/>
Em seguida, execute o seguinte comando para iniciar o servidor:

~~~bash
npm start
~~~

## Como usar

Você pode testar o envio de e-mails através do Postman ou outro software parecido, seguindo as instruções abaixo:

* Abra o Postman e crie uma nova requisição do tipo POST.
* Digite a URL http://localhost:3000/mail no campo de URL da requisição.
* Na seção de "Body", selecione o tipo json.

* Adicione as seguintes chaves e valores no corpo da requisição:
~~~
"email": "endereço de email do destinatário."
"name": "nome do destinatário.'
"text": "corpo do email."
~~~

* Clique no botão "Send" para enviar a requisição.

O servidor Node.js irá autenticar com as credenciais fornecidas no arquivo .env e enviar o email usando o pacote Nodemailer.