const { app } = require('@azure/functions');
const sql = require('mssql');

//CONFIGURACIÓN
const connectionString = "Server=tcp:server-jesus-crud-01.database.windows.net,1433;Initial Catalog=BaseDatosUsuarios;Persist Security Info=False;User ID=adminjesus;Password=jesus123_;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

app.http('CrearUsuario', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('Procesando petición con SQL...');

        try {
            const data = await request.json();
            const { nombre, email } = data;

            if (!nombre || !email) {
                return { status: 400, body: "Faltan datos." };
            }

            // CONECTAR Y GUARDAR
            let pool = await sql.connect(connectionString);
            
            await pool.request()
                .input('p_nombre', sql.VarChar, nombre)
                .input('p_email', sql.VarChar, email)
                .query('INSERT INTO Usuarios (Nombre, Email) VALUES (@p_nombre, @p_email)');

            // Funciono la conexión a Azure SQL y se guardó el usuario
            return { 
                status: 200, 
                body: `El usuario ${nombre} se guardó en Azure.` 
            };

        } catch (error) {
            context.log.error(error);
            return { status: 500, body: "Error SQL: " + error.message };
        }
    }
});