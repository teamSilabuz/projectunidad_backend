# <div align="center"> PROYECTO UNIDAD 8 </div>

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white) ![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=Twilio&logoColor=white) ![Amazon_AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

### <strong> RESPONSABLES </strong>

<div>
  <div align="center">
    <img src="https://img001.prntscr.com/file/img001/M9hT73eQRo-wx03h2K3sEA.png" title="logo" alt="logo" width="900" height="55" />
  </div>
</div>

<div align="center">
  <img src="https://media2.giphy.com/media/uurtMtTKqkJda4dk8Y/200w.webp?cid=ecf05e47ipyhr4vjtllb1xiqwtxh39uto775myk2rj700nth&rid=200w.webp&ct=g" title="logo" alt="logo" width="250" height="250" />&nbsp;
</div>

### <div align="center">BACKEND</div>

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



### Componente credencial

- **Recibe la data de frontend**

  > Method: POST

  > http://localhost:3003/api/v1/credencial/externo

  _Condiciones:_

  - Se registra datos del sitio externo que envia el frontend  format/  **text** en el body del Postman. Ej.

    ```bash
    {
        "url": "http://facebook.com",
        "name": "facebook.com",
        "username_ext": "prueba@gmail.com",
        "password_ext": "1234",
        "id_gestor" : "1"
    }
    ```

  - Response  format/json

    ```bash
    {
      "ok": true,
      "data": [
        {
          "id": 1,
          "url": "http://facebook.com",
          "name": "facebook.com",
          "username_ext": "prueba@gmail.com",
          "password_ext": "4dc3b6268468e95e9e56b3c7e95250cb.55543d8952c0cb606024d43eb7419c8f",
          "createdAt": "2023-02-02T10:19:28.200Z",
          "updated_at": "2023-02-02T10:19:28.200Z"
        }
      ]
    } 
    ```

### Componente user

- **Para registrar un usuario**

  > Method: POST

  > http://localhost:3003/api/v1/user/registro

  _Condiciones:_

  - Para el **registro de un usuario**, enviar el siguiente **json** en el body del Postman. Ej.

    ```bash
    {
      "name":"valentina",
      "email":"valeangeles@bill.com",
      "password":"123",
      "re_password":"123",
      "phone_number":"+51990782288"
    }
    ```

  - Response

    ```bash
    {
        "ok": true,
        "message": "Usuario registrado correctamente"
    }
    ```

- **Para el login del usuario**

  > Method: POST

  > http://localhost:3003/api/v1/user/login

  _Condiciones:_

  - Para el **login de un usuario**, enviar el siguiente **json** en el body del Postman. Ej.

    ```bash
    {
        "email":"valeangeles@bill.com",
        "password":"123"
    }
    ```

  - Response 

    ```bash
    {
        "ok": true,
        "message": "Usuario logueado correctamente",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6InZhbGVudGluYSIsImVtYWlsIjoidmFsZWFuZ2VsZXNAYmlsbC5jb20iLCJpYXQiOjE2NzU1NDMxMjYsImV4cCI6MTY3NTYyOTUyNn0.ibzYBuIUvW_s31VCVP4o66vC8eqvo0Q1efEqWxidXq0"
    }
    ```
- **Para actualizar datos de un usuario**

  > Method: PUT

  > http://localhost:3003/api/v1/user/updateuser

  _Condiciones:_

  - Para el **update de un usuario**, enviar el siguiente **json** en el body del Postman. Ej.

    ```bash
    {
        "name": "valentina", 
        "email":"vale2@bill.com", 
        "phone_number":"+51990782288"
    }
    ```

  - Response

    ```bash
    {
        "ok": true,
        "message": "Usuario actualizado correctamente",
        "updatedUser": {
            "name": "valentina",
            "email": "vale2@bill.com",
            "phone_number": "+51990782288"
        }
    }
    ```

- **Para actualizar el password de credenciales externas**

  > Method: PUT

  > http://localhost:3003/api/v1/user/updatepassexterno

  _Condiciones:_

  - Para el **update del password de credenciales externas**, enviar el siguiente **json** en el body del Postman. Ej.

    ```bash
    {
        "id_credencial": 1, 
        "passsword":"abc", 
        "re_password":"abc"
    }
    ```

  - Response 

    ```bash
    {
        "ok": true,
        "message": "Usuario actualizado correctamente"
    }
    ```