import React, {useRef, useState}from 'react';
import { Form, Button, Card, Alert, Container, Navbar, Nav } from 'react-bootstrap';
import {useAuth} from '../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {

     const emailRef = useRef();
     const passwordRef = useRef();
     const passwordConfirmRef = useRef();
     const { signup } = useAuth();
     const [error, setError] = useState('');
     const [loading, setLoading] = useState(false);
     const history = useHistory();

     async function handleSubmit(e){
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const passwordConfirm = passwordConfirmRef.current.value;
        if(password !== passwordConfirm){
               return setError('Passwords do not match');  
        }

        try {
          setError('');
          setLoading(true);
          await signup(email, password);
          history.push('/');
        } catch {
             setError('Failed to create an account!');
        }
        setLoading(false);
     }

     return (
          <>
          <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
               <Container>
                    <Navbar.Brand href="/">Elite-Division</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: 'end'}}>
                    <Nav >
                         <Nav.Link href="/signup">Sign up</Nav.Link>
                         <Nav.Link eventKey={2} href="/login">
                         Login
                         </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
               </Container>
          </Navbar>
          <Container className="" style={{ minHeight: '100vh', paddingTop: '150px', paddingLeft: '460px'}}>
               <div className="w-100" style={{ maxWidth: '400px'}}> 
                    <Card>
                         <Card.Body>
                              <h2 className="text-center mb-4">Sign Up</h2>
                              {error && <Alert variant="danger">{error}</Alert>}
                              <Form onSubmit={handleSubmit}>
                                   <Form.Group id="email" className="mb-2">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control id="email" ref={emailRef} type="email" placeholder="Email" required/>
                                   </Form.Group>
                                   <Form.Group id="password" className="mb-2">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control id="password" ref={passwordRef} type="password" placeholder="Password" required/>
                                   </Form.Group>
                                   <Form.Group id="password-confirm" className="mb-4">
                                        <Form.Label>Password Confirmation</Form.Label>
                                        <Form.Control id="password" ref={passwordConfirmRef} type="password" placeholder="Password" required/>
                                   </Form.Group>
                                   <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                              </Form>
                         </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                         Already have an account? <Link to="/login">Login</Link>
                    </div>
               </div>
          </Container>
          </>
     )
}

export default Signup;