import Student from "../../models/Student";
import axios from 'axios'
import { MY_SERVER } from '../../env'

export function addStudent(stu: Student) {
    return new Promise<{ data: Student }>((resolve) =>
        axios.post(MY_SERVER  + "/", stu).then(res => resolve({ data: res.data }))
    );
}

export function getAllStudents() {
    return new Promise<{ data: Student[] }>((resolve) =>
        axios.get(MY_SERVER  + "/").then(res => resolve({ data: res.data }))
    );
}


