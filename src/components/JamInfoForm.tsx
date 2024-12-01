'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { addJamInformation } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AddJamInfoSchema } from '@/lib/validationSchemas';
import { Experience } from '@prisma/client';

const onSubmit = async (data: {
  owner: string;
  jamName: string;
  image: string;
  organizer: string;
  genre: string;
  location: string;
  date: Date;
  instruments: string;
  experience: Experience;
  description: string;
}) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await addJamInformation(data);
  swal('Success', 'Your Jam has been added', 'success', {
    timer: 2000,
  });
};

const JamInfoForm: React.FC = () => {
  // const formPadding = 'py-2';
  const { data: session, status } = useSession();
  // console.log('JamInfoForm', status, session);
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddJamInfoSchema),
  });
  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center">
            <h2>Jam Information</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Jam Name</Form.Label>
                      <input
                        type="text"
                        {...register('jamName')}
                        className={`form-control ${errors.jamName ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.jamName?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Image</Form.Label>
                      <input
                        type="text"
                        {...register('image')}
                        className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.image?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Jam Organizer</Form.Label>
                      <input
                        type="text"
                        {...register('organizer')}
                        className={`form-control ${errors.organizer ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.organizer?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Genre</Form.Label>
                      <input
                        type="text"
                        {...register('genre')}
                        className={`form-control ${errors.genre ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.genre?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Location</Form.Label>
                      <input
                        type="text"
                        {...register('location')}
                        className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.location?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Date & Time</Form.Label>
                      <input
                        type="datetime-local"
                        {...register('date')}
                        className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.date?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Instrument(s)</Form.Label>
                      <input
                        type="text"
                        {...register('instruments')}
                        className={`form-control ${errors.instruments ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.instruments?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Experience Level</Form.Label>
                      <Form.Select
                        {...register('experience')}
                        className={`form-control ${errors.experience ? 'is-invalid' : ''}`}
                      >
                        <option value="Novice">Novice</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Professional">Professional</option>
                      </Form.Select>
                      <div className="invalid-feedback">{errors.experience?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Form.Group>
                    <Form.Label>
                      Description
                    </Form.Label>
                    <textarea
                      placeholder="Please enter a brief description about this event"
                      {...register('description')}
                      className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.description?.message}</div>
                  </Form.Group>
                  <input type="hidden" {...register('owner')} value={currentUser} />
                </Row>
                <Row className="pt-3">
                  <Col>
                    <Button type="submit" variant="primary">
                      Submit
                    </Button>
                  </Col>
                  <Col>
                    <Button type="button" onClick={() => reset()} variant="warning" className="float-right">
                      Reset
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default JamInfoForm;
