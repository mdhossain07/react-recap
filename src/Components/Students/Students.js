import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Students = (props) => {
    const {name, email, id} = props.data;
    const history = useHistory();

    const handleClick = (studentId) => {
        const url = `/about/${studentId}`;
        history.push(url);
    }

   const studentStyle = {
        border : '2px solid tomato',
        margin : '20px', 
        padding : '10px',
        borderRadius : '20px'
    }

    return (
        <div style={studentStyle}>
            <h2> Name : {name} </h2>
            <p> Email : {email} </p>
            <h4> ID : {id} <Link to={`/about/${id}`}>  Click Here </Link>  </h4>
            <button onClick = {() => handleClick(id)}>Show Details</button>
        </div>
    );
};

export default Students;