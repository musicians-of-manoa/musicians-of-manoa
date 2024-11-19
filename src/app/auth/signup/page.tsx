'use client';

import { signIn } from 'next-auth/react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Card, Col, Container, Button, Form, Row } from 'react-bootstrap';
import { createUser } from '@/lib/dbActions';

type SignUpForm = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  musicalGoals?: string;
  instruments: { name: string }[];
  experienceLevel: string[];
  // selectMusicalTastes: string[];
  // acceptTerms: boolean;
};

/** The sign up page. */
const SignUp = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    userName: Yup.string()
      .required('Username is required')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), ''], 'Confirm Password does not match'),
    musicalGoals: Yup.string(),
    instruments: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().optional(),
      }),
    ),
    experienceLevel: Yup.array().of(Yup.string().optional()),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      instruments: [],
      experienceLevel: [],
    },
  });

  const { fields, append, remove } = useFieldArray<SignUpForm, 'instruments'>({
    control,
    name: 'instruments',
  });

  const onSubmit = async (data: SignUpForm) => {
    // console.log(JSON.stringify(data, null, 2));
    await createUser(data);
    // After creating, signIn with redirect to the add page
    await signIn('credentials', { callbackUrl: '/add', ...data });
  };

  return (
    <main>
      <Container>
        <Row className="justify-content-center">
          <Col xs={5}>
            <h1 className="text-center">Sign Up</h1>
            <Card>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col>
                      <Form.Group className="form-group py-2">
                        <input
                          type="text"
                          placeholder="First Name"
                          {...register('firstName')}
                          className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        />
                        <div className="invalid-feedback">
                          {errors.firstName?.message}
                        </div>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="form-group py-2">
                        <input
                          type="text"
                          placeholder="Last Name"
                          {...register('lastName')}
                          className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                        />
                        <div className="invalid-feedback">
                          {errors.lastName?.message}
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="form-group py-2">
                    <input
                      type="text"
                      placeholder="Username (max 20 characters)"
                      {...register('userName')}
                      className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">
                      {errors.userName?.message}
                    </div>
                  </Form.Group>
                  <Form.Group className="form-group py-2">
                    <input
                      type="text"
                      placeholder="Email Address"
                      {...register('email')}
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">
                      {errors.email?.message}
                    </div>
                  </Form.Group>
                  <Form.Group className="form-group py-2">
                    <input
                      type="password"
                      placeholder="Password (min 6 characters, max 40 characters)"
                      {...register('password')}
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">
                      {errors.password?.message}
                    </div>
                  </Form.Group>
                  <Form.Group className="form-group py-2">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      {...register('confirmPassword')}
                      className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">
                      {errors.confirmPassword?.message}
                    </div>
                  </Form.Group>
                  <Form.Group className="form-group py-2">
                    <textarea
                      placeholder="What are your musical goals?"
                      {...register('musicalGoals')}
                      className="form-control"
                      rows={3}
                    />
                  </Form.Group>
                  <Form.Group className="form-group py-2">
                    <Row>
                      <Col>
                        {fields.map((field, index) => (
                          <Row key={field.id} className="mb-3">
                            <Col>
                              <Form.Select
                                {...register(`instruments.${index}.name`)}
                              >
                                <option value="">Select Instrument</option>
                                <option value="guitar">Guitar</option>
                                <option value="bass">Bass</option>
                                <option value="drums">Drums</option>
                                <option value="keyboard">Keyboard</option>
                                <option value="vocals">Vocals</option>
                                <option value="producer">Producer</option>
                                <option value="other">Other</option>
                              </Form.Select>
                            </Col>
                            <Col>
                              <Form.Select
                                {...register(`experienceLevel.${index}`)}
                              >
                                <option value="">Experience Level</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">
                                  Intermediate
                                </option>
                                <option value="advanced">Advanced</option>
                              </Form.Select>
                            </Col>
                            <Col xs="auto">
                              <Button
                                variant="danger"
                                onClick={() => remove(index)}
                              >
                                Remove
                              </Button>
                            </Col>
                          </Row>
                        ))}
                        <Button
                          type="button"
                          onClick={() => append({ name: '' })}
                          className="btn btn-primary"
                        >
                          Add Instrument
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group className="form-group py-2">
                    <Button
                      variant="primary"
                      size="lg"
                      className="d-grid gap-2"
                      href=""
                    >
                      Select Musical Tastes
                    </Button>
                  </Form.Group>
                  <Form.Group className="form-group py-2">
                    <Row>
                      <Col>
                        <Button type="submit" className="btn btn-primary">
                          Register
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          type="button"
                          onClick={() => reset()}
                          className="btn btn-warning float-right mt-2"
                        >
                          Reset
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Card.Body>
              <Card.Footer>
                Already have an account?
                <a href="/auth/signin">Sign in</a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SignUp;
