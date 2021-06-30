import requests

from flask import Flask, json
from flask import jsonify, render_template
import datetime as dt
import os
import pandas as pd
# import sqlalchemy
from pickle import load
from pickle import dump

# from sqlalchemy import sql
import numpy as np


from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier

# if not os.path.exists("data.db"):
#     engine=sqlalchemy.create_engine('sqlite:///data.db')
#     df=pd.read_csv("Resources/diabetes.csv")
#     df.to_sql("dataset",index=False,con=engine)

# else:
#     engine=sqlalchemy.create_engine('sqlite:///data.db')


model = load(open('model.pkl', 'rb'))
X_scaler = load(open('scaler.pkl', 'rb'))
app = Flask(__name__)


@app.route('/hello')
def hello_world():
    return 'Hello, Worldz!'

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict/Red/White/FixedAcidity/VolatileAcidity/CitricAcid/ResidualSugar/Chlorides/FreeSulfurDioxide/TotalSulfurDioxide/Density/pH/Sulphates/Alcohol")
def predict(Red,White,FixedAcidity,VolatileAcidity,CitricAcid,ResidualSugar,Chlorides,FreeSulfurDioxide,TotalSulfurDioxide,Density,pH,Sulphates,Alcohol):
    new_data = np.array([[Red,White,FixedAcidity,VolatileAcidity,CitricAcid,ResidualSugar,Chlorides,FreeSulfurDioxide,TotalSulfurDioxide,Density,pH,Sulphates,Alcohol]])
    return jsonify(model.predict(X_scaler.transform(new_data))[0])


# @app.route("/add/<Pregnancies>/<Glucose>/<BloodPressure>/<SkinThickness>/<Insulin>/<BMI>/<DiabetesPedigreeFunction>/<Age>/<Outcome>")
# def add_data(Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age,Outcome):
#     sql_str = f"INSERT INTO dataset VALUES ({Pregnancies},{Glucose},{BloodPressure},{SkinThickness},{Insulin},{BMI},{DiabetesPedigreeFunction},{Age},{Outcome});"
#     engine.execute(sql_str)
#     return jsonify("success")

# @app.route("/train")
# def train():
#     sql_str="SELECT Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age, Outcome FROM dataset"
#     df = pd.read_sql(sql_str,engine)
#     target = df["Outcome"]
#     data = df.drop("Outcome", axis=1)
#     X_train, X_test, y_train, y_test = train_test_split(data, target, random_state=42)
#     X_scaler = StandardScaler().fit(X_train)
#     X_train_scaled = X_scaler.transform(X_train)
#     X_test_scaled = X_scaler.transform(X_test)
#     rf = RandomForestClassifier(n_estimators=420)
#     model = rf.fit(X_train_scaled, y_train)
#     acc=model.score(X_test_scaled, y_test)
#     dump(X_scaler, open('scaler.pkl', 'wb'))
#     dump(model, open('model.pkl', 'wb'))

#     return jsonify({"acc":acc,})

if __name__ == '__main__':
    app.run()