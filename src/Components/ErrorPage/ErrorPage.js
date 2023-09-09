import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ErrorPage = () => {
  return (
    <Container className="error-page">
      <Row>
        <Col>
          <h1>Oops! Something went wrong.</h1>
          <p>We're sorry, but the page you are looking for does not exist.</p>
          <Button variant="primary" href="/">Go to Home</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
