const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 8800;

app.use(express.json());
// Ruta de la base de datos SQLite
const dbPath = 'BBDD/EscuelaMusicaDos.db'; // Cambia la ruta de acuerdo a tu sistema
console.log('Intentando conectar con la base de datos en:', dbPath);

// Conexión a la base de datos SQLite
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error('Error de conexión:', err.message);
  } else {
    console.log('Conexión exitosa a SQLite');
  }
});

// Servir archivos estáticos (HTML, JS, CSS) desde la carpeta 'public'
app.use(express.static('public'));
//if(document.getElementById('selectTabla').nodeValue == 'Persona'){
app.get('/datosPersona', (req, res) => {
  db.all(
    'SELECT p.* FROM Persona p;'
    , [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.json({ datos: rows }); // Enviar los resultados como JSON

    });
});
app.get('/datosEstudiante', (req, res) => {
  db.all(
    'SELECT p.* FROM Estudiante p;'
    , [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.json({ datos: rows }); // Enviar los resultados como JSON

    });
});

app.get('/datosProfesor', (req, res) => {
  db.all('SELECT * from Profesor;', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ datos: rows }); // Enviar los resultados como JSON
  });
});

app.get('/evalua', (req, res) => {
  db.all('SELECT e.* from Evalua e', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ datos: rows }); // Enviar los resultados como JSON
  });
});

app.get('/asiste', (req, res) => {
  db.all('SELECT * FROM Asiste', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ datos: rows }); // Enviar los resultados como JSON
  });
});

app.get('/clase', (req, res) => {
  db.all('SELECT c.* FROM Clase c; ', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ datos: rows }); // Enviar los resultados como JSON
  });
});

app.get('/telefono', (req, res) => {
  db.all('SELECT c.* FROM Telefono c; ', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ datos: rows }); // Enviar los resultados como JSON
  });
});

app.get('/imparte', (req, res) => {
  db.all('SELECT c.* FROM Imparte c; ', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ datos: rows }); // Enviar los resultados como JSON
  });
});





app.post('/insertPersona', (req, res) => {
  // Obtenemos los datos de la solicitud (del cuerpo de la solicitud)
  const { nombre, DNI, apellidoUno, apellidoDos } = req.body;

  // Realizamos el INSERT en la tabla Persona
  const sql = "INSERT INTO Persona (nombre, DNI, apellidoUno, apellidoDos) VALUES (?, ?, ?, ?)";

  db.run(sql, [nombre, DNI, apellidoUno, apellidoDos], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      // Responder con el ID de la persona insertada
      res.status(200).json({
        message: 'Persona insertada correctamente',
        id_persona: this.lastID, // Devuelve el id autoincremental de la persona insertada
      });
    }
  });
});

app.post('/insertEstudiante', (req, res) => {
  // Obtenemos los datos de la solicitud (del cuerpo de la solicitud)
  const { id_persona, fecha_nac, direccion } = req.body;

  // Realizamos el INSERT en la tabla Persona
  const sql = "INSERT INTO Estudiante (id_persona, fecha_nac, direccion) VALUES (?, ?, ?)";

  db.run(sql, [id_persona, fecha_nac, direccion], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      // Responder con el ID de la persona insertada
      res.status(200).json({
        message: 'Estudiante insertada correctamente',
        id_persona: this.lastID, // Devuelve el id autoincremental de la persona insertada
      });
    }
  });
});

app.post('/insertProfesor', (req, res) => {
  // Obtenemos los datos de la solicitud (del cuerpo de la solicitud)
  const { id_persona, especialidad, anhos_experiencia } = req.body;

  // Realizamos el INSERT en la tabla Persona
  const sql = "INSERT INTO Profesor (id_persona, especialidad, anhos_experiencia) VALUES (?, ?, ?)";

  db.run(sql, [id_persona, especialidad, anhos_experiencia], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      // Responder con el ID de la persona insertada
      res.status(200).json({
        message: 'Estudiante insertada correctamente',
        id_persona: this.lastID, // Devuelve el id autoincremental de la persona insertada
      });
    }
  });
});

app.post('/insertAsiste', (req, res) => {
  // Obtenemos los datos de la solicitud (del cuerpo de la solicitud)
  const { id_estudiante, cod_clase } = req.body;

  // Realizamos el INSERT en la tabla Persona
  const sql = "INSERT INTO Asiste (id_persona, cod_clase) VALUES (?, ?)";

  db.run(sql, [id_estudiante, cod_clase], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      // Responder con el ID de la persona insertada
      res.status(200).json({
        message: 'Estudiante insertada correctamente',
        id_persona: this.lastID, // Devuelve el id autoincremental de la persona insertada
      });
    }
  });
});

app.post('/insertTelefono', (req, res) => {
  // Obtenemos los datos de la solicitud (del cuerpo de la solicitud)
  const { id_persona, telefono } = req.body;

  // Realizamos el INSERT en la tabla Persona
  const sql = "INSERT INTO Telefono (id_persona, telefono) VALUES (?, ?)";

  db.run(sql, [id_persona, telefono], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      // Responder con el ID de la persona insertada
      res.status(200).json({
        message: 'Telefono insertada correctamente',
        id_persona: this.lastID, // Devuelve el id autoincremental de la persona insertada
      });
    }
  });
});

app.post('/insertImparte', (req, res) => {
  // Obtenemos los datos de la solicitud (del cuerpo de la solicitud)
  const { id_estudiante, cod_clase } = req.body;

  // Realizamos el INSERT en la tabla Persona
  const sql = "INSERT INTO Imparte (id_persona, cod_clase) VALUES (?, ?)";

  db.run(sql, [id_estudiante, cod_clase], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      // Responder con el ID de la persona insertada
      res.status(200).json({
        message: 'Profesor insertada correctamente',
        id_persona: this.lastID, // Devuelve el id autoincremental de la persona insertada
      });
    }
  });
});
//}
// Endpoint para obtener los datos de la tabla 'Persona'

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
