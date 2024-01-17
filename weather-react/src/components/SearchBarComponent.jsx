import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

export default function SearchBarComponent({ location, setLocation, handleSearch }) {
  return (
    <>
      <Row className="my-3">
        <Col sm={8}>
          <Form.Control
            type="text"
            placeholder="Inserisci la località..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Col>
        <Col sm={2}>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Paese
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>Italia</Dropdown.Item>
                <Dropdown.Item>Regno Unito</Dropdown.Item>
                <Dropdown.Item>Giappone</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </Col>
        <Col sm={2}>
          <Button variant="success" onClick={handleSearch}>
            Cerca
          </Button>
        </Col>
      </Row>
    </>
  );
}
