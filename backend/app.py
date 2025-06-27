# Backend entry point (Flask or FastAPI)

# Uncomment one of the following blocks depending on your backend choice:

# --- Flask Example ---
# from flask import Flask
# app = Flask(__name__)
#
# @app.route('/')
# def home():
#     return 'Backend is running!'
#
# if __name__ == '__main__':
#     app.run(debug=True)

# --- FastAPI Example ---
# from fastapi import FastAPI
# app = FastAPI()
#
# @app.get('/')
# def read_root():
#     return {"message": "Backend is running!"} 