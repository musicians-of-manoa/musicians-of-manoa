'use client';

import { Col, Container, Row, Table, Button, FormControl } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const AdminPage = () => {
  const [experiences, setExperiences] = useState([
    { id: 1, text: 'Novice', isEditing: false },
    { id: 2, text: 'Beginner', isEditing: false },
    { id: 3, text: 'Intermediate', isEditing: false },
    { id: 4, text: 'Professional', isEditing: false },
  ]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const response = await fetch('/api/experiences');
      const data = await response.json();
      setExperiences(data);
    };

    fetchExperiences();
  }, []);

  const addExperience = () => {
    const newExperience = {
      id: experiences.length + 1,
      text: `experience ${experiences.length + 1}`,
      isEditing: false,
    };
    setExperiences([...experiences, newExperience]);
  };

  const removeExperience = (id: number) => {
    setExperiences(experiences.filter(experience => experience.id !== id));
  };

  const editExperience = (id: number) => {
    setExperiences(
      experiences.map(experience => (experience.id === id ? { ...experience, isEditing: true } : experience)),
    );
  };

  const saveExperience = (id: number, newText: string) => {
    setExperiences(
      experiences.map(experience => (
        experience.id === id ? { ...experience, text: newText, isEditing: false } : experience
      )),
    );
  };

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1 className="text-center">Editing Experience Levels</h1>
            <Container style={{ backgroundColor: '#ECDFCC', borderRadius: '10px' }} className="p-3">
              <Table striped bordered hover className="mt-3" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <thead>
                  <tr>
                    <th style={{ width: '70%' }}>Experience Level</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {experiences.map((experience) => (
                    <tr key={experience.id}>
                      <td style={{ width: '70%' }}>
                        {experience.isEditing ? (
                          <FormControl
                            type="text"
                            defaultValue={experience.text}
                            onBlur={(e) => saveExperience(experience.id, e.target.value)}
                          />
                        ) : (
                          experience.text
                        )}
                      </td>
                      <td>
                        {experience.isEditing ? (
                          <Button
                            variant="success"
                            className="me-2"
                            onClick={() => saveExperience(experience.id, experience.text)}
                          >
                            Save
                          </Button>
                        ) : (
                          <Button variant="primary" className="me-2" onClick={() => editExperience(experience.id)}>
                            Edit
                          </Button>
                        )}
                        <Button variant="danger" onClick={() => removeExperience(experience.id)}>Remove</Button>
                      </td>
                    </tr>
                  ))}
                  <Button variant="primary" onClick={addExperience} className="mt-2">Add Experience</Button>
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
