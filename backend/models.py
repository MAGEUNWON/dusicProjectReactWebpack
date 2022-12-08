from flask import Flask, jsonify, request, json 
from config import cursor
from config import db 



class DataRoute():
    
    def markets(market):
        cursor.execute(f"SELECT market, code, name FROM companylist WHERE market = '{market}' ORDER BY RAND() LIMIT 28")
        res = cursor.fetchall()
        
        data_stack = list()
        for i in range(len(res)):
            market = res[i]["market"]
            code = res[i]["code"]
            
            # sql = (f"SELECT companylist.code AS code, market, name, high, low, close, volume, day, ROUND((high+low)/2,1) AS mid, ROUND((((high+low)/2)*0.04),2) AS medomesu FROM {market}_{code}_d AS res INNER JOIN companylist ON companylist.code = res.code WHERE day BETWEEN date("2022-01-27") AND date("2022-01-28")+1 ORDER BY day DESC LIMIT 2")
            cursor.execute(f'SELECT companylist.code AS code,market,name,high,low,close,volume,day,ROUND((high+low)/2,1) AS mid, ROUND((((high+low)/2)*0.04),2) AS medomesu FROM {market}_{code}_d AS res INNER JOIN companylist ON companylist.code = res.code WHERE day BETWEEN date("2022-01-27") AND date("2022-01-28")+1 ORDER BY day DESC LIMIT 2')
            res2 = cursor.fetchall()
            data_stack.append(res2)
        return data_stack

        
    def getname():
        if request.method == 'POST':
            datas = request.get_json()
            value = datas['name']
            cursor.execute(f"SELECT market, code, name FROM CompanyList WHERE NAME = '{value}'")
            res = cursor.fetchall()
            market = res[0]["market"]
            code = res[0]["code"]
            cursor.execute(f'SELECT companylist.code AS code,market,name,high,low,close,volume,day,ROUND((high+low)/2,1) AS mid, ROUND((((high+low)/2)*0.04),2) AS medomesu FROM {market}_{code}_d AS res INNER JOIN companylist ON companylist.code = res.code WHERE day BETWEEN date("2022-01-27") AND date("2022-01-28")+1 ORDER BY day DESC LIMIT 2')
            res2 = cursor.fetchall()
            return res2
    
    def getDay(name):
        cursor.execute(f"SELECT market, code, name FROM CompanyList WHERE name = '{name}' ORDER BY RAND() LIMIT 28")
        res = cursor.fetchall()
        data_stack = list()
        for i in range(len(res)):
            code = res[i]["code"]
            market = res[i]["market"]
            cursor.execute(f'SELECT companylist.code AS code,market,name,high,low,close,volume,date_format(day,"%Y-%m-%d") dateonly,ROUND((high+low)/2,1) AS mid FROM {market}_{code}_m AS res INNER JOIN companylist ON companylist.code = res.code WHERE day between date("2021-02-03") and date("2022-02-03")+1 ORDER BY day asc limit 12')
            res2 = cursor.fetchall()
            data_stack.append(res2)
        return data_stack

    def getSearch(name):
        # cur = db.cursor(pymysql.cursors.DictCursor)
        cursor.execute(f"SELECT market,code,name FROM CompanyList WHERE name = '{name}'")
        res = cursor.fetchall()
        code = res[0]["code"]
        market = res[0]["market"]
        cursor.execute(f'SELECT companylist.code AS code,market,name,high,low,close,volume,day,ROUND((high+low)/2,1) AS mid, ROUND((((high+low)/2)*0.04),2) AS medomesu FROM {market}_{code}_d AS api INNER JOIN companylist ON companylist.code = api.code WHERE day BETWEEN date("2022-01-27") AND date("2022-01-28")+1 ORDER BY day DESC LIMIT 2')
        res2 = cursor.fetchall()
        return res2
    
    def getSearchInput(name):
        # cur = db.cursor(pymysql.cursors.DictCursor)
        cursor.execute(f"SELECT market,code,name FROM CompanyList WHERE name Like '%{name}%' limit 10")
        res = cursor.fetchall()
        return res