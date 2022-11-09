import React from "react";
import { Col, Button, Table, Tabs, Tab } from "react-bootstrap";

const AccountBalance = ({ latest, future }) => (
    <>
            <Col xs={12} lg={3} className="mt-lg-5 pt-lg-4">
                <h3 className="my-5">Conta Corrente</h3>
                <h6><small><strong>Saldo em conta corrente</strong></small></h6>
                <h4 className="text-success mb-4">
                    <small>R$</small>3.500<smal>,00</smal>
                </h4>
                <h6><small><strong>Cheque especial</strong></small></h6>
                <p className="mb-0">Limite disponível</p>
                <p className="mb-4">R$ 5.000,00</p>
                <Button variant="secondary">Ver extrato</Button>
            </Col>
            <Col xs={12} lg={5} className="mt-lg-5 pt-lg-5">
                <Tabs defaultActiveKey="latest" className="mt-5 pt-lg-5">
                    <Tab title="Últimos Lançamentos" eventKey="latest">
                        <Table  striped borderless>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {latest.map(({ date, description, value }) => (
                                    <tr>
                                        <td>{date}</td>
                                        <td>{description}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab title="Lançamentos Futuros" eventKey="future">
                    <Table  striped borderless>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {future.map(({ date, description, value }) => (
                                    <tr>
                                        <td>{date}</td>
                                        <td>{description}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </Col>
    </>
);

export default AccountBalance;
