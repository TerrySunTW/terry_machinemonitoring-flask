from flask import Flask

from ui.route import UI_ROUTE

app = Flask(
    __name__,
    static_folder=None,
    template_folder=None)

def main():
    app.register_blueprint(UI_ROUTE)

    app.run()

if __name__ == "__main__":
    main()
