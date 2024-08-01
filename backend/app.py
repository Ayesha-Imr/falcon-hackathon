from flask import Flask, request, jsonify,session
from flask_cors import CORS
import pyrebase
from dotenv import load_dotenv
import os
app = Flask(__name__)
CORS(app)
config  = {
  #add here

  }

firebase=pyrebase.initialize_app(config)
auth=firebase.auth()

app.secret_key='secretkey'
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400
    
    try:
        user = auth.sign_in_with_email_and_password(email, password)
        session['user'] = email
        print(session)
        return jsonify({'message': 'User Logged In', 'userId': user['localId']}), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'Failed to login'}), 401

@app.route('/login', methods=['POST'])
def logout():
    session.pop('user')
    return jsonify({'message': 'User logged out'}), 200

@app.route('/greet', methods=['POST'])
def greet():
    data = request.get_json()
    name = data.get('name')
    greeting = f"Welcome, {name}!"
    return jsonify({'greeting': greeting})


# uncomment the lines below if running locally
if __name__ == '__main__':  
    app.run(debug=True) 
