import copy

def findCrimes():
    tempSet = set()
    with open("../data/withMonth.csv","r") as file:
        lineRead = file.readline()
        lineRead = file.readline()
        while lineRead:
            lineReadSplit = lineRead.split(",")
            crime = lineReadSplit[3]
            tempSet.add(crime)
            lineRead = file.readline()
    return list(tempSet)



crimes = ['MV THEFT/AUTOMOBILE','MURDER AND NONNEGLIGENT MANSLAUGHTER','DISORDERLY/ VAGRANCY / BEGGING']
crimes = findCrimes()
print(crimes)
with open("../data/crimes.csv","w") as file:
    file.write(repr(crimes))
def addMonth():
    with open("../data/Raleigh_Police_Incidents_SRS.csv") as file:
        lineRead = file.readline()
        lineRead = file.readline()
        with open("data/withMonth.csv","w") as writer:
            while lineRead:
                lineReadSplit = lineRead.split(",")
                date = lineReadSplit[-5]
                month = date.split("-")
                val = month[1]
                lineReadSplit[-2] = val
                toAdd = ",".join(lineReadSplit)
                writer.write(toAdd)
                lineRead = file.readline()
def getInfo():
    districts = ['SOUTHEAST','NORTHWEST','NORTH','SOUTHWEST','NORTHEAST','DOWNTOWN']
    calendar = ["01","02","03","04","05","06","07","08","09","10","11","12"]
    nestArr1 = []
    for x in calendar:
        nestArr1.append({'month' : x, 'stats': [0] * 342})
    nestArr2 = copy.deepcopy(nestArr1)
    nestArr3 = copy.deepcopy(nestArr1)
    nestArr4 = copy.deepcopy(nestArr1)
    nestArr5 = copy.deepcopy(nestArr1)
    nestArr6 = copy.deepcopy(nestArr1)
    d = dict.fromkeys(districts)
    d['SOUTHEAST'] = nestArr1
    d['NORTHWEST'] = nestArr2
    d['NORTH'] = nestArr3
    d['SOUTHWEST'] = nestArr4
    d['NORTHEAST'] = nestArr5
    d['DOWNTOWN'] = nestArr6
    print(d)
    with open("../data/withMonth.csv") as file:
        line = file.readline()
        line = file.readline()
        while line:
            last_line = line.split(",")
            crime = last_line[3]
            ind = crimes.index(crime)
            district = last_line[-3]
            if district == 'SOUTWEST':
                district = "SOUTHWEST"
            if district in districts:
                month = last_line[-2]
                #print(district,month,str(ind))
                d[district][int(month) - 1]['stats'][ind] += 1
            line = file.readline()
    return d

# user picks a district
# and different crimes show up for each month
# too many crimes to choose from, so made it for three different ones
# Car Theft, Disorderly/Vagrancy/Begging, Murder & Non-Negligent Murder
# will return a dictionary with keys as districts and values as dictionaries
# the keys of the nested dict will be months, and their values will be a list of #'s
# if you need to change crimes, change the crimes at the start
'''
crimes = getInfo()
with open("../data/crimeCount.csv","w") as file:
    file.write(repr(crimes))
'''
