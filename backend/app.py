from flask import Flask, jsonify, request
from flask_cors import CORS 
# from config import db
from models import DataRoute

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

CORS(app,resources={r'*':{'origins':'http://localhost:3000'}},supports_credentials=True)
# cors에러나서 설정 해준 것. frontend 서버인 localhost 3000번 에서만 데이터 띄우라고 해준 것
#CORS는 서로 다른 출처의 리소스 접근 권한을 브라우저가 알 수 있도록 정리한 규칙. 모방 사이트를 제지하기 위해 필요한 제약 사항. 다른 출처란 domain, scheme, port를 포함한 것. 같은 도메인이라도 scheme 또는 port가 다르면 브라우저가 해당 요청을 다른 출처로 판단하고 CORS 정책을 기반으로 권한 여부를 확인. 
#파이썬 flask 프레임워크에서 flask_cors 모듈을 이용해서 CORS를 적용 url 전체에 적용할 경우 CORS(app)만 해주면 전체 url에 대해서 CORS가 적용되어 다른 도메인에서 해당 url을 호출해서 사용하는데 문제가 없음.
#CORS(app.resources={r'*':{'origins':'*'}}) 얘는 모든 곳에서 호출 허용
#CORS(app.resources={r'*':{'origins':'http://localhost:3000'}}) 얘는 http://localhost:3000에서의 호출만 허용
#CORS(app.resources={r'/_api/*':{'origins':'http://localhost:3000'}}) 얘는 /_api/의 하위 주소를 가지는 경우에만 호출이 가능. 즉 http://localhost:3000/_api/등의 주소를 호출할 때만 정상적으로 리소스 전달.
#하나가 아닌 여러개의 도메인 주소를 허용할 때는 
#CORS(app.resources={r'*':{'origins':['http://localhost:3000', http://localhost:5000']}})  배열로 여러개의 주소를 써주면 됨. 
#이렇게 설정 한 후에도 CORS 에러가 계속 발생한다면 AJAX 호출 부분에서 CORS 설정이 잘못 되었을 경우가 많음. 그 쪽도 이슈를 확인. 

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