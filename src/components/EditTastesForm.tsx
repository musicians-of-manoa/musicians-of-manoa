'use client';

import { Container, Col, Row, Table, Button, FormControl } from 'react-bootstrap';
// import { yupResolver } from '@hookform/resolvers/yup';
import { Tastes } from '@prisma/client';
// import { editExperienceSchema, AddExperienceschema } from '@/lib/validationSchemas';
import { editTaste, createTaste } from '@/lib/dbActions';
import { useState } from 'react';

const EditTastesForm = ({ existingTastes }: { existingTastes: Tastes[] }) => {
  const [tastes, setTastes] = useState<Tastes[]>(existingTastes || []);

  const onEdit = (updatedTastes: Tastes) => {
    setTastes(
      tastes.map((taste) => (taste.id === updatedTastes.id ? updatedTastes : taste)),
    );
  };

  const addTaste = async (taste: Omit<Tastes, 'id'>) => {
    const newId = tastes.length > 0 ? Math.max(...tastes.map(g => g.id)) + 1 : 1;
    const newTaste = { ...taste, description: '', id: newId, genre: '', isEditing: 1 };
    await createTaste(newTaste);
    window.location.reload();
  };

  const enableEdit = async (taste: Tastes) => {
    const updatedTaste = { ...taste, isEditing: 1 };
    await editTaste(updatedTaste);
    window.location.reload();
  };

  const saveTaste = async (taste: Tastes) => {
    const updatedTaste = { ...taste, isEditing: 0 };
    await editTaste(updatedTaste);
    window.location.reload();
  };

  return (
    <Container id="list" fluid className="py-3">
      <Row>
        <Col>
          <h1 className="text-center">Editing Musical Tastes</h1>
          <Container style={{ backgroundColor: '#ECDFCC', borderRadius: '10px' }} className="p-3">
            <Row>
              <Col>
                <Table striped bordered hover className="mt-3" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                  <thead>
                    <tr>
                      <th style={{ width: '70%' }}>Musical Taste</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tastes
                      .sort((a, b) => a.id - b.id)
                      .map((taste) => (
                        <tr key={taste.id}>
                          <td style={{ width: '70%' }}>
                            {taste.isEditing ? (
                              <FormControl
                                type="text"
                                defaultValue={taste.genre}
                                onChange={(e) => onEdit({ ...taste, genre: e.target.value })}
                              />
                            ) : (
                              taste.genre
                            )}
                          </td>
                          <td>
                            {taste.isEditing ? (
                              <Button variant="success" className="me-2" onClick={() => saveTaste(taste)}>
                                Save
                              </Button>
                            ) : (
                              <Button
                                variant="primary"
                                className="me-2"
                                onClick={() => enableEdit(taste)}
                              >
                                Edit
                              </Button>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="primary"
                  onClick={() => addTaste({ genre: '', isEditing: 1 })}
                  className="mt-2"
                >
                  Add genre
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default EditTastesForm;
