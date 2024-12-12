'use client';

import { signIn } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const SignIn = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    const result = await signIn('credentials', {
      callbackUrl: '/feed',
      email,
      password,
    });

    if (result?.error) {
      console.error('Sign in failed: ', result.error);
    }
  };

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #00a37d, #1ba8a8 !important' }}>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
        <Row className="w-100 justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <Card className="shadow">
              <Card.Body className="p-4">
                <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>
                  Sign In
                </h2>
                <Form method="post" onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaEnvelope />
                      </span>
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaLock />
                      </span>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                      />
                    </div>
                  </Form.Group>
                  <Button
                    type="submit"
                    className="w-100 mt-3"
                    style={{
                      backgroundColor: '#333',
                      border: 'none',
                    }}
                  >
                    Sign In
                  </Button>
                </Form>
              </Card.Body>
              <Card.Footer className="text-center">
                <small>
                  Don&apos;t have an account?{' '}
                  <a href="/auth/signup" style={{ color: '#6a11cb' }}>
                    Sign up
                  </a>
                </small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SignIn;
