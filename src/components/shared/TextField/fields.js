export const field = {
  name: {
    name: 'name',
    type: 'text',
    placeholder: 'First name',
    pattern: '.{3,}',
    title: 'Назва має складатися не менше, ніж з 3 символів',
    required: true,
  },
  email: {
    name: 'email',
    type: 'text',
    placeholder: 'E-mail',
    required: true,
  },
  password: {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    required: true,
    title: 'Пароль має бути не менше 8 символів',
  },
  confirmPassword: {
    name: 'password',
    type: 'password',
    placeholder: 'Confirm password',
    required: true,
    title: 'Пароль має бути не менше 8 символів',
  },
};
