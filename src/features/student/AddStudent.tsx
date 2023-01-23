import  { useState } from 'react'
import { addStudentAsync } from './studentSlice'
import { useAppDispatch } from '../../app/hooks';

const AddStudent = () => {
    const dispatch = useAppDispatch();
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [mathGrade, setmathGrade] = useState(0)
    const [englishGrade, setenglishGrade] = useState(0)
    const [computersGrade, setcomputersGrade] = useState(0)

    return (
        <div>
            Add a new Student<br></br>
            Student name<input onChange={(e) => setname(e.target.value)} />
            Student email:<input onChange={(e) => setemail(e.target.value)} />
            Student math grade:<input onChange={(e) => setmathGrade(+e.target.value)} />
            Student english grade:<input onChange={(e) => setenglishGrade(+e.target.value)} />
            Student computers grade:<input onChange={(e) => setcomputersGrade(+e.target.value)} />
            <button onClick={()=>dispatch(addStudentAsync({email,name,englishGrade,mathGrade,computersGrade}))}>Add</button>
        </div>
    )
}
export default AddStudent