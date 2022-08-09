import pandas as pd
from csv import writer

def updateorganc(organ, hsp):
    hosp=pd.read_csv('static/Database/hospitals.csv')
    if(organ=='cornea'):ind=4
    if(organ=='heaart'):ind=5
    if(organ=='kidney'):ind=6
    if(organ=='liver'):ind=7
    if(organ=='lung'):ind=8
    if(organ=='pancreas'):ind=9


    for i in range (0, hosp.shape[0]):
        if(hsp==hosp.iloc[i, 0]):
            hosp.iloc[i, ind]=hosp.iloc[i, ind]+1
            print(hosp.iloc[i, ind])


