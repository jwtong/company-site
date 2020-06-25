const validations = {
  required: {
    validate: (value: any) => !value || value === '',
    errorMessage: 'required',
  },
  email: {
    validate: (value: any) =>
      value && !/^[A-Z0-9'._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value),
    errorMessage: 'invalid / incomplete email',
  },
  phone: {
    validate: (value: any) => {
      return value && !/^(0|[1-9][0-9]{9})$/i.test(value.replace(/-/g, '', -1))
    },
    errorMessage: 'invalid / incomplete phone number',
  },
}

export default validations
