from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("map.html")

@app.route("/northwest")
def nw():
    return render_template("index.html", district = "northwest")

@app.route("/north")
def n():
    return render_template("index.html", district = "north")

@app.route("/northeast")
def ne():
    return render_template("index.html", district = "northeast")

@app.route("/southeast")
def se():
    return render_template("index.html", district = "southeast")

@app.route("/downtown")
def dt():
    return render_template("index.html", district = "downtown")

@app.route("/southwest")
def sw():
    return render_template("index.html", district = "southwest")


if (__name__ == "__main__"):
    app.debug = True
    app.run()
