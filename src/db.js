import mysql from 'mysql2'; 

//Creamos la conexion a la base de datos
export const conexion = mysql.createConnection({
  host: "localhost",
  database: "chimudb",
  user: "root",
  password: ""
});

//Función para ejecutar la conexión
export const connectDB = async() => {
  await conexion.connect((err) => {
    if(err) {
      throw err; 
    } else {
      console.log("Conexión exitosa");
    }
  });
}

//Funcion para finalizar la conexion
export const endConnectDB = () => {
  conexion.end(); 
}

