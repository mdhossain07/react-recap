import React from 'react';
import { useEffect, useState } from 'react';
import Students from '../Students/Students';
import StudentsDetail from '../StudentsDetail/StudentsDetail';

const Home = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setStudents(data))
    }, [])

    return (
        <div>
            {
                students.map(student => 
                <Students data = {student} > </Students>)
            }
        </div>
    );
};

export default Home;