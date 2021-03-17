import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="CAperez26",
  database="seb_gamify"
)
conn = mydb.cursor()

def exe_query(stm):

    conn.execute(stm)
    myresult = conn.fetchall()

    return myresult


def user_data(user):

    stm = "SELECT A.id, A.nombre, A.apellido, A.cedula, B.nombre_carg, C.nombre, A.correo, A.image FROM ibes.usuario A inner join ibes.cargo B ON B.id_cargo = A.cargo inner join ibes.departamento C ON C.id_dpto = A.departamento where A.id = '"+ user +"' "
    e = exe_query(stm)
    exe = e[0]

    return {
        'id' : exe[0],
        'nombre' : exe[1],
        'apellido' : exe[2],
        'cedula' : exe[3],
        'cargo' : exe[4],
        'departamento' : exe[5],
        'correo' : exe[6],
        'image' : exe[7]
    }

def user_insert(data):

    sql = "INSERT INTO usuario (id, nombre, email, rol, estado ) VALUES (%s, %s)"
    val = (data.id, data.nombre, data.email, data.rol, data.estado)
    mycursor.execute(sql, val)

    mydb.commit()

    print(mycursor.rowcount, "record inserted.")