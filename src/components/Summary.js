import React from 'react';
import {Button} from 'react-bootstrap';
import Typical from 'react-rotating-text';



const style={
    letterSpacing:'5px'
}


const cl={
    letterSpacing:'2px',    
    color:'#e74c3c'    
}

const Summary = () => (

    <>    
        <h4 style={style}>HI THERE! THIS IS GAGAN DEEP</h4>
        <h2>I'm a creative  {' '} <Typical style={cl} items={['Full-Stack Developer','Front-End Developer']} /></h2>
        <p>I am self-motivated and creative Web developer with 2 years of experience in designing and developing web applications, user interfaces, testing, debugging.</p>
        
        <Button variant="danger" size="lg">Hire Me</Button>&nbsp;&nbsp;&nbsp;
        <Button variant="outline-danger" size="lg">My Portfolio</Button>
    </>
);

export default Summary;