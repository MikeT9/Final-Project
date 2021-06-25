from flask import Flask, jsonify, request, render_template
import flask
import requests
import json
import numpy as np
# import ml module
# from pickle import load
# from pickle import dump

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/prediction")
def predict():
    get form