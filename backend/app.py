from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()


app = Flask(__name__)
CORS(app)

@app.route('/greet', methods=['POST'])
def greet():
    data = request.get_json()
    name = data.get('name')
    greeting = f"Welcome, {name}!"
    return jsonify({'greeting': greeting})