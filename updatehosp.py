import pandas as pd
from csv import writer

def updatingdatabase(hsp, pasz, ema):
    hosp=pd.read_csv('static/Database/hospitals.csv')
    inc = hosp.shape[0]
    newrow=[inc,hsp,pasz,ema,0,0,0,0,0,0]

    # Open our existing CSV file in append mode
    # Create a file object for this file
    with open('static/Database/hospitals.csv', 'a') as f_object:
    
        # Pass this file object to csv.writer()
        # and get a writer object
        writer_object = writer(f_object)
    
        # Pass the list as an argument into
        # the writerow()
        writer_object.writerow(newrow)
    
        #Close the file object
        f_object.close()
