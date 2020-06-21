import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Summary from '../components/Summary'; 
import ProfilePic from '../components/ProfilePic';

const HomePage = () => (
    <>  
        <Row className="topMargin">
            <Col></Col>
            <Col md={11} className="shadow-sm p-4 mb-4" >
                <Row>
                    <Col md={5} >
                                {/* THIS COMPONENTS CONTAIN PROFILE IMAGE */}
                        <ProfilePic/>
                    </Col>
                    <Col md={7}  className="d-flex flex-wrap align-content-center">
                        {/* THIS SUMMARY COMPONENTS CONTAIN SUMMARY */}
                        <Summary />
                    </Col>
                </Row>
            </Col>
            <Col></Col>          
        </Row>           
    </>
); 

export default HomePage;