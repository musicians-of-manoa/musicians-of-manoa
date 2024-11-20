'use client';

import { Col, Container, Row, Table, Button, FormControl } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const AdminPage = () => {
  const [tastes, setTastes] = useState([
    { id: 1, text: 'Jazz', isEditing: false },
    { id: 2, text: 'R&B', isEditing: false },
    { id: 3, text: 'Classical', isEditing: false },
    { id: 4, text: 'Pop', isEditing: false },
  ]);

  useEffect(() => {
    const fetchTastes = async () => {
      const response = await fetch('/api/tastes');
      const data = await response.json();
      setTastes(data);
    };

    fetchTastes();
  }, []);

  const addTaste = () => {
    const newTaste = {
      id: tastes.length + 1,
      text: `taste ${tastes.length + 1}`,
      isEditing: false,
    };
    setTastes([...tastes, newTaste]);
  };

  const removeTaste = (id: number) => {
    setTastes(tastes.filter(taste => taste.id !== id));
  };

  const editTaste = (id: number) => {
    setTastes(
      tastes.map(taste => (taste.id === id ? { ...taste, isEditing: true } : taste)),
    );
  };

  const saveTaste = (id: number, newText: string) => {
    setTastes(
      tastes.map(taste => (
        taste.id === id ? { ...taste, text: newText, isEditing: false } : taste
      )),
    );
  };

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1 className="text-center">Editing Musical Tastes</h1>
            <Container style={{ backgroundColor: '#ECDFCC', borderRadius: '10px' }} className="p-3">
              <Table striped bordered hover className="mt-3" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <thead>
                  <tr>
                    <th style={{ width: '70%' }}>Musical Taste</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tastes.map((taste) => (
                    <tr key={taste.id}>
                      <td style={{ width: '70%' }}>
                        {taste.isEditing ? (
                          <FormControl
                            type="text"
                            defaultValue={taste.text}
                            onBlur={(e) => saveTaste(taste.id, e.target.value)}
                          />
                        ) : (
                          taste.text
                        )}
                      </td>
                      <td>
                        {taste.isEditing ? (
                          <Button
                            variant="success"
                            className="me-2"
                            onClick={() => saveTaste(taste.id, taste.text)}
                          >
                            Save
                          </Button>
                        ) : (
                          <Button variant="primary" className="me-2" onClick={() => editTaste(taste.id)}>
                            Edit
                          </Button>
                        )}
                        <Button variant="danger" onClick={() => removeTaste(taste.id)}>Remove</Button>
                      </td>
                    </tr>
                  ))}
                  <Button variant="primary" onClick={addTaste} className="mt-2">Add Taste</Button>
                </tbody>
              </Table>
            </Container>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AdminPage;
