import React, { useState } from "react";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Home() {
  const [inputCepValue, setInputCepValue] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="home">
      <Button variant="primary" onClick={handleShow}>
        Buscar Cep
      </Button>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ache seu cep</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Digite o cep</Form.Label>
              <InputMask
                placeholder="Digite aqui"
                mask="99999-999"
                onChange={(event) => setInputCepValue(event.target.value)}
                value={inputCepValue}
                autoComplete="off"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Link to={`/details/${inputCepValue.replace("-", "")}`}>
            <Button variant="secondary">Pesquisar</Button>
          </Link>
          <Button variant="primary" onClick={handleClose}>
            Sair
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
