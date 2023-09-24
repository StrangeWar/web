from flask import Flask, render_template,session, flash, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError


app = Flask(__name__)
app.secret_key = ";skdfkjbs[[]sf]"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'  # SQLite database file
db = SQLAlchemy(app)


# Create a User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(80),unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    def __repr__(self):
        return '<User %r>' % self.username


@app.route('/')
def home():
    return render_template('index.html')



@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        user = User.query.filter_by(username=username, password=password).first()
    
        if user:
            flash('Logged in successfully!', 'success')
            return render_template('profile.html', username=user.username, email=user.email)
        else:
            return "Login failed. Please check your credentials."
    return render_template('login.html')


@app.route('/logout')
def logout():
    # You can clear server-side session data here if needed.
    return redirect(url_for('login'))

@app.route('/signup_page')
def signup_page():
    # You can clear server-side session data here if needed.
    return redirect(url_for('signup'))

# @app.route('/profile')
# def profile():
    
#     return render_template('profile.html')
    

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')



@app.route('/signup', methods=['GET','POST'])
def signup():
    new_username = request.form.get('new_username')
    new_password = request.form.get('new_password')
    new_email = request.form.get('new_email')

    # Check if the username is already taken
    existing_user = User.query.filter_by(username=new_username).first()
    if existing_user:
        return "Username already exists. Please choose another username."

    

    # Create a new user and add it to the database
    new_user = User(username=new_username,email=new_email, password=new_password)
    db.session.add(new_user)
    
    
    try:
        db.session.commit()
        return 'Registration successful! You can now log in.'
            
    except IntegrityError:
        db.session.rollback()
        return render_template('signup.html')
    
    


if __name__ == '__main__':
    app.run(debug=True)
