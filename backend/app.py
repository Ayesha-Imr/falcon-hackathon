from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/greet', methods=['POST'])
def greet():
    data = request.get_json()
    name = data.get('name')
    greeting = f"Welcome, {name}!"
    return jsonify({'greeting': greeting})


# if __name__ == '__main__':
#     app.run(debug=True, host='127.0.0.1', port=5000)