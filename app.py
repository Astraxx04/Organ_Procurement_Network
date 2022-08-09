from asyncio.log import logger
import updatehosp
import json
import updateorganc
import pandas as pd
from csv import writer
from flask import request
from flask import Flask, render_template, Blueprint
hosp=pd.read_csv('static/Database/hospitals.csv')

app=Flask(__name__)
appBlueprint = Blueprint("app",__name__,template_folder='templates',static_folder='static')
app.register_blueprint(appBlueprint)

@app.route('/')
def index():
    hsptalnam = [['' for _ in range(0, hosp.shape[0])] for _ in range(0, hosp.shape[0])]
    hsptalpaz = [['' for _ in range(0, hosp.shape[0])] for _ in range(0, hosp.shape[0])]

    for i in range (0, hosp.shape[0]):
        hsptalnam[i]=hosp.iloc[i, 1]
        hsptalpaz[i]=hosp.iloc[i, 2]
    Hospital = {}
    for i in range(len(hsptalnam)):
        Hospital[hsptalnam[i]] = [hsptalpaz[i],i]
    return render_template('index.html',Hospital=Hospital)

@app.route('/welcome/')
def welcome():
    return render_template('Update_Request.html')





@app.route('/DataBaseUpdate/')
def DataBaseUpdate():
    return render_template('Update_Form.html')

@app.route('/Request/')
def Request():
    return render_template('Select_Organ.html')




@app.route('/SignUp', methods=['POST'])
def test():
    output = request.get_json()
    print(output) # This is the output that was stored in the JSON within the browser
    print(type(output))
    result = json.loads(output) #this converts the json output to a python dictionary
    print(result) # Printing the new dictionary
    print(type(result))#this shows the json converted as a python dictionary


    hsp=result['NewhosName']
    pasz=result['NewPass']
    ema=result['NewEmail']
    updatehosp.updatingdatabase(hsp, pasz, ema)
    return result

@app.route('/UpdateDatabase', methods=['POST'])
def UpdateDatabase():
    output = request.get_json()
    print(output) # This is the output that was stored in the JSON within the browser
    print(type(output))
    result = json.loads(output) #this converts the json output to a python dictionary
    print(result) # Printing the new dictionary
    print(type(result))#this shows the json converted as a python dictionary

    orglis=result["ListOfOrganUpdated"]
    hptal=result["HospitalIndex"]
    print(orglis)
    print(hptal)
    lth=len(orglis)
    print(lth)
    print(orglis[0])
    for i in range(0, lth):
        updateorganc.updateorganc(orglis[i], hptal)


    return result

if __name__ == "__main__":
    app.run(debug=True)


