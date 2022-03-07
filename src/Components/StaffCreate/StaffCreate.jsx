import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './StaffCreate.css';

const StaffCreate = () => {

    const [input, setInput] = useState({
        name: '',
        job: '',
        photo: ''
    });

    function handleInputVal(e){
        
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });

    }

    let handleSubmitForm = (e) => {
        e.preventDefault();

        if(input.name == '' && input.job == '' && input.photo == ''){

            alert('All fields are required!');
            
        }else {

            axios.post('http://localhost:3000/staff', input);

            setInput({
                name: '',
                job: '',
                photo: ''
            });

        }

        

    }

  return (
    <section className="all-staff">
        <Container>
            <Row className='d-flex justify-content-center my-5'>
                <Col md={8}>
                    <Card>
                        <Card.Header className='d-flex justify-content-between'>
                            <h3>Create New Staff</h3>
                            <Link to='/' className='btn btn-primary'>All staff</Link>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={ handleSubmitForm } method='POST' autoComplete='off'>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name='name' value={ input.name } onChange={ (e) => handleInputVal(e) } />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Job</Form.Label>
                                    <Form.Control name='job' value={ input.job } onChange={ (e) => handleInputVal(e) } />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Photo</Form.Label>
                                    <Form.Control name='photo' value={ input.photo } onChange={ (e) => handleInputVal(e) } />
                                </Form.Group><br />
                                <Form.Group>
                                    <Button type='submit' className='btn btn-primary btn-sm'>Add now</Button>
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