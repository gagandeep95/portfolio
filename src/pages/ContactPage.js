import React, {useState} from 'react';
import {Row, Col,Form, Button, Alert} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const ContactPage = () => {

    const [msg, setMsg] = useState(' ');    
    function successMessage(e){
        e.preventDefault();  
        if(msg === ' '){
            setMsg(  <Alert  variant="success">
                Your message has been sent!
                </Alert>);
        }
        else{
            setMsg(' ');
        }
    }

    return(  
    <>
      <Row className="topMargin">
            <Col></Col>
            <Col md={10} className="shadow-sm p-5 mb-4" >
               <h1>GET IN <span className="span">TOUCH</span></h1>
                <hr/>

                <br/>    
                <Row>
                    <Col md={4}>
                    <h5>LOCATION</h5>
                    <p>8 Shirebrook Crt<br/>Brampton, ON<br/>L6X 1Z2</p>
                    <br/>
                    <h5>CONTACT NO.</h5>
                    <p>+1(437)991-2559</p>
                    <SocialIcon url="https://www.linkedin.com/in/gagandeep95/" />
                    <SocialIcon url="https://github.com/gagandeep95" />
                    <SocialIcon url="https://www.facebook.com/deep.guru.568/" />
                    </Col>
                    <Col></Col>
                    <br/>
                    <Col md={6}>

                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Please Enter your name" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1" >
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            
                            <Button onClick={successMessage} variant="primary" className="form-control" type="submit">
                                Send
                            </Button>
                        </Form>
                        <br/>
                        {msg}
                      
                    </Col>
                </Row>
            </Col>
            <Col></Col>          
        </Row>
        <br/><br/>           
    </>
    ); 
    };

export default ContactPage;