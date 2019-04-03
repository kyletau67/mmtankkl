import copy
crimes = ['DRUGS/POSSESSION/MARIJUANA','Homicide/Murder-Nonnegligent Manslaughter','DISORDERLY/ VAGRANCY / BEGGING']
def addMonth():
    with open("data/Raleigh_Police_Incidents_SRS.csv") as file:
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
    nestDict1 = dict.fromkeys(calendar)
    nestDict1['01'] = [0,0,0]
    nestDict1['02'] = [0,0,0]
    nestDict1['03'] = [0,0,0]
    nestDict1['04'] = [0,0,0]
    nestDict1['05'] = [0,0,0]
    nestDict1['06'] = [0,0,0]
    nestDict1['07'] = [0,0,0]
    nestDict1['08'] = [0,0,0]
    nestDict1['09'] = [0,0,0]
    nestDict1['10'] = [0,0,0]
    nestDict1['11'] = [0,0,0]
    nestDict1['12'] = [0,0,0]
    nestDict2 = copy.deepcopy(nestDict1)
    nestDict3 = copy.deepcopy(nestDict1)
    nestDict4 = copy.deepcopy(nestDict1)
    nestDict5 = copy.deepcopy(nestDict1)
    nestDict6 = copy.deepcopy(nestDict1)
    d = dict.fromkeys(districts)
    d['SOUTHEAST'] = nestDict1
    d['NORTHWEST'] = nestDict2
    d['NORTH'] = nestDict3
    d['SOUTHWEST'] = nestDict4
    d['NORTHEAST'] = nestDict5
    d['DOWNTOWN'] = nestDict6
    print(d)
    with open("data/withMonth.csv","r") as file:
        line = file.readline()
        line = file.readline()
        while line:
            last_line = line.split(",")
            crime = last_line[3]
            if crime in crimes:
                ind = crimes.index(crime)
                district = last_line[-3]
                if district == 'SOUTWEST':
                    district = "SOUTHWEST"
                if district in districts:
                    month = last_line[-2]
                    print(district,month,str(ind))
                    d[district][month][ind] += 1
            line = file.readline()
    return d

# user picks a district
# and different crimes show up for each month
# too many crimes to choose from, so made it for three different ones
# Drugs/Possession/Marijuana, Disorderly/Vagrancy/Begging, Murder & Non-Negligent Murder
# will return a dictionary with keys as districts and values as dictionaries
# the keys of the nested dict will be months, and their values will be a list of #'s
# if you need to change crimes, chcange the crimes at the start
crimes = getInfo()
print(crimes)
