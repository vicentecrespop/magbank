import React from "react";
import { Col, Button, Tabs, Tab, Form, Row } from "react-bootstrap";

const AccountPayments = () => (
    <> 
            <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
                <h3 className="mt-4">Pagamentos</h3>
                <Tabs defaultActiveKey="boleto" className="mt-5 pt-lg-2">
                    <Tab title="Boleto" eventKey="boleto">
                        <Form>
                            <Form.Group controlId="formBarCode" className="my-5">
                                <Form.Label>Código de Barras</Form.Label>
                                <Form.Control type="number" placeholder="Insira o código de barras" />
                            </Form.Group>
                            <Form.Group controlId="formPaymentType" className="mb-5">
                                <Form.Label>Forma de Pagamento</Form.Label>
                                <div>
                                    <Form.Check type="radio" name="paymentType" id="debit" inline label="Débito em Conta Corrente" />
                                    <Form.Check type="radio" name="paymentType" id="credit" className="ms-4" inline label="Cartão de Crédito" />
                                </div>
                            </Form.Group>
                            <Button variant="success">Continuar</Button>
                        </Form>
                    </Tab>
                    <Tab title="Transferência" eventKey="transfer">
                        <Form>
                            <Row className="mt-4">
                                <Col xs={4}>
                                    <Form.Group>
                                        <Form.Label>Banco</Form.Label>
                                        <Form.Control type="number" placeholder="Selecione" />
                                    </Form.Group>
                                </Col>
                                <Col xs={4}>
                                <Form.Group>
                                    <Form.Label>Agência</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                                </Col>
                                <Col xs={4}>
                                    <Form.Group> 
                                        <Form.Label>Conta Corrente</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col xs={6}>
                                    <Form.Group>
                                        <Form.Label>Valor da transferência</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                </Col>
                                <Col xs={6}>
                                    <Form.Group>
                                        <Form.Label>Identificação nos extratos</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                        <Button variant="success" className="mt-2">Continuar</Button>
                    </Tab>
                </Tabs>
            </Col>
    </>
);

export default AccountPayments;
