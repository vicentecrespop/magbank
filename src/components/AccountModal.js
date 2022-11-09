import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const AccountModal = ({ auth, show, handleClose }) => {
    const navigate = useNavigate()
    const [name, setName] = useState('')

    const handleSubmit = () => {
      auth.login(name, '12345', navigate('/dashboard'))
      handleClose()
    }

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Abra sua conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Seu nome</Form.Label>
                    <Form.Control type="text" placeholder="seu nome" value={name} onChange={(e) => setName(e.currentTarget.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Seu e-mail</Form.Label>
                    <Form.Control type="email" placeholder="seu e-mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label>Sua cidade</Form.Label>
                    <Form.Control as='select'>
                        <option value="1">Florianópolis - SC</option>
                        <option value="2">Curitiba - PR</option>
                        <option value="3">Sâo Paulo - SP</option>
                        <option value="4">Rio de Janeiro - RJ</option>
                    </Form.Control>
                </Form.Group>
                <Form.Check 
                    type="checkbox"
                    id="custom-checkbox"
                    label="Eu li e concordo com os termos de uso."
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
)}

export default AccountModal