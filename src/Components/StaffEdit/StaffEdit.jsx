import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './StaffEdit.css';

const StaffEdit = (props) => {

    const [editData, setEditData] = useState({
        name: '',
        job: '',
        photo: ''
    });

    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:3000/staff/' + id).then(res => {
            setEditData(res.data)
            console.log(res.data);
        })
    }, [])

    const navigate = useNavigate();

    function handleInputVal(e){
        
        setEditData({
            ...editData,
            [e.target.name] : e.target.value
        });

    }


    let handleEditForm = (e) => {
        e.preventDefault();
    
        if(editData.name == '' && editData.job == '' && editData.photo == ''){

            alert('All fields are required!');

        }else {

            axios.patch('http://localhost:3000/staff/' + id, editData);
            
            return navigate('/')

        }


        

    }

  return (
    <section className="all-staff">
        <Container>
            <Row className='d-flex justify-content-center my-5'>
                <Col md={8}>
                    <Card>
                        <Card.Header className='d-flex justify-content-between'>
                            <h3>Edit Staff</h3>
                            <Link to='/' className='btn btn-primary'>All staff</Link>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={ handleEditForm } method='POST' autoComplete='off'>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name='name' value={ editData.name } onChange={ (e) => handleInputVal(e) } />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Job</Form.Label>
                                    <Form.Control name='job' value={ editData.job } onChange={ (e) => handleInputVal(e) } />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Photo</Form.Label>
                                    <Form.Control name='photo' value={ editData.photo } onChange={ (e) => handleInputVal(e) } />
                                </Form.Group><br />
                                <Form.Group>
                                    <Button type='submit' className='btn btn-primary btn-sm'>Update</Button>
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

export default StaffEdit;