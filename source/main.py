from flask import Flask, render_template, url_for, redirect
import os

app = Flask(__name__)

app.static_folder = os.path.abspath("static")

project_name = 'Dance Performance Scoring'


@app.route('/')
def redirect_home():
    return redirect(url_for('home'))


@app.route('/home')
def home():
    return render_template('home.html', active='home', project_name=project_name)


@app.route('/app')
def core_app():
    return render_template('app.html', active='app', project_name=project_name)


if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=8080)
