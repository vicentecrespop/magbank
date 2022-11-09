import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faCircle
} from '@fortawesome/free-solid-svg-icons';

import AccountBalance from "../components/AccountBalance";
import AccountPayments from "../components/AccountPayments";
import AccountHistory from "../components/AccountHistory";

import './Dashboard.scss';

const Dashboard = ({ className = false, name, account }) => {
    const [activeLink, setActiveLink] = useState(0);

    const links = [
        {text: 'Minha Conta', path: '/dashboard', exact: true},
        {text: 'Pagamentos', path: '/dashboard/payments'},
        {text: 'Extrato', path: '/dashboard/history'}
    ]

    const latest = [
        {date: '22/07', description: 'SAQUE 24h 012345', value: '300,00'},
        {date: '21/07', description: 'SUPERMERCADO 24h 012345', value: '275,00'},
        {date: '20/07', description: 'NETFLIX 24h 012345', value: '30,00'},
        {date: '15/07', description: 'FARMÁCIA 24h 012345', value: '350,00'}
    ]

    const future = [
        {date: '22/08', description: 'SALÁRIO 24h 012345', value: '3000,00'},
        {date: '21/08', description: 'IMAGINE 24h 012345', value: '275,00'},
        {date: '20/08', description: 'NETFLIX 24h 012345', value: '30,00'},
        {date: '15/08', description: 'FARMÁCIA 24h 012345', value: '350,00'}
    ]

    const history = [
        {date: '17/07', description: 'SAQUE 24H 012345', action: '-', value: '200,00', total: ''},
        {date: '17/07', description: 'SALDO DO DIA', action: '', value: '', total: '2.780,00'},
        {date: '19/07', description: 'ESTACIONAMENTO 123234', action: '-', value: '12,00', total: ''},
        {date: '19/07', description: 'COMPRA INTERNET 123432', action: '-', value: '450,00', total: ''},
        {date: '19/07', description: 'SALDO DO DIA', action: '', value: '', total: '2.318,00'},
        {date: '21/07', description: 'SUPERMERCADO 2312332', action: '-', value: '275,90', total: ''},
        {date: '21/07', description: 'ESTACIONAMENTO 123234', action: '-', value: '12,00', total: ''},
        {date: '21/07', description: 'SHOPPING 123432', action: '-', value: '180,00', total: ''},
        {date: '21/07', description: 'SALDO DO DIA', action: '', value: '', total: '1.351,00'},
        {date: '22/07', description: 'SUPERMERCADO 2312332', action: '-', value: '275,90', total: ''},
        {date: '22/07', description: 'DEPÓSITO 123234', action: '', value: '1000,00', total: ''},
        {date: '22/07', description: 'SALDO DO DIA', action: '', value: '', total: '2.576,00'},

    ]

    return (
    <Container className={`dashboard py-5 ${className ? className : ''}`}>
        <Row>
            <Col xs={12} lg={4}>
                <Row className="align-items-center mb-5">
                    <Col xs={3}>
                        <span className="dashboard__user-avatar">
                            <FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9fa" />
                            <FontAwesomeIcon className="dashboard__user-icon" icon={faUser} size="3x" color="#7c7d7d"/>
                        </span>
                    </Col>
                    <Col xs={9}>
                        <h4>{name}</h4>
                        <p className="text-muted">{account}</p>
                    </Col>
                </Row>
                {links.map(({text, path, exact}, key) => (
                    <Link to={path} exact={exact ? exact : false} key={key}>
                        <Button
                            className={`dashboard__button text-start w-100 ${key === activeLink ? 'dashboard__button--active' : ''}`}
                            variant="link"
                            size="lg"
                            onClick={() => setActiveLink(key)}
                        >
                            {text}
                        </Button>
                    </Link>
                ))}
            </Col>
            <Routes>
                <Route path="payments" element={<AccountPayments />} />
                <Route path="history" element={<AccountHistory history={history} />}/>
                <Route path="/" element={<AccountBalance latest={latest} future={future} />}/>
            </Routes>
            
        </Row>
    </Container>
)};

export default Dashboard;