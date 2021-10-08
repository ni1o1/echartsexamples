from flask import Flask,render_template
app = Flask(__name__,
static_folder = '',
template_folder = '')
@app.route('/')
def hello_world():
    return render_template('index.html')
if  __name__  ==  '__main__':
    from werkzeug.serving import run_simple
    run_simple('127.0.0.1', 8080, app)