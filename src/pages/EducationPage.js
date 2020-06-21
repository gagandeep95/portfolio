import React from 'react';
import {Row, Col} from 'react-bootstrap';

const EducationPage = () => (
    <>
       <Row className="topMargin">
            <Col></Col>
            <Col md={10} className="" >
                <h1>MY <span className="span">EDUCATION</span></h1>
                <hr/>
                <br/>
                <section className="text-justify shadow-sm p-4 mb-4">
                    <h4>Post Graduate Diploma, Computer Software & Database Development</h4>
                    <Row>
                        <Col md={5}><h5>Lambton College, Toronto, ON</h5></Col>
                        <Col></Col>
                        <Col md={3}><span >May 2019 - December 2019</span></Col>
                    </Row>
                    <i>Major Project – Reader-Connect (Read Online books and connect with the readers)</i>                   
                </section>
                <br/>    
                <section className="text-justify shadow-sm p-4 mb-4">
                    <h4>Bachelor of Technology, Information Technology</h4>
                    <Row>
                        <Col md={5}><h5>Guru Nanak Dev Engineering College, Ludhiana, India</h5></Col>
                        <Col></Col>
                        <Col md={3}><span >August 2013 - April 2017</span></Col>
                    </Row>
                    <i>Major Project – Online Certificate Generator (Generate online certificates for universities, colleges)</i>                   
                </section>
            </Col>
            <Col></Col>          
        </Row>
        <br/><br/>           
    </>
); 

export default EducationPage;