# <div align="center"> PROYECTO UNIDAD 8 </div>

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white) ![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=Twilio&logoColor=white) ![Amazon_AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

<div align="">
  <h2> RESPONSABLES </h2>
  <div style="display: flex; gap: 20px; padding: 10px 40px; align-items: center; text-align:center">
    <p style="margin: 0; border: 1px solid transparent; border-radius: 10px; padding: 5px; background-color: #138D75; font-weight: bold">Deyvis Neyser Valdez Gavilan</p>
    <p style="margin: 0; border: 1px solid transparent; border-radius: 10px; padding: 5px; background-color: #5F6A6A; font-weight: bold">Hermel Hermez Jaramillo Pacaya</p>
    <p style="margin: 0; border: 1px solid transparent; border-radius: 10px; padding: 5px; background-color: #BA4A00; font-weight: bold">Bill Toño Gutierrez Vega</p>
    <p style="margin: 0; border: 1px solid transparent; border-radius: 10px; padding: 5px; background-color: #B7950B; font-weight: bold">Leonardo Andre Loayza Paucar</p>
    <p style="margin: 0; border: 1px solid transparent; border-radius: 10px; padding: 5px; background-color: #2874A6; font-weight: bold">Anthony Moises Condori Choccata</p>
    <p style="margin: 0; border: 1px solid transparent; border-radius: 10px; padding: 5px; background-color: #34495E; font-weight: bold">Raúl Elías Toledo Santos</p>
  </div>
</div>

<div align="center">
  <img src="https://media2.giphy.com/media/uurtMtTKqkJda4dk8Y/200w.webp?cid=ecf05e47ipyhr4vjtllb1xiqwtxh39uto775myk2rj700nth&rid=200w.webp&ct=g" title="logo" alt="logo" width="250" height="250" />&nbsp;
</div>

## <div align="center"> BACKEND </div>

# Empezando

1. Instalar paquetes

   ```bash
   npm i
   ```

2. Es necesario crear tu archivo .env:

   ```bash
   # Tomar como referencia el archivo .env.example
   ```

3. Realizar migración:

   ```bash
   npx prisma migrate dev
   ```

4. Ejecute el servidor de desarrollo:

   ```bash
   npm run dev
   # or
   npx ts-node ./src/index.ts
   ```

# Funcionalidades de la Aplicación

Cada una de las funcionalidades implementadas, seran consumidas desde el Frontend.

### Componente Boot

- **Enviar SMS**

  > Method: POST

  > http://localhost:3002/api/v1/boot/sms

  _Condiciones:_

  - Para **enviar un sms**, enviar el siguiente **json** en el body del Postman. Ej.

    ```bash
    {
        "id_user": 1,
        "id_credencial": 3
    }
    ```

  - Response

    ```bash
    {
        {
            "ok": true,
            "message": {
                "body": "Sent from your Twilio trial account - Hola deyvis tus credenciales para facebook.com es: \n username: danielanvg@gmail.com \n password: password_prueba",
                "from": "+13795672209",
                "to": "+51913964745"
            }
        }
    }
    ```

- **Enviar GMAIL**

  > Method: POST

  > http://localhost:3002/api/v1/boot/email

  _Condiciones:_

  - Para el **enviar un gmail**, enviar el siguiente **json** en el body del Postman. Ej.

    ```bash
    {
        "id_user": 1,
        "id_credencial": 5,
        "sandboxMode": false
    }
    ```

  - Response

    ```bash
    {
        "ok": true,
        "message": [
            {
                "statusCode": 202,
                "body": "",
                "headers": {
                    "server": "nginx",
                    "date": "Fri, 03 Feb 2023 21:17:14 GMT",
                    "content-length": "0",
                    "connection": "close",
                    "access-control-allow-origin": "https://sendgrid.api-docs.io",
                    "access-control-allow-methods": "POST",
                    "access-control-max-age": "600",
                    "x-no-cors-reason": "https://sendgrid.com/docs/Classroom/Basics/API/cors.html",
                    "strict-transport-security": "max-age=600; includeSubDomains"
                }
            },
            ""
        ]
    }
    ```
