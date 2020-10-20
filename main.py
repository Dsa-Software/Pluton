from flask import Flask

app = Flask(__name__)

@app.route('/')
def main():
	site = open('app/index.html').read()
	return site
app.run()