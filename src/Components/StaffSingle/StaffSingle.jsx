import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './StaffSingle.css';

const StaffSingle = () => {

  const [single, setSingleData] = useState(0);
  

  const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:3000/staff/' + id).then(res => {
            setSingleData(res.data)
            console.log(res.data);
        })
    }, [])




  return (
    <section className="all-staff">
        <Container>
            <Row className='d-flex justify-content-center my-5'>
                <Col md={4}>
                <Link to='/' className='btn btn-primary btn-sm'>Back</Link><br /><br />
                    <Card>
                        <img src={ single.photo } alt="" />
                        <Card.Body>
                           <Table>
                               <tbody>
                                   <tr>
                                       <td>Name:</td>
                                       <td>{ single.name }</td>
                                   </tr>
                                   <tr>
                                       <td>Job:</td>
                                       <td>{ single.job }</td>
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