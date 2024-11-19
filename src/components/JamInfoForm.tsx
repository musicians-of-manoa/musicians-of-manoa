'use client';

import { useSession } from 'next-auth/react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { addJamInformation } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { JamInfoSchema } from '@/lib/validationSchemas';
import { Experience } from '@prisma/client';

const onSubmit = async (data: {
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
  swal('Success', 'Your item has been added', 'success', {
    timer: 2000,
  });
};

const JamInfoForm: React.FC = () => {
  const { status } = useSession();
  // console.log('AddStuffForm', status, session);
  // const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(JamInfoSchema),
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
        <Col>
          <Col className="text-center">
            <h2>[JAM NAME]</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        Jam Organizer
                        <Form.Text style={{ color: 'red' }}> *</Form.Text>
                      </Form.Label>
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
                      <Form.Label>
                        Genre
                        <Form.Text style={{ color: 'red' }}> *</Form.Text>
                      </Form.Label>
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
                      <Form.Label>
                        Location
                        <Form.Text style={{ color: 'red' }}> *</Form.Text>
                      </Form.Label>
                      <input
                        type="text"
                        {...register('location')}
                        className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.location?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formEnrolled">
                      <Form.Label>
                        Date
                        <Form.Text style={{ color: 'red' }}> *</Form.Text>
                      </Form.Label>
                      <Form.Control
                        type="date"
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
                      <Form.Label>
                        Instrument(s)
                        <Form.Text style={{ color: 'red' }}> *</Form.Text>
                      </Form.Label>
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
                        <option value="novice">Novice</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="Professional">Professional</option>
                      </Form.Select>
                      <div className="invalid-feedback">{errors.experience?.message}</div>
                    </Form.Group>
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
