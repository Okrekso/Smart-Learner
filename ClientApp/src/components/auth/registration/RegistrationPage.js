import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import RegistrationForm from './RegistrationForm';

class RegistrationPage extends Component {
    render() {
        return (
            <Row>
                <Col md={4} mdOffset={4}>
                    <RegistrationForm />
                </Col>
            </Row>
        );
    }
}
export default RegistrationPage;