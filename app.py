from flask import Flask, render_template
from flask_frozen import Freezer
import markdown2
import os

FREEZER_BASE_URL = "https://cvc-lab.github.io/afc-website/"
FREEZER_REMOVE_EXTRA_FILES = False

app = Flask(__name__)
app.config.from_object(__name__)
freezer = Freezer(app)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/<page_name>.html')
def render_page(page_name):
    file_path = os.path.join('markdown_docs', f'{page_name}.md')
    try:
        with open(file_path, 'r') as file:
            content = markdown2.markdown(file.read(), extras=["footnotes", "header-ids"])
    except FileNotFoundError:
        return "Page not found", 404
    return render_template('document.html', content=content, active_page=page_name)

if __name__ == '__main__':
    freezer.freeze()
