import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { FaArrowRight, FaBookmark } from 'react-icons/fa';
import image1 from '../../../assets/slider1.jpg'
import image2 from '../../../assets/slider2.jpg'
import image3 from '../../../assets/slider3.jpg'

const HomeBlog = () => {
    return (
        <Container>
            <h1 className="text-center" style={{ fontSize: "4rem" }}>Our Blog</h1>
            <div className='row pt-3'>
                <div className='col-md-4 mb-3 mb-lg-4'>
                    <Card className='p-2 shadow border border-3'>
                        <Card.Img variant="top" src={image1} style={{ height: "14rem" }} />
                        <Card.Body>
                            <div className='d-flex justify-content-between'>
                                <Card.Title style={{ color: "#FF5915", }}>
                                    The Future of Fast Food in America
                                </Card.Title>
                                <Card.Text className='mt-1 d-flex'>
                                    <FaBookmark className='me-1' style={{ color: "#FF5915", }}></FaBookmark>
                                </Card.Text>
                            </div>
                            <Card.Text className='mb-1'>
                                <span className='fw-semibold'>Fast food has been an American staple for decades, but the industry is facing new challenges as consumers demand healthier and more sustainable options. As we look to the future of fast food in America, it&apos;s clear that the industry must adapt to meet changing consumer needs and preferences....</span>
                            </Card.Text>
                            <button className="btn mt-2 fw-semibold px-3 py-2 text-white rounded-3 border-0" style={{ backgroundColor: "#FF5915", }} type="button">Read More <FaArrowRight className='mb-1'></FaArrowRight> </button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-4 mb-3 mb-lg-4'>
                    <Card className='p-2 shadow border border-3'>
                        <Card.Img variant="top" src={image2} style={{ height: "14rem" }} />
                        <Card.Body>
                            <div className='d-flex justify-content-between'>
                                <Card.Title style={{ color: "#FF5915", }}>
                                    The Impact of Technology on American Food
                                </Card.Title>
                                <Card.Text className='mt-1 d-flex'>
                                    <FaBookmark className='me-1' style={{ color: "#FF5915", }}></FaBookmark>
                                </Card.Text>
                            </div>
                            <Card.Text className='mb-1'>
                                <span className='fw-semibold'>Technology has revolutionized every aspect of our lives, and the food industry is no exception. From farm to table, technology is transforming how we grow, process, and consume our food. In this blog post, we&apos;ll explore the impact of technology on American food and.....</span>
                            </Card.Text>
                            <button className="btn mt-2 fw-semibold px-3 py-2 text-white rounded-3 border-0" style={{ backgroundColor: "#FF5915", }} type="button">Read More <FaArrowRight className='mb-1'></FaArrowRight> </button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-4 mb-3 mb-lg-4'>
                    <Card className='p-2 shadow border border-3'>
                        <Card.Img variant="top" src={image3} style={{ height: "14rem" }} />
                        <Card.Body>
                            <div className='d-flex justify-content-between'>
                                <Card.Title style={{ color: "#FF5915", }}>
                                    The Changing Face of American Breakfast
                                </Card.Title>
                                <Card.Text className='mt-1 d-flex'>
                                    <FaBookmark className='me-1' style={{ color: "#FF5915", }}></FaBookmark>
                                </Card.Text>
                            </div>
                            <Card.Text className='mb-1'>
                                <span className='fw-semibold'>Breakfast is often called the most important meal of the day, and it&apos;s a meal that&apos;s undergone significant changes in America over the years. From traditional eggs and bacon to avocado toast and smoothie bowls, the face of American breakfast has evolved to.....</span>
                            </Card.Text>
                            <button className="btn mt-2 fw-semibold px-3 py-2 text-white rounded-3 border-0" style={{ backgroundColor: "#FF5915", }} type="button">Read More <FaArrowRight className='mb-1'></FaArrowRight> </button>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </Container>
    );
};

export default HomeBlog;