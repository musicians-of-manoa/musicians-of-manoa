'use client';

import { Col, Container, Row, Table, Button, FormControl } from 'react-bootstrap';
import { useState } from 'react';

const AdminPage = () => {
  const [goals, setGoals] = useState([
    { id: 1, text: 'Goal 1', isEditing: false },
    { id: 2, text: 'Goal 2', isEditing: false },
    { id: 3, text: 'Goal 3', isEditing: false },
    { id: 4, text: 'Goal 4', isEditing: false },
  ]);

  const addGoal = () => {
    const newGoal = { id: goals.length + 1, text: `Goal ${goals.length + 1}`, isEditing: false };
    setGoals([...goals, newGoal]);
  };

  const removeGoal = (id: number) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const editGoal = (id: number) => {
    setGoals(goals.map(goal => (goal.id === id ? { ...goal, isEditing: true } : goal)));
  };

  const saveGoal = (id: number, newText: string) => {
    setGoals(goals.map(goal => (goal.id === id ? { ...goal, text: newText, isEditing: false } : goal)));
  };

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1 className="text-center">Editing Musical Goals</h1>
            <Container style={{ backgroundColor: '#ECDFCC', borderRadius: '10px' }} className="p-3">
              <Table striped bordered hover className="mt-3" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <thead>
                  <tr>
                    <th style={{ width: '70%' }}>Musical Goal</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {goals.map((goal) => (
                    <tr key={goal.id}>
                      <td style={{ width: '70%' }}>
                        {goal.isEditing ? (
                          <FormControl
                            type="text"
                            defaultValue={goal.text}
                            onBlur={(e) => saveGoal(goal.id, e.target.value)}
                          />
                        ) : (
                          goal.text
                        )}
                      </td>
                      <td>
                        {goal.isEditing ? (
                          <Button variant="success" className="me-2" onClick={() => saveGoal(goal.id, goal.text)}>
                            Save
                          </Button>
                        ) : (
                          <Button variant="primary" className="me-2" onClick={() => editGoal(goal.id)}>Edit</Button>
                        )}
                        <Button variant="danger" onClick={() => removeGoal(goal.id)}>Remove</Button>
                      </td>
                    </tr>
                  ))}
                  <Button variant="primary" onClick={addGoal} className="mt-2">Add Goal</Button>
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
