'use client';

import { Container, Col, Row, Table, Button, FormControl } from 'react-bootstrap';
// import { yupResolver } from '@hookform/resolvers/yup';
import { Experiences } from '@prisma/client';
// import { editExperienceSchema, AddExperienceschema } from '@/lib/validationSchemas';
import { editExperience, createExperience } from '@/lib/dbActions';
import { useState } from 'react';

const EditExperiencesForm = ({ existingExperiences }: { existingExperiences: Experiences[] }) => {
  const [experiences, setExperiences] = useState<Experiences[]>(existingExperiences || []);

  const onEdit = (updatedExperience: Experiences) => {
    setExperiences(
      experiences.map((experience) => (experience.id === updatedExperience.id ? updatedExperience : experience)),
    );
  };

  const addExperience = async (experience: Omit<Experiences, 'id'>) => {
    const newId = experiences.length > 0 ? Math.max(...experiences.map(g => g.id)) + 1 : 1;
    const newExperience = { ...experience, description: '', id: newId, level: '', isEditing: 1 };
    await createExperience(newExperience);
    window.location.reload();
  };

  const enableEdit = async (experience: Experiences) => {
    const updatedExperience = { ...experience, isEditing: 1 };
    await editExperience(updatedExperience);
    window.location.reload();
  };

  const saveExperience = async (experience: Experiences) => {
    const updatedExperience = { ...experience, isEditing: 0 };
    await editExperience(updatedExperience);
    window.location.reload();
  };

  return (
    <Container id="list" fluid className="py-3">
      <Row>
        <Col>
          <h1 className="text-center">Editing Musical Experiences</h1>
          <Container style={{ backgroundColor: '#ECDFCC', borderRadius: '10px' }} className="p-3">
            <Row>
              <Col>
                <Table striped bordered hover className="mt-3" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                  <thead>
                    <tr>
                      <th style={{ width: '30%' }}>Experience Level</th>
                      <th style={{ width: '40%' }}>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {experiences
                      .sort((a, b) => a.id - b.id)
                      .map((experience) => (
                        <tr key={experience.id}>
                          <td style={{ width: '30%' }}>
                            {experience.isEditing ? (
                              <FormControl
                                type="text"
                                defaultValue={experience.level}
                                onChange={(e) => onEdit({ ...experience, level: e.target.value })}
                              />
                            ) : (
                              experience.level
                            )}
                          </td>
                          <td style={{ width: '30%' }}>
                            {experience.isEditing ? (
                              <FormControl
                                type="text"
                                defaultValue={experience.description}
                                onChange={(e) => onEdit({ ...experience, description: e.target.value })}
                              />
                            ) : (
                              experience.description
                            )}
                          </td>
                          <td>
                            {experience.isEditing ? (
                              <Button variant="success" className="me-2" onClick={() => saveExperience(experience)}>
                                Save
                              </Button>
                            ) : (
                              <Button
                                variant="primary"
                                className="me-2"
                                onClick={() => enableEdit(experience)}
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
                  onClick={() => addExperience({ level: '', description: '', isEditing: 1 })}
                  className="mt-2"
                >
                  Add Level
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default EditExperiencesForm;
