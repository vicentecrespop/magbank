import React from 'react';
import { Col, Table } from 'react-bootstrap';

const AccountHistory = ({ history }) => (
    <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
        <h3 className='mt-4'>Extrato de conta Corrente</h3>
        <Table striped className='mt-lg-3 mt-4'>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor (R$)</th>
                    <th>Saldo (R$)</th>
                </tr>
            </thead>
            <tbody>
                {history.map( entry => (
                    <tr>
                        <td>{entry.date}</td>
                        <td>{entry.description}</td>
                        <td className={entry.action === '-' ? 'text-danger' : ''}>{entry.action}{entry.value}</td>
                        <td>{entry.total}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Col>
);

export default AccountHistory;