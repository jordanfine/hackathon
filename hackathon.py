from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.restless import APIManager

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:jansport@localhost/rantthat'
db = SQLAlchemy(app)

class User(db.Model):
	__tablename__ = 'users'
	user_id = db.Column(db.Integer, primary_key = True)
	age = db.Column(db.Integer)
	gender = db.Column(db.String(1))
	default_lat = db.Column(db.Float(6))
	default_lng = db.Column(db.Float(6))
	username = db.Column(db.String(25))

class Story(db.Model):
    __tablename__ = 'stories'
    story_id = db.Column(db.Integer, primary_key = True)
    story_text = db.Column(db.String(5000))
    lat = db.Column(db.Float(6))
    lng = db.Column(db.Float(6))
    subject = db.Column(db.String(200))
    posted_time = db.Column(db.DateTime)
    subject = db.Column(db.String(200))
    happy_count = db.Column(db.Integer(3))
    sad_count = db.Column(db.Integer(3))
    laughing_count = db.Column(db.Integer(3))
    heart_count = db.Column(db.Integer(3))
    community_resource = db.Column(db.Boolean)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
    
class Comment(db.Model):
    __tablename__ = 'comments'
    comment_id = db.Column(db.Integer, primary_key = True)
    comment_text = db.Column(db.String(2000))
    hash_tags = db.Column(db.String(200))
    created_time = db.Column(db.DateTime)
    subject = db.Column(db.String(200))
    story_id = db.Column(db.Integer, db.ForeignKey('stories.story_id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))

db.create_all()

manager = APIManager(app, flask_sqlalchemy_db=db)

manager.create_api(User, methods=['GET', 'POST', 'DELETE'])
manager.create_api(Story, methods=['GET', 'POST', 'DELETE'])
manager.create_api(Comment, methods=['GET', 'POST', 'DELETE'])

app.run()
