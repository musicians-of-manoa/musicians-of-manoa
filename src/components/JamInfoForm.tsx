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
  const formPadding = 'py-2';
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
    <Container>
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center" style={{ color: 'white' }}>
            <h1>Jam Information</h1>
          </Col>
          <Card style={{ backgroundColor: '#ECDFCC' }}>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className={formPadding}>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        Jam Name
                        <Form.Text style={{ color: 'red' }}> *</Form.Text>
                      </Form.Label>
                      <input
                        type="text"
                        placeholder="Jam Name"
                        {...register('jamName')}
                        className={`form-control ${errors.jamName ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.jamName?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        Image
                        <Form.Text style={{ color: 'red' }}> *</Form.Text>
                      </Form.Label>
                      <input
                        type="text"
                        placeholder="Jam Image"
                        {...register('image')}
                        className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.image?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className={formPadding}>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        Jam Organizer
                        <Form.Text style={{ color: 'red' }}> *</Form.Text>
                      </Form.Label>
                      <input
                        type="text"
                        placeholder="Jam Organizer"
                        {...register('organizer')}
                        className={`form-control ${errors.organizer ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.organizer?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        Genre
                        <Form.Text style={{ color: 'red' }}> *</Form.Text>
                      </Form.Label>
                      <input
                        type="text"
                        placeholder="Jam Genre"
                        {...register('genre')}
                        className={`form-control ${errors.genre ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.genre?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className={formPadding}>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        Location
                        <Form.Text style={{ color: 'red' }}> *</Form.Text>
                      </Form.Label>
                      <input
                        type="text"
                        placeholder="Jam Location"
                        {...register('location')}
                        className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.location?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        Date & Time
                        <Form.Text style={{ color: 'red' }}> *</Form.Text>
                      </Form.Label>
                      <input
                        type="datetime-local"
                        {...register('date')}
                        className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.date?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className={formPadding}>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        Instrument(s)
                        <Form.Text style={{ color: 'red' }}> *</Form.Text>
                      </Form.Label>
                      <input
                        type="text"
                        placeholder="Jam instrument(s)"
                        {...register('instruments')}
                        className={`form-control ${errors.instruments ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.instruments?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        Experience Level
                        <Form.Text style={{ color: 'red' }}> *</Form.Text>
                      </Form.Label>
                      <Form.Select
                        {...register('experience')}
                        className={`form-control ${errors.experience ? 'is-invalid' : ''}`}
                      >
                        <option value="novice">Novice</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="professional">Professional</option>
                      </Form.Select>
                      <div className="invalid-feedback">{errors.experience?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className={formPadding}>
                  <Form.Group>
                    <Form.Label>
                      Description
                      <Form.Text style={{ color: 'red' }}> *</Form.Text>
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
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default JamInfoForm;
