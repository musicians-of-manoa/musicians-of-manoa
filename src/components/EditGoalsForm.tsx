'use client';

import { Container, Col, Row, Table, Button, FormControl } from 'react-bootstrap';
// import { yupResolver } from '@hookform/resolvers/yup';
import { Goals } from '@prisma/client';
// import { EditGoalSchema, AddGoalSchema } from '@/lib/validationSchemas';
import { editGoal, createGoal, getGoals } from '@/lib/dbActions';
import { useEffect, useState } from 'react';

const EditGoalsForm = () => {
  const [goals, setGoals] = useState<Goals[]>([]);

  useEffect(() => {
    const fetchGoals = async () => {
      const existingGoals = await getGoals();
      setGoals(existingGoals);
    };

    fetchGoals();
  }, []);

  const addGoal = async (goal: Omit<Goals, 'id'>) => {
    const newId = goals.length > 0 ? Math.max(...goals.map(g => g.id)) + 1 : 1;
    const newGoal = { ...goal, id: newId };
    await createGoal(newGoal);
  };

  const enableEdit = async (goal: Goals) => {
    const updatedGoal = { ...goal, isEditing: 1 };
    await editGoal(updatedGoal);
  };

  const saveGoal = async (goal: Goals) => {
    await editGoal(goal);
  };

  return (
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
                          defaultValue={goal.goal}
                          onBlur={(e) => saveGoal({ ...goal, goal: e.target.value })}
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
                <Button
                  variant="primary"
                  onClick={() => addGoal({ goal: '', isEditing: 1 })}
                  className="mt-2"
                >
                  Add Goal
                </Button>
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default EditGoalsForm;
