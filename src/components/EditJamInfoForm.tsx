'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { JamInformation } from '@prisma/client';
import { EditJamInfoSchema } from '@/lib/validationSchemas';
import { editJamInformation } from '@/lib/dbActions';

const onSubmit = async (data: JamInformation) => {
  await editJamInformation(data);
  swal('Success', 'Your Jam has been updated', 'success', {
    timer: 2000,
  });
};

const EditJamInfoForm = ({ jamInfo }: { jamInfo: JamInformation }) => {
  const formPadding = 'py-2';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JamInformation>({
    resolver: yupResolver(EditJamInfoSchema),
  });
  // console.log(stuff);

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center py-3">
            <h2>Edit Jam Information</h2>
          </Col>
          <Card style={{ backgroundColor: '#ECDFCC' }}>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register('id')} value={jamInfo.id} />
                <Row className={formPadding}>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        Jam Name
                        <Form.Text style={{ color: 'red' }}> *</Form.Text>
                      </Form.Label>
                      <input
                        type="text"
                        defaultValue={jamInfo.jamName}
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
                        defaultValue={jamInfo.image}
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
                        defaultValue={jamInfo.organizer}
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
                        defaultValue={jamInfo.genre}
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
                        defaultValue={jamInfo.location}
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
                        defaultValue={jamInfo.date ? jamInfo.date.toISOString().slice(0, 16) : undefined}
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
                        defaultValue={jamInfo.instruments}
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
                        defaultValue={jamInfo.experience}
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
                      {...register('description')}
                      defaultValue={jamInfo.description}
                      className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.description?.message}</div>
                  </Form.Group>
                  <input type="hidden" {...register('owner')} value={jamInfo.owner} />
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

export default EditJamInfoForm;
