import * as Yup from 'yup';

export const AddStuffSchema = Yup.object({
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const JamInfoSchema = Yup.object({
  name: Yup.string().required(),
  organizer: Yup.string().required(),
  genre: Yup.string().required(),
  location: Yup.string().required(),
  date: Yup.date().required(),
  instruments: Yup.string().required(),
  experience: Yup.string().oneOf(['novice', 'beginner', 'intermediate', 'professional']).required(),
  description: Yup.string().required(),
});

export const EditJamInfoSchema = Yup.object({
  name: Yup.string().required(),
  organizer: Yup.string().required(),
  genre: Yup.string().required(),
  location: Yup.string().required(),
  date: Yup.date().required(),
  instruments: Yup.string().required(),
  experience: Yup.string().oneOf(['novice', 'beginner', 'intermediate', 'professional']).required(),
  description: Yup.string().required(),
});

export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});
