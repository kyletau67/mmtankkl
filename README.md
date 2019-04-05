# mmtankkl

## Kendrick Liang, Max Millar, Amit Narang, Kyle Tau

### Description of Data
This dataset contains information on documentations of crimes in the city of Raleigh, NC, from the end of 2005 to June 1st, 2014.There are descriptions for the type of crime, the date, LCR codes, and the incident number. 
This data is an interesting look at the frequency and location of crimes in Raleigh, NC.
Find the original site [here](http://data-wake.opendata.arcgis.com/datasets/ral::raleigh-police-incidents-srs/data?geometry=-79.026,35.767,-78.229,35.962).

### Enlivening the Data
The first display will be a map with the 6 districts of Raleigh dissected. The user will be able to click a district and then view a bar chart on the crimes for that district. By displaying both the bar chart and the map, as well as allowing users to interact by choosing to display certian crimes on the bar chart, users will get a good grasp on the crime situation of the city.

### D3 feature utilization
There will be a map with the user having the option to select the district for which the crime data will be displayed.
The bar chart will have options to display certain crimes.

### Visualization
Bar Charts:  
![Bar chart](https://github.com/kyletau67/mmtankkl/blob/master/doc/crime.PNG)


### Launch Codes
1. Create and open your virtual environment

```
$ python3 -m venv venv
$ . venv/bin/activate
```

2. Clone the Poppins repository

```
$ git clone https://github.com/kyletau67/mmtankkl.git
```

3. Install dependencies in [requirements.txt] (/requirements.txt)

```
pip install -r requirements.txt
```

4. Run the flask app
```
$ cd mmtankkl
$ flask run
```

4. Open the flask app in your favorite browser!
  Go to http://127.0.0.1:5000/
