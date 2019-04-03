# user picks a district
# and different crimes show up for each month
# too many crimes to choose from, so made it for three different ones
# Drugs/Possession/Marijuana, Disorderly/Vagrancy/Begging, Murder & Non-Negligent Murder
# will return a dictionary with keys as districts and values as dictionaries
# the keys of the nested dict will be months, and their values will be a list of #'s
def getInfo():
    districts = ['SOUTHEAST','NORTHWEST','NORTH','SOUTHWEST','NORTHEAST','DOWNTOWN']
    d = dict.fromkeys(districts)
    s= set()
    with open("data/Raleigh_Police_Incidents_SRS.csv","r") as file:
        line = file.readline()
        line = file.readline()
        while line:
            list_line = line.split(",")
            s.add([list_line[3],list_line[2]])
            '''
            district = list_line[-3]
            if (district in d):


            else:
                l = []
                d[district] = l
            '''
            line = file.readline()
    return s

crimes = getInfo()
print(crimes)
    # returns dictionary with nested dictionary
