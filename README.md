# Bingo-Sofka

Bingo Virtual con usuario y contraseña.

La aplicación del bingo está en contrucción, por el momento está creada la creación e inicio de usuarios con autenticación,
falta crear Api en sprintboot para las validaciones del juego como ganadores, tableros, información de fichas, etc.
También la creación de las vistas correspondientes a estos controladores.

- Los usuarios (backend) serán manejados con NodeJS + MongoDB.
- El lado delcliente está desarrollado en ReactJS.
- La lógica del negocio, está escrita en Java con Spring Boot. **
- La base de datos principal usa MySQL. **

### Ejecución.

Clonar el repositorio usando el comando: git clone https://github.com/jpabloallin/Bingo-Sofka

Instalar el node_modules en el paquete frontend utilizando el comando: npm install

Instalar el node_modules en el paquete backend utilizando el comando: npm install

Recuerda que debes correr primero la aplicación `[backend]` con el comando npm start y luego correr el proyecto de react `[frontend]` con el comando npm start para que pueda llamar a la API.

Ya puedes crear un usuario e iniciar sesión!

### Paquetes

El documeto `CRUD-Sofka` tiene los siguientes archivos:

- `[backend]` - Contiene la parte del servidor como las rutas, conexión a base de datos, modelos, etc.
- `[frontend]` - Contiene la parte del cliente, formulario para registrarse, iniciar sesión, dashboard...

### Base de datos

La app maneja una la base de datos de users la cual es `MongoDB`.

@Author Juan Pablo Allin Cañas - jpac.647@gmail.com
@Version 0.0.0

"dependencies": {
   "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.4",
    "@testing-library/user-event": "^13.5.0",
    "bootstrap": "5.1",
    "react": "^17.0.2",
    "react-bootstrap": "^2.2.1",
    "react-cookie": "^4.1.1",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "5.0.0",
    "reactstrap": "^8.10.0",
    "web-vitals": "^2.1.4"
  }
