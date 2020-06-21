import React from 'react';
import {Row, Col} from 'react-bootstrap';

const ExperincePage = () => (
    <>
       <Row className="topMargin">
            <Col></Col>
            <Col md={10} >
                <h1>MY <span className="span">EXPERINCE</span></h1>
                <hr/>
                <br/>
                <section className="text-justify shadow-sm p-4 mb-4">
                    <h4>WEB-DEVELOPER-  VIRUAL XCELLENCE</h4>
                    <span>September 2019 - December 2019</span>
                    <p><b>SKILLS & TOOLS : </b> HTML5, CSS3, Bootstrap4, JavaScript(ES6), React.js, PHP, MySQL, WordPress, GIT, JIRA </p>
                    <hr/>    
                    <ul>
                        <li>Fixed errors from existing websites and performed upgrades that significantly improved web functionality and speed.</li>
                        <li>Collaborated with the cross-functional teams to convert visual designs, user experience flows, and content into functional and engaging interfaces ensuring high performance on mobile and desktop.</li>
                        <li>Actively participated in the full development life cycle including functional specifications, work estimation, design, development, cross-browser testing, bug resolution, and deployment.</li>
                    </ul>
                </section>
                <br/>    
                <section className="text-justify shadow-sm p-4 mb-4">
                    <h4>FULL-STACK WEB-DEVELOPER- PIXELDROPINC</h4>
                    <span>May 2016 - March 2018</span>
                    <p><b>SKILLS & TOOLS : </b> HTML5, CSS3, Bootstrap4, JavaScript(ES6), React.js, PHP, MySQL, WordPress, GIT, JIRA </p>
                    <hr/>    
                    <ul>
                        <li>Build a dynamic and interactive website that ensures high traffic, page views, and User Experience, resulting in a 35% growth in sales revenue.</li>
                        <li>Improved web application security applications, minimizing hacker attacks from 2.5% to 0.03%.</li>
                        <li>Co-ordinated the workflow with the UI/UX designer and co-operated with the back-end developers in the process of building RESTful API. </li>
                    </ul>
                </section>
            </Col>
            <Col></Col>          
        </Row>
        <br/><br/>           
    </>
); 

export default ExperincePage;