import updatehosp
import json
import pandas as pd
from csv import writer
from flask import request
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
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



if __name__ == "__main__":
    app.run(debug=True)