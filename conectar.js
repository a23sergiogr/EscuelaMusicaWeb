const sqlite3 = require('sqlite3').verbose();

// Abrir la base de datos (si no existe, se creará)
const dbPath = 'C:/Users/a23xacobobc/Desktop/EscuelaMusica';
console.log('Intentando conectar con la base de datos en:', dbPath);

let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error('Error de conexión:', err.message);
  } else {
    console.log('Conexión exitosa a SQLite');
  }
});
// Realizar una consulta
db.all('SELECT * FROM Persona p LEFT JOIN Telefono t ON p.id_persona  = t.id_persona ;', [], (err, rows) => {
  if (err) {
    throw err;
  }
  console.log(rows); // Mostrar los resultados
});

// Cerrar la conexión
db.close((err) => {
  if (err) {
    console.error('Error al cerrar la base de datos:', err.message);
  } else {
    console.log('Conexión cerrada');
  }
});
