from flask import Flask, jsonify, request
from flask_cors import CORS 
# from config import db
from models import DataRoute

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

CORS(app,resources={r'*':{'origins':'http://localhost:3000'}},supports_credentials=True)
# cors에러나서 설정 해준 것. frontend 서버인 localhost 3000번 에서만 데이터 띄우라고 해준 것

@app.route('/<market>', methods=['GET'])
def allSearch(market):
    data = DataRoute.markets(market)
    return jsonify(data)

@app.route('/getnames', methods = ['POST'])
def getname():
    data = DataRoute.getname()
    print(data)
    return jsonify(data)

@app.route('/daydata/<name>', methods = ['GET'])
def getday(name):
    data = DataRoute.getDay(name)
    print(data)
    return jsonify(data)

@app.route('/getsearch/<name>',methods=['GET'])
def getSearch(name):
    data= DataRoute.getSearch(name)
    return jsonify(data)

@app.route('/getsearchinput/<name>',methods=['GET'])
def getSearchInput(name):
    data = DataRoute.getSearchInput(name)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)