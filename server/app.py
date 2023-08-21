#!flask/bin/python
from flask import Flask
from dotenv import load_dotenv

load_dotenv(dotenv_path='.flaskenv')

app = Flask(__name__)

@app.route('/')
def index():    
    return "Hello, World!"

@app.route('/<name>')
def print_name(name):
    return 'Hi {}'.format(name)

if __name__ == '__main__':
    app.run()