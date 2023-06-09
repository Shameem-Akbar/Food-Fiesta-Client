import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PdfFile from './PdfFile';

const Blog = () => {
    return (
        <Container>
            <h1 className='text-center fw-bold text-decoration-underline mb-4'>Question & Answer</h1>
            <div className='d-flex justify-content-end'>
                <PDFDownloadLink document={<PdfFile />} filename="FORM">
                    {({ loading }) => (loading ? <button className='fw-bold px-3 border-0 text-white border rounded p-2 mb-2' style={{ backgroundColor: "#FF5915" }}>Loading Document...</button> : <button className='fw-bold px-3 border-0 text-white border rounded p-2 mb-2' style={{ backgroundColor: "#FF5915" }}>Download PDF</button>)}
                </PDFDownloadLink>
            </div>
            <Row xs={1} md={2} className="g-2 mb-5">
                <Col>
                    <Card className='h-100' style={{ borderColor: "#FF5915", }}>
                        <Card.Body>
                            <Card.Text className='fs-3'> <span className='fw-bold'>Ques-01.</span> Tell us the differences between uncontrolled and controlled components.</Card.Text>
                            <Card.Text className='fs-4'>
                                <span className='fw-bold'>Ans: </span>
                                In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='h-100' style={{ borderColor: "#FF5915", }}>
                        <Card.Body>
                            <Card.Text className='fs-3'> <span className='fw-bold'>Ques-02.</span> How to validate React props using PropTypes?</Card.Text>
                            <Card.Text className='fs-4'>
                                <span className='fw-bold'>Ans: </span>
                                PropTypes define the type of a prop. So each time, a value is passed through a prop, it gets validated for it’s type. If you pass a value through a prop with a different data type than it is specified in the PropTypes, an error message will be printed in the console of the browser.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='h-100' style={{ borderColor: "#FF5915", }}>
                        <Card.Body>
                            <Card.Text className='fs-3'> <span className='fw-bold'>Ques-03.</span> Tell us the difference between nodejs and express js.</Card.Text>
                            <Card.Text className='fs-4'>
                                <span className='fw-bold'>Ans: </span>
                                NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='h-100' style={{ borderColor: "#FF5915", }}>
                        <Card.Body>
                            <Card.Text className='fs-3'> <span className='fw-bold'>Ques-04.</span> What is a custom hook, and why will you create a custom hook?</Card.Text>
                            <Card.Text className='fs-4'>
                                <span className='fw-bold'>Ans: </span>
                                Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;