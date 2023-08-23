from flask import Flask

app = Flask(__name__)

@app.route("/users", methods=['GET'])

def users():
    users = 'shadow.no.money'

    return [users]

@app.route("/bannis", methods=['GET'])

def bannis():
    ips = '127.0.1.1'

    return [ips]

if __name__ == "__main__":
    app.run(debug=True)
    print("démarrage")