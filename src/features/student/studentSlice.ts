import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import Student from '../../models/Student';
import { addStudent, getAllStudents } from './studentAPI';

interface StudentState {
    status: 'idle' | 'loading' | 'failed';
    students: Student[]
}
const initialState: StudentState = {
    status: 'idle',
    students: []
};
export const addStudentAsync = createAsyncThunk(
    'student/addStudent',
    async (newStudent: Student) => {

        const response = await addStudent(newStudent);
        return response.data;
    }
);

export const getAllStudentsAsync = createAsyncThunk(
    'student/getAllStudents',
    async () => {
        const response = await getAllStudents();
        return response.data;
    }
);

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        increment: (state) => {
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addStudentAsync.fulfilled, (state, action) => {
            // console.log(action.payload)
            state.students.push(action.payload)
        }).addCase(getAllStudentsAsync.fulfilled, (state, action) => {
            // console.log(action.payload)
            state.students = action.payload
        })
    },
});

export const { } = studentSlice.actions;
export const selectStudnts = (state: RootState) => state.student.students;
export default studentSlice.reducer;
