import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const SignUpPage = () => {
    const loginCard = {
        display:'flex',
        position: 'fixed', 
        left: '50%', 
        top: '50%', 
        transform: 'translate(-50%, -50%)',  
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
        borderRadius: '20px'
    }
    return (
        <div style={loginCard}>
            <Card style={{width: '600px', height: '400px', border: 'none',}}>
                <Card.Body>
                    <Card.Title style={{display:'flex', justifyContent:'center', padding: '1em'}}>
                        Please Login
                    </Card.Title>
                    <Form>
                        <div style={{padding: '3em'}}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password"/>
                            </FloatingLabel>
                        </div>
                    </Form>
                    <div style={{display:'flex', justifyContent: 'center', marginTop:'3em'}}>
                        <Card.Text>Don't have an account?</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SignUpPage;