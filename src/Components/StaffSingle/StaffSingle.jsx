import React from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './StaffSingle.css';

const StaffSingle = () => {
  return (
    <section className="all-staff">
        <Container>
            <Row className='d-flex justify-content-center my-5'>
                <Col md={4}>
                <Link to='/' className='btn btn-primary btn-sm'>Back</Link><br /><br />
                    <Card>
                        <img src="//th.bing.com/th/id/R.b8d2f2d146f487ad58b6e9d82e05549b?rik=ZGG2KRSf85M6Ng&pid=ImgRaw&r=0" alt="" />
                        <Card.Body>
                           <Table>
                               <tbody>
                                   <tr>
                                       <td>Name:</td>
                                       <td>Salim Hasan</td>
                                   </tr>
                                   <tr>
                                       <td>Job:</td>
                                       <td>MERN Stack Developer</td>
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

export default StaffSingle;