import { conexion, connectDB, endConnectDB } from "../db.js"

//Funciones para la autenticacion de un usuario
export const saveUser = (username, email, phone, address, password, callback) => {
  const sql = 'insert into usuario(nombre_usuario, correo_usuario, telefono_usuario, direccion_usuario, password) values (?,?,?,?,?)';

  //Si la conexión es exitosa
  if(connectDB()){
    //Ejecutamos la consulta con los datos 
    conexion.query(sql, [username, email, phone, address, password], (err, results) => {
      //Mostramos cualquier error
      if (err) {
        endConnectDB();
        callback(err, null); 
      } else {
        //Guardamos el id del registro insertado 
        let id_user = results.insertId;
        endConnectDB();
        callback(null, id_user);
      } 
    });
  } else {
    callback("Algo salio mal", null); 
  }
}

export const findUser = (email, password, callback) => {
  const sql = "select id_usuario, nombre_usuario, correo_usuario, password from usuario where correo_usuario = ?"; 

  //Realizamos la conexion a la base de datos
  if(connectDB){
    //Ejecutamos la consulta a la base de datos 
    conexion.query(sql, [email, password], (err, results) => {
      //Si hay algun error
      if(err) {
        endConnectDB();
        callback(err, null); 
      } else {
        const userFound = {
          id: results[0].id_usuario,
          username: results[0].nombre_usuario,
          email: results[0].correo_usuario,
          password: results[0].password
        } 

        endConnectDB();
        callback(null, userFound); 
      }
    });
  } else {
    callback("Algo salio mal", null); 
  }
}