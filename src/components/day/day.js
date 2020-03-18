import React from 'react';
import { Row, Col, Container } from 'reactstrap';

export const MyDay = () => {
    return (
        <Container>
            <Row style={{marginTop: '10px'}}>
            </Row>
            <Row style={{minHeight: '100px'}}>
                <Col>
                    col
                </Col>
            </Row>
            <Row style={{minHeight: '700px'}}>
                <Col xs="4" sm="12">
                col
                </Col>
            </Row>
            <Row style={{minHeight: '100px'}}>
                <Col>
                    col
                </Col>
            </Row>
        </Container>
    )

}