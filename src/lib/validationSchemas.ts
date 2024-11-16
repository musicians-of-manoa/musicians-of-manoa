import * as Yup from 'yup';

export const AddStuffSchema = Yup.object({
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

// UserCreation interface
export interface UserCreationForm {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  musicalGoals: string[];
  instruments: { instrument: string; experienceLevel: string }[];
}

// UserCreation schema
export const UserCreationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  username: Yup.string().required(),
  password: Yup.string().required(),
  musicalGoals: Yup.array().of(Yup.string().required()).required(),
  instruments: Yup.array()
    .of(Yup.object().shape({ instrument: Yup.string().required(), experienceLevel: Yup.string().required() }))
    .required()
    .required(),
  experienceLevel: Yup.string().required(),
});
