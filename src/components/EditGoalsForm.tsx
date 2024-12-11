'use client';

import { Container, Col, Row, Table, Button, FormControl } from 'react-bootstrap';
// import { yupResolver } from '@hookform/resolvers/yup';
import { Goals } from '@prisma/client';
// import { EditGoalSchema, AddGoalSchema } from '@/lib/validationSchemas';
import { editGoal, createGoal } from '@/lib/dbActions';
import { useState } from 'react';

const EditGoalsForm = ({ existingGoals }: { existingGoals: Goals[] }) => {
  const [goals, setGoals] = useState<Goals[]>(existingGoals || []);

  const addGoal = async (goal: Omit<Goals, 'id'>) => {
    const newId = goals.length > 0 ? Math.max(...goals.map(g => g.id)) + 1 : 1;
    const newGoal = { ...goal, id: newId };
    await createGoal(newGoal);
    window.location.reload();
  };

  const onEdit = (updatedGoal: Goals) => {
    setGoals(goals.map((goal) => (goal.id === updatedGoal.id ? updatedGoal : goal)));
  };

  const enableEdit = async (goal: Goals) => {
    const updatedGoal = { ...goal, isEditing: 1 };
    await editGoal(updatedGoal);
    window.location.reload();
  };

  const saveGoal = async (goal: Goals) => {
    const updatedGoal = { ...goal, isEditing: 0 };
    await editGoal(updatedGoal);
    window.location.reload();
  };

  return (
    <Container id="list" fluid className="py-3">
      <Row>
        <Col>
          <h1 className="text-center">Editing Musical Goals</h1>
          <Container style={{ backgroundColor: '#ECDFCC', borderRadius: '10px' }} className="p-3">
            <Row>
              <Col>
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
                              defaultValue={goal.goal}
                              onChange={(e) => onEdit({ ...goal, goal: e.target.value })}
                            />
                          ) : (
                            goal.goal
                          )}
                        </td>
                        <td>
                          {goal.isEditing ? (
                            <Button variant="success" className="me-2" onClick={() => saveGoal(goal)}>
                              Save
                            </Button>
                          ) : (
                            <Button variant="primary" className="me-2" onClick={() => enableEdit(goal)}>Edit</Button>
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
                  onClick={() => addGoal({ goal: '', isEditing: 1 })}
                  className="mt-2"
                >
                  Add Goal
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default EditGoalsForm;
