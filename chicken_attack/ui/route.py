from flask import Blueprint
from flask import render_template

UI_ROUTE = Blueprint(
    'ui_route',
    __name__,
    template_folder='templates',
    static_folder='static')

@UI_ROUTE.route('/')
def root_html():
    return render_template('index.html')

@UI_ROUTE.route('/page_1')
def page_1_html():
    return render_template('page_1/index.html')
