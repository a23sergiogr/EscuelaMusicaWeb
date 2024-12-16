const sqlite3 = require('sqlite3').verbose();

// Función para insertar una persona
function insertarPersona(nombre, DNI, apellidoUno, apellidoDos) {
  const dbPath = 'C:/Users/a23xacobobc/Desktop/EscuelaMusica';
  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error('Error de conexión:', err.message);
      return;
    }
    console.log('Conexión exitosa a SQLite');
  });

  const query = `
    INSERT INTO Persona (nombre, DNI, apellidoUno, apellidoDos)
    VALUES (?, ?, ?, ?)
  `;

  db.run(query, [nombre, DNI, apellidoUno, apellidoDos], function(err) {
    if (err) {
      console.error('Error al insertar los datos en Persona:', err.message);
    } else {
      console.log('Datos insertados correctamente en Persona');
    }
  });

  db.close((err) => {
    if (err) {
      console.error('Error al cerrar la base de datos:', err.message);
    } else {
      console.log('Conexión cerrada');
    }
  });
}

// Función para insertar un teléfono
function insertarTelefono(id_persona, telefono) {
  const dbPath = 'C:/Users/a23xacobobc/Desktop/EscuelaMusica';
  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error('Error de conexión:', err.message);
      return;
    }
    console.log('Conexión exitosa a SQLite');
  });

  const query = `
    INSERT INTO Telefono (id_persona, telefono)
    VALUES (?, ?)
  `;

  db.run(query, [id_persona, telefono], function(err) {
    if (err) {
      console.error('Error al insertar los datos en Telefono:', err.message);
    } else {
      console.log('Datos insertados correctamente en Telefono');
    }
  });

  db.close((err) => {
    if (err) {
      console.error('Error al cerrar la base de datos:', err.message);
    } else {
      console.log('Conexión cerrada');
    }
  });
}

// Función para insertar un estudiante
function insertarEstudiante(id_persona, fecha_nac, direccion, num_matricula) {
  const dbPath = 'C:/Users/a23xacobobc/Desktop/EscuelaMusica';
  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error('Error de conexión:', err.message);
      return;
    }
    console.log('Conexión exitosa a SQLite');
  });

  const query = `
    INSERT INTO Estudiante (id_persona, fecha_nac, direccion, num_matricula)
    VALUES (?, ?, ?, ?)
  `;

  db.run(query, [id_persona, fecha_nac, direccion, num_matricula], function(err) {
    if (err) {
      console.error('Error al insertar los datos en Estudiante:', err.message);
    } else {
      console.log('Datos insertados correctamente en Estudiante');
    }
  });

  db.close((err) => {
    if (err) {
      console.error('Error al cerrar la base de datos:', err.message);
    } else {
      console.log('Conexión cerrada');
    }
  });
}

// Función para insertar un profesor
function insertarProfesor(id_persona, especialidad, anhos_experiencia) {
  const dbPath = 'C:/Users/a23xacobobc/Desktop/EscuelaMusica';
  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error('Error de conexión:', err.message);
      return;
    }
    console.log('Conexión exitosa a SQLite');
  });

  const query = `
    INSERT INTO Profesor (id_persona, especialidad, anhos_experiencia)
    VALUES (?, ?, ?)
  `;

  db.run(query, [id_persona, especialidad, anhos_experiencia], function(err) {
    if (err) {
      console.error('Error al insertar los datos en Profesor:', err.message);
    } else {
      console.log('Datos insertados correctamente en Profesor');
    }
  });

  db.close((err) => {
    if (err) {
      console.error('Error al cerrar la base de datos:', err.message);
    } else {
      console.log('Conexión cerrada');
    }
  });
}

// Función para insertar una clase
function insertarClase(fecha_clase, hora_clase, instrumento) {
  const dbPath = 'C:/Users/a23xacobobc/Desktop/EscuelaMusica';
  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error('Error de conexión:', err.message);
      return;
    }
    console.log('Conexión exitosa a SQLite');
  });

  const query = `
    INSERT INTO Clase (fecha_clase, hora_clase, instrumento)
    VALUES (?, ?, ?)
  `;

  db.run(query, [fecha_clase, hora_clase, instrumento], function(err) {
    if (err) {
      console.error('Error al insertar los datos en Clase:', err.message);
    } else {
      console.log('Datos insertados correctamente en Clase');
    }
  });

  db.close((err) => {
    if (err) {
      console.error('Error al cerrar la base de datos:', err.message);
    } else {
      console.log('Conexión cerrada');
    }
  });
}

// Función para insertar asistencia
function insertarAsiste(id_persona, cod_clase) {
  const dbPath = 'C:/Users/a23xacobobc/Desktop/EscuelaMusica';
  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error('Error de conexión:', err.message);
      return;
    }
    console.log('Conexión exitosa a SQLite');
  });

  const query = `
    INSERT INTO Asiste (id_persona, cod_clase)
    VALUES (?, ?)
  `;

  db.run(query, [id_persona, cod_clase], function(err) {
    if (err) {
      console.error('Error al insertar los datos en Asiste:', err.message);
    } else {
      console.log('Datos insertados correctamente en Asiste');
    }
  });

  db.close((err) => {
    if (err) {
      console.error('Error al cerrar la base de datos:', err.message);
    } else {
      console.log('Conexión cerrada');
    }
  });
}

// Función para insertar una clase que un profesor imparte
function insertarImparte(id_persona, cod_clase) {
  const dbPath = 'C:/Users/a23xacobobc/Desktop/EscuelaMusica';
  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error('Error de conexión:', err.message);
      return;
    }
    console.log('Conexión exitosa a SQLite');
  });

  const query = `
    INSERT INTO Imparte (id_persona, cod_clase)
    VALUES (?, ?)
  `;

  db.run(query, [id_persona, cod_clase], function(err) {
    if (err) {
      console.error('Error al insertar los datos en Imparte:', err.message);
    } else {
      console.log('Datos insertados correctamente en Imparte');
    }
  });

  db.close((err) => {
    if (err) {
      console.error('Error al cerrar la base de datos:', err.message);
    } else {
      console.log('Conexión cerrada');
    }
  });
}

// Función para insertar evaluaciones
function insertarEvalua(id_profesor, id_estudiante, tipo, nota, fecha_evaluacion) {
  const dbPath = 'C:/Users/a23xacobobc/Desktop/EscuelaMusica';
  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error('Error de conexión:', err.message);
      return;
    }
    console.log('Conexión exitosa a SQLite');
  });

  const query = `
    INSERT INTO Evalua (id_profesor, id_estudiante, tipo, nota, fecha_evaluacion)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(query, [id_profesor, id_estudiante, tipo, nota, fecha_evaluacion], function(err) {
    if (err) {
      console.error('Error al insertar los datos en Evalua:', err.message);
    } else {
      console.log('Datos insertados correctamente en Evalua');
    }
  });

  db.close((err) => {
    if (err) {
      console.error('Error al cerrar la base de datos:', err.message);
    } else {
      console.log('Conexión cerrada');
    }
  });
}

