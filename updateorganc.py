from tkinter import FALSE
import pandas as pd
import csv as csv
from csv import writer


def updateorganc(organ, hsp):
    hosp=pd.read_csv('static/Database/hospitals.csv')

    if(organ=='cornea'):
        ind=4
    if(organ=='heart'):
        ind=5
    if(organ=='kidney'):
        ind=6
    if(organ=='liver'):
        ind=7
    if(organ=='lung'):
        ind=8
    if(organ=='pancreas'):
        ind=9
    
    print(hosp.iloc[hsp, ind])
    hosp.iloc[hsp, ind]=hosp.iloc[hsp, ind]+1
    print(hosp.iloc[hsp, ind])
    
    # writing into the file
    hosp.to_csv("static/Database/hospitals.csv", index=False,mode='w')
