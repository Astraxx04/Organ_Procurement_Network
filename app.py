import updatehosp
import json
import pandas as pd
from csv import writer
from flask import request
from flask import Flask, render_template
hosp=pd.read_csv('static/Database/hospitals.csv')

app = Flask(__name__)

@app.route('/')
def index():
    hsptalnam = [['' for _ in range(0, hosp.shape[0])] for _ in range(0, hosp.shape[0])]
    hsptalpaz = [['' for _ in range(0, hosp.shape[0])] for _ in range(0, hosp.shape[0])]

    for i in range (0, hosp.shape[0]):
        hsptalnam[i]=hosp.iloc[i, 1]
        hsptalpaz[i]=hosp.iloc[i, 2]

    for i in range (0, hosp.shape[0]):
        print(hsptalnam[i])
        print(hsptalpaz[i])
    return render_template('index.html')

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

@app.route('/Signin', methods=['POST'])
def SingIn():
    
    output = request.get_json()
    print(output) # This is the output that was stored in the JSON within the browser
    print(type(output))
    result = json.loads(output) #this converts the json output to a python dictionary
    print(result) # Printing the new dictionary
    print(type(result))#this shows the json converted as a python dictionary

    return result

if __name__ == "__main__":
    app.run(debug=True)


