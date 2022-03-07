import React from 'react';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Staff.css';

const Staff = () => {
  return (
    <section className="all-staff">
        <Container>
            <Row className='d-flex justify-content-center my-5'>
                <Col md={8}>
                    <Card>
                        <Card.Header className='d-flex justify-content-between'>
                            <h3>All Staffs</h3>
                            <Link to='/staff/single' className='btn btn-primary'>Add new staff</Link>
                        </Card.Header>
                        <Card.Body>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Photo</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Salim Hasan</td>
                                        <td>MERN Stact Developer</td>
                                        <td><img src="" alt="" /></td>
                                        <td>
                                            <Link to='/staff/:id' className='btn btn-warning btn-sm'>View</Link> &nbsp;
                                            <Button className='btn btn-info btn-sm'>Edit</Button> &nbsp;
                                            <Button className='btn btn-danger btn-sm'>Delete</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Staff;