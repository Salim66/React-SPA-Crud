import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Staff.css';

const Staff = () => {

  const [staff, setStaff] = useState([]);


  useEffect(() => {
    handleStaffData();
  }, []);

  async function handleStaffData() {

    let res = await axios.get('http://localhost:3000/staff');

    setStaff(res.data.reverse());

  }

  //delete 
  let handleDeleteStaff = (id) => {
    axios.delete('http://localhost:3000/staff/' + id).then(res => {
        axios.get('http://localhost:3000/staff').then(res => setStaff(res.data.reverse()));
    });

    


  }


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

                                   {
                                       staff.map((data, index) => 
                                       <tr>
                                            <td>{ index + 1 }</td>
                                            <td>{ data.name }</td>
                                            <td>{ data.job }</td>
                                            <td><img style={{height: '60px', width: '60px'}} src={ data.photo } alt="" /></td>
                                            <td>
                                                <Link to={ '/staff/' + data.id } className='btn btn-warning btn-sm'>View</Link> &nbsp;
                                                <Link allData={setStaff} to={ '/staff/edit/' + data.id } className='btn btn-info btn-sm'>Edit</Link> &nbsp;
                                                <Button onClick={ () => handleDeleteStaff(data.id) } className='btn btn-danger btn-sm'>Delete</Button>
                                            </td>
                                        </tr>
                                       
                                       )
                                   }

                                    
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