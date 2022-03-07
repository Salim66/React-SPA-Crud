import React from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './StaffCreate.css';

const StaffCreate = () => {
  return (
    <section className="all-staff">
        <Container>
            <Row className='d-flex justify-content-center my-5'>
                <Col md={8}>
                    <Card>
                        <Card.Header className='d-flex justify-content-between'>
                            <h3>Create Staff</h3>
                            <Link to='/' className='btn btn-primary'>All staff</Link>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control  />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Job</Form.Label>
                                    <Form.Control  />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Photo</Form.Label>
                                    <Form.Control  />
                                </Form.Group><br />
                                <Form.Group>
                                    <Button className='btn btn-primary btn-sm'>Add now</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default StaffCreate;