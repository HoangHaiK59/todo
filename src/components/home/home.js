import React, { useState, useEffect, useRef } from 'react';
import './home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Container, ListGroup, ListGroupItem } from 'reactstrap';

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    })

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        };

        let id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
};

const styleList = {
    marginTop: '10px'
}

export const Home = ({ title }) => {
    const [delay, setDelay] = useState(1000);
    const [date, setDate] = useState(new Date().toLocaleString());
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    useEffect(() => {
        document.title = title;
        const getSecond = () => {
            let now = new Date();
            let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

            let diff = now - today;
            return Math.round(diff / 1000)
        }
        const setTime = (left, hand) => {
            document.querySelector('.clock__' + hand).style.animationDelay = "" + left * -1 + "s";
        }
        const curSecond = getSecond();

        setSecond((curSecond / 60) % 1);
        setMinute((curSecond / 3600) % 1);
        setHour((curSecond / (3600 * 3600)) % 1);

        setTime(60 * second, 'second');
        setTime(3600 * minute, 'minute');
        setTime(3600 * 3600 * hour, 'hour');
    }, [title,second, minute, hour])

    useInterval(() => {
        setDate(new Date().toLocaleString())
    }, delay)
    return (
        <Container>
            <Row >
                <Col>
                    <div className="home_container">
                        <div className="clock">
                            <div className="clock__second"></div>
                            <div className="clock__minute"></div>
                            <div className="clock__hour"></div>
                            <div className="clock__axis"></div>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                            <section className="clock__indicator"></section>
                        </div>
                        <h2>{date}</h2>
                    </div>
                </Col>
            </Row>

            <Container >
                <Row >
                    <Col>
                        <h3>Remind</h3>
                    </Col>
                </Row>
                <Row style={{ maxHeight: '175px', overflowY:'scroll' }}>
                    <Col>
                        <ListGroup >
                            <ListGroupItem className="bg-dark">
                                <Row>
                                    <Col md="1" sm="4">
                                        <FontAwesomeIcon icon={faBell} />
                                    </Col>
                                    <Col>
                                        Todo 1
                                </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem className="bg-dark" style={styleList}>
                                <Row>
                                    <Col md="1" sm="4">
                                        <FontAwesomeIcon icon={faBell} />
                                    </Col>
                                    <Col>
                                        Todo 2
                        </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem className="bg-dark" style={styleList}>
                                <Row>
                                    <Col md="1" sm="4">
                                        <FontAwesomeIcon icon={faBell} />
                                    </Col>
                                    <Col>
                                        Todo 3
                                </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem className="bg-dark" style={styleList}>
                                <Row>
                                    <Col md="1" sm="4">
                                        <FontAwesomeIcon icon={faBell} />
                                    </Col>
                                    <Col>
                                        Todo 4
                                </Col>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}