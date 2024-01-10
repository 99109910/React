import * as yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a Valid E-mail')
    .required('Entering your E-mail is mandatory'),
  age: yup
    .number()
    .positive('Enter Positive Number Please')
    .integer('Enter your Age Integer Please')
    .required('Entering your Age is mandatory'),
  password: yup
    .string()
    .min(5, 'Enter at Least 5 Charachters Please')
    .matches(passwordRules, {
      message: 'Please enter at least 1 uppercase letter, 1 lowercase letter and 1 number',
    })
    .required('Entering your Password is mandatory'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match!')
    .required('Entering your Password Again is mandatory'),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be a minimum of 3 characters long')
    .required('Username is Mandatory'),
  university: yup
    .string()
    .oneOf(['Harvard', 'Cambridge', 'Oxford', 'Stanford'], 'Lütfen üniversitenizi seçiniz'),
  isAccepted: yup.boolean().oneOf([true], 'Accept User Terms'),
});
