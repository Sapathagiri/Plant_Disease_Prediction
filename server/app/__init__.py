from flask import Flask
from config import development
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    
    CORS(app)
    
    app.config.from_object(development.Config)
    
    from app.routes import blueprint
    app.register_blueprint(blueprint)
    
    return app
