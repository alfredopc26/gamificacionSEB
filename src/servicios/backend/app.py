from flask import Flask, request
import json

app = Flask(__name__)


@app.route('/')
def index():
    return json.dumps({'result': "WebService OK"})

@app.route('/insertData', methods=['POST'])
def insertUser():
    import classDb 

    data = {
        'id': request.form.get('id'),
        'nombre': request.form.get('nombre'),
        'email': request.form.get('email'),
        'rol': request.form.get('rol'),
        'rol': 'En espera'
    }


    return json.dumps(user_insert(data))


if __name__ == "__main__":
    app.run(debug=True)