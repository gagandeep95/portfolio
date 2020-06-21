import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';

const AboutPage = () => (
    <>
       <Row className="topMargin">
            <Col></Col>
            <Col md={10} className="shadow-sm p-5 mb-4" >
               <h1>ABOUT <span className="span">ME</span></h1>
               <h4>Personal Info</h4>   
               <p>I am self-motivated and creative Web developer with 2 years of experience in designing and developing web applications, user interfaces, testing, debugging. I have designed and developed a user-friendly website, including an enhanced check-out page that increased user clicks, and subsequently customer purchases by 18%. I have improved web application’s security,  minimizing hacker attacks from 2.5% to 0.03%.</p>    
                <Row>
                    <Col md={4}>
                        
                        <h5>First Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Gagan</h5>
                        <h5>Last Name  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Deep</h5>
                        <h5>Date of Birth &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 07 July 1995</h5>
                        <h5>Nationality &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: India</h5>
                    </Col>
                    <Col></Col>
                    <Col md={6}>
                        <h5>Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: +1 437-991-2559</h5>
                        <h5>Address  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Toronto, Canada</h5>
                        <h5>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: gagandeep.developer.95@gmail.com</h5>
                        <h5>Spoken &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: English, Hindi, Punjabi</h5>
                    </Col>
                </Row>
                <br/><br/>
                <Button variant="danger" size="lg">Download my Resume</Button>&nbsp;&nbsp;&nbsp;
                <Button variant="outline-danger" size="lg">My Blog</Button>
            </Col>
            <Col></Col>          
        </Row>           
    </>
); 

export default AboutPage;