import React from 'react';
import {Row, Col, ProgressBar} from 'react-bootstrap';

const SkillsPage = () => (
    <>
       <Row className="topMargin">
            <Col></Col>
            <Col md={10} className="shadow p-5 mb-4" >
               <h1>PROFESSIONAL <span className="span">SKILLS</span></h1>
                <br/>
                <Row>
                    <Col md={5}>
                        <h5>HTML</h5>  
                        <ProgressBar animated now={90} variant="danger" label={`90%`}/>
                        <br/>
                        <h5>CSS3</h5>  
                        <ProgressBar animated now={90} variant="danger" label={`90%`}/>
                        <br/>
                        <h5>JAVASCRIPT</h5>  
                        <ProgressBar animated now={80} variant="danger" label={`80%`}/>
                        <br/>
                        <h5>REACT.JS</h5>  
                        <ProgressBar animated now={80} variant="danger" label={`80%`}/>
                    </Col>
                    <Col></Col>
                    <br></br>
                    <Col md={5}>
                        <h5>BOOTSTRAP 4</h5>  
                        <ProgressBar animated now={95} variant="danger" label={`95%`}/>
                        <br/>
                        <h5>PHP</h5>  
                        <ProgressBar animated now={75} variant="danger" label={`75%`}/>
                        <br/>
                        <h5>MySQL</h5>  
                        <ProgressBar animated now={60} variant="danger" label={`60%`}/>
                        <br/>
                        <h5>NODE JS</h5>  
                        <ProgressBar animated now={60} variant="danger" label={`60%`}/>
                    </Col>
                </Row>
            </Col>
            <Col></Col>          
        </Row>           
    </>
); 
export default SkillsPage;