Sistema CRUD Distribuido en Azure
Cómo funciona
Este sistema implementa una arquitectura Serverless distribuida en tres capas para registrar y gestionar usuarios. El flujo comienza en una interfaz web que captura los datos y los envía mediante peticiones HTTP. Una API serverless recibe la información, valida el formato JSON y ejecuta las operaciones CRUD (crear, leer, actualizar, borrar) directamente sobre una base de datos relacional. Para demostrar alta disponibilidad y manejo de regiones en la nube, cada componente opera de forma aislada geográficamente: el cliente en North Central US, la lógica de negocio en East US 2 y la persistencia de datos en West US 2.

Tecnologías
Frontend: HTML5, CSS (Bootstrap), JavaScript (Vanilla/Fetch API).

Backend: Node.js (v20 LTS), Azure Functions (HTTP Trigger), librería mssql.

Base de Datos: Azure SQL Database (Nivel Básico DTU).



Autor: Jesús Eduardo Lira Prieto | Noviembre 2025
