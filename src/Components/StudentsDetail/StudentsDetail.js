import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const StudentsDetail = () => {
    const {id} = useParams();
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const [students, setStudents] = useState({});

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setStudents(data))
    }, [])

    const {name, email, phone, website} = students;

    return (
        <div style={{margin : '20px'}}>
            <h2> This is Student Component : {id} </h2>
            <h3> Name : {name}</h3>
            <p> Email :{email}</p>
            <p> Phone :{phone}</p>
            <p> Website : {website} </p>
        </div>
    );
};

export default StudentsDetail;