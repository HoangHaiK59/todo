import React from 'react';
import {Container, Row, Col} from 'reactstrap';

export const Planned = () =>{
    return         <Container>
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
    <Row>
        <Col>
            col
        </Col>
    </Row>
</Container>
}