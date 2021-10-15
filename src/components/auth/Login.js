import React, {useRef, useState}from 'react';
import { Form, Button, Card, Alert, Container, Navbar, Nav } from 'react-bootstrap';
import {useAuth} from '../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {

     const emailRef = useRef();
     const passwordRef = useRef();
     const { login } = useAuth();
     const [error, setError] = useState('');
     const [loading, setLoading] = useState(false);
     const history = useHistory();


     async function handleSubmit(e){
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {
          setError('');
          setLoading(true);
          await login(email, password);
          history.push('/');
        } catch {
             setError('Failed to sign in');
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
          <Container className="" style={{ minHeight: '100vh', paddingTop: '200px', paddingLeft: '450px'}}>
               <div className="w-100" style={{ maxWidth: '400px'}}>     
                    <Card>
                    <Card.Body>
                         <h2 className="text-center mb-4">Login</h2>
                         {error && <Alert variant="danger">{error}</Alert>}
                         <Form onSubmit={handleSubmit}>
                              <Form.Group id="email" className="mb-2">
                                   <Form.Label>Email</Form.Label>
                                   <Form.Control id="email" ref={emailRef} type="email" placeholder="Email" required/>
                              </Form.Group>
                              <Form.Group id="password" className="mb-4">
                                   <Form.Label>Password</Form.Label>
                                   <Form.Control id="password" ref={passwordRef} type="password" placeholder="Password" required/>
                              </Form.Group>
                              <Button disabled={loading} className="w-100" type="submit">Login</Button>
                         </Form>
                         <div className="w-100 text-center mt-3">
                              <Link to="/forgot-password">Forgot Password?</Link>
                         </div>
                    </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                         Need and account? <Link to="/signup">Sign up</Link>
                    </div>
               </div>
          </Container>
          </>
     )
}

export default Login;