from flask import Blueprint
from flask import render_template

class WebInfo:
    Title = '機聯網系統'

UI_ROUTE = Blueprint(
    'ui_route',
    __name__,
    template_folder='templates',
    static_folder='static')

@UI_ROUTE.route('/')
@UI_ROUTE.route('/monitor')
def root_html():
    return render_template('monitor.html',WebInfo=WebInfo)


@UI_ROUTE.route('/history')
def history_html():
    return render_template('history.html',WebInfo=WebInfo)

@UI_ROUTE.route('/templatelist')
def templatelist_html():
    return render_template('templatelist.html',WebInfo=WebInfo)

@UI_ROUTE.route('/machinelist')
def machinelist_html():
    return render_template('machinelist.html',WebInfo=WebInfo)

@UI_ROUTE.route('/edittemplate')
@UI_ROUTE.route('/edittemplate/<templateID>/<protocoltype>')
def edittemplate_html(templateID='',protocoltype=''):
    return render_template('edittemplate.html',WebInfo=WebInfo,templateID=templateID,protocoltype=protocoltype)

@UI_ROUTE.route('/editmachine')
@UI_ROUTE.route('/editmachine/<machineID>')
def editmachine_html(machineID=''):
    return render_template('editmachine.html',WebInfo=WebInfo,machineID=machineID)

@UI_ROUTE.route('/login')
def login_html():
    return render_template('login.html',WebInfo=WebInfo)

@UI_ROUTE.route('/tablist')
def tablist_html():
    return render_template('tablist.html',WebInfo=WebInfo)