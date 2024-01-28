import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const submitlLogin =  () => {
        console.log('test');
        console.log(email);
    }


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
            <Card style={{width: '600px', height: '400px', borderRadius: '20px', border: 'none',}}>
                <Card.Body>
                    <Card.Title style={{display:'flex', justifyContent:'center', padding: '1em'}}>
                        Please Login
                    </Card.Title>
                    <div style={{padding: '2em'}}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)}/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                        </FloatingLabel>
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <button class="button-64" ><span class="text">Login</span></button>
                    </div>
                    <div style={{display:'flex', justifyContent: 'center', marginTop:'1.5em'}}>
                        <Card.Text>Need  an account? Click <Link to="/signup">Here</Link></Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LoginPage;