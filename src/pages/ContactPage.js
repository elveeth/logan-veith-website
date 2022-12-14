import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact Us'/>
            <Row className='row-content align-items-center'>
                <Col sm='4'>
                    <h5>My Location</h5>
                    <address>
                        Midtown
                        <br />
                        Reno, NV
                        <br />
                        U.S.A.
                    </address>
                </Col>
                <Col>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+12065551234'
                    >
                        <i className='fa fa-phone' /> 1-206-555-1234
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:logan.veith@gmail.co'm
                    >
                        <i className='fa fa-envelope-o' /> logan.veith@gmail.com
                    </a>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col xs='12'>
                    <h2>Send me your Feedback</h2>
                    <hr />
                </Col>
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    )
};

export default ContactPage;