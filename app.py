import json
from flask import Flask, jsonify, request

app = Flask(__name__)

#get all students
@app.route('/students', methods=['GET'])
def get_students():
    with open('students.json', 'r') as f:
        students = json.load(f)
    return jsonify(students)

# get student by name
@app.route('/students/<string:name>', methods=['GET'])
def get_student_by_name(name):
    with open('students.json', 'r') as f:
        students = json.load(f)
    for student in students:
        if student['name'] == name:
            return jsonify(student)
    return jsonify({'message': 'student not found'}), 404

#add a student
@app.route('/students', methods=['POST'])
def add_student():
    with open('students.json', 'r') as f:
        students = json.load(f)
    student = request.get_json()
    students.append(student)
    with open('students.json', 'w') as f:
        json.dump(students, f)
    return jsonify(student), 201

#add grade for student in one of the three professions
@app.route('/students/<int:index>/grade', methods=['POST'])
def add_grade(index):
    with open('students.json', 'r') as f:
        students = json.load(f)
    grade = request.get_json()
    students[index]['grades'] = grade
    with open('students.json', 'w') as f:
        json.dump(students, f)
    return jsonify(grade), 201


if __name__ == '__main__':
    app.run(debug=True)
