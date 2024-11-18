'use client';

import { Form, Button, Col, Container, Card, Row } from 'react-bootstrap';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Multiselect from 'multiselect-react-dropdown';
// import { upsertStudent } from '@/lib/dbActions';
import swal from 'sweetalert';
import { UserCreationSchema } from '@/lib/validationSchemas';

const UserCreationComponent = () => {
  const formPadding = 'py-1';
  interface FormData {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    musicalGoals: string[];
    experienceLevel: string;
    instruments: { instrument: string; experienceLevel: string }[];
  }

  const { register, handleSubmit, control, reset } = useForm<FormData>({
    resolver: yupResolver(UserCreationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      musicalGoals: [],
      instruments: [{ instrument: '', experienceLevel: '' }], // Default instrument field
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'instruments',
  });

  const onSubmit = async (data: {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    musicalGoals: string[];
    instruments: { instrument: string; experienceLevel: string }[];
  }) => {
    console.log(data);
    // const email = await upsertStudent(data as UserCreationForm);
    // setEmailState(email);
    swal('Success!', 'User created successfully!', 'success');
    reset();
  };

  return (
    <Container>
      <Card>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Card.Body>
            <Card.Title className="text-center">User Creation Form</Card.Title>
            <Row className={formPadding}>
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>
                    First Name
                    <Form.Text style={{ color: 'red' }}>*</Form.Text>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    {...register('firstName')}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>
                    Last Name
                    <Form.Text style={{ color: 'red' }}>*</Form.Text>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    {...register('lastName')}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="username">
                  <Form.Label>
                    Username
                    <Form.Text style={{ color: 'red' }}>*</Form.Text>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    {...register('username')}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="password">
                  <Form.Label>
                    Password
                    <Form.Text style={{ color: 'red' }}>*</Form.Text>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register('password')}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="musicalGoals">
                  <Form.Label>Musical Goals</Form.Label>
                  <Controller
                    name="musicalGoals"
                    control={control}
                    render={({ field }) => (
                      <Multiselect
                        options={[
                          { name: 'example 1', id: 1 },
                          { name: 'example 2', id: 2 },
                          { name: 'example 3', id: 3 },
                          { name: 'example 4', id: 4 },
                          { name: 'example 5', id: 5 },
                        ]}
                        displayValue="name"
                        onSelect={(selectedList) => {
                          field.onChange(selectedList);
                        }}
                        onRemove={(selectedList) => {
                          field.onChange(selectedList);
                        }}
                        placeholder="Select Musical Goals"
                        {...field}
                      />
                    )}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                {fields.map((field, index) => (
                  <Row key={field.id} className="mb-3 align-items-center">
                    <Col>
                      <Form.Group controlId="intrument">
                        <Form.Label>Instrument</Form.Label>
                        <Controller
                          name={`instruments.${index}.instrument`}
                          control={control}
                          render={({ field: instrumentField }) => (
                            <Multiselect
                              options={[
                                { name: 'piano', id: 1 },
                                { name: 'drum', id: 2 },
                                { name: 'guitar', id: 3 },
                                { name: 'example 4', id: 4 },
                                { name: 'example 5', id: 5 },
                              ]}
                              displayValue="name"
                              onSelect={(selectedList) => {
                                instrumentField.onChange(selectedList);
                              }}
                              onRemove={(selectedList) => {
                                instrumentField.onChange(selectedList);
                              }}
                              placeholder="Select Instrument"
                              {...instrumentField}
                            />
                          )}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId={`experienceLevel-${index}`}>
                        <Form.Label>Experience Level</Form.Label>
                        <Form.Select
                          {...register(`instruments.${index}.experienceLevel`)}
                        >
                          <option value="">Select Level</option>
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs="auto">
                      <Button
                        variant="danger"
                        onClick={() => remove(index)}
                        className="mt-4"
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                ))}
                <Button
                  variant="success"
                  onClick={() =>
                    append({ instrument: '', experienceLevel: '' })
                  }
                >
                  + Add Instrument
                </Button>
              </Col>
            </Row>
            <Row>
              <Button
                variant="primary"
                size="lg"
                className="d-grid gap-2"
                type="button"
              >
                Select Musical Tastes
              </Button>
            </Row>
          </Card.Body>
          <Card.Footer className="text-center">
            <Button type="button" variant="secondary" onClick={() => reset()}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </Container>
  );
};

export default UserCreationComponent;
