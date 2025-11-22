☁️ Proyecto Final: Sistema CRUD Distribuido en Azure

Este repositorio contiene el código fuente y la documentación de una arquitectura Serverless desplegada en Microsoft Azure. El sistema permite registrar usuarios mediante un formulario web, procesar la información con una función en la nube y almacenarla en una base de datos SQL.

🚀 Arquitectura del Sistema

El proyecto implementa una arquitectura de 3 capas distribuida geográficamente para demostrar alta disponibilidad y manejo de regiones en la nube:

Frontend (Capa de Presentación):

Tecnología: HTML5, CSS (Bootstrap), JavaScript (Fetch API).

Hospedaje: Azure App Service (Web App) en Windows.

Región: North Central US.

Función: Interfaz de usuario para capturar datos.

Backend (Capa Lógica):

Tecnología: Azure Functions (Node.js v20 LTS).

Modelo: HTTP Trigger (Serverless).

Hospedaje: App Service Plan (B1).

Región: East US 2 (Virginia).

Función: API que recibe el JSON, valida datos y conecta con SQL.

Base de Datos (Capa de Datos):

Tecnología: Azure SQL Database.

Nivel: Basic (DTU-based).

Región: West US 2.

Función: Persistencia segura de la información.

🛠️ Tecnologías Utilizadas

Lenguajes: JavaScript (Node.js), SQL, HTML/CSS.

Nube: Microsoft Azure.

Herramientas: Visual Studio Code, Azure CLI, Git.

Librerías: mssql (Driver nativo para SQL Server).

📋 Funcionalidades (CRUD)

El sistema cumple con los requisitos del proyecto final:

Create (Crear): Formulario web público que envía datos a la nube.

Read (Leer): Verificación de datos mediante consultas SQL en el portal de Azure.

Update (Actualizar): Gestión de datos desde el backend (SQL).

Delete (Borrar): Eliminación de registros desde el backend (SQL).

🌐 Enlaces del Proyecto

Frontend (Sitio Web Público):
https://web-jesus-frontend-final.azurewebsites.net
(Nota: El enlace puede dejar de estar disponible si se eliminan los recursos de Azure).

💻 Cómo ejecutar este proyecto localmente

Si deseas probar el código en tu propia máquina, sigue estos pasos:

Prerrequisitos

Node.js (v18 o superior).

Azure Functions Core Tools.

Visual Studio Code con extensión de Azure.

1. Clonar el repositorio

git clone [https://github.com/JesusLira2002/Proyecto_Final_Azure_Cloud.git](https://github.com/JesusLira2002/Proyecto_Final_Azure_Cloud.git)
cd Proyecto_Final_Azure_Cloud


2. Configurar el Backend

Entra a la carpeta del servidor:

cd backend
npm install


Crea un archivo local.settings.json en la carpeta backend (este archivo no se sube a GitHub por seguridad) con el siguiente contenido:

{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node"
  },
  "Host": {
    "CORS": "*"
  }
}


Nota: Necesitarás tu propia cadena de conexión a SQL Server y colocarla en el archivo src/functions/CrearUsuario.js.

3. Ejecutar

Inicia el backend:

npm start


Abre el archivo frontend/index.html en tu navegador.

Asegúrate de cambiar la URL en el index.html para que apunte a http://localhost:7071/....

🔒 Seguridad Implementada

CORS (Cross-Origin Resource Sharing): Configurado estrictamente en la Azure Function para permitir peticiones solo desde el Frontend autorizado (o * en modo desarrollo), deshabilitando credenciales inseguras.

Variables de Entorno: La cadena de conexión a la base de datos se gestiona de forma segura.

Autor: Jesus Eduardo Lira Prieto
       Salvador Fragoso Velázquez
       Alondra Monserrat Rico Guerrero
       Javier Osvaldo Tavarez Muñiz
       Jose Manuel Miramontes Espinoza

Fecha: Noviembre 2025