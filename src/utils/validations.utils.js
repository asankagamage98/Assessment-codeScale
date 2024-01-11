const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    location: yup.string().required(),
  });
  
  const validate = async (schema, data) => {
    try {
      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      throw new Error(error.errors.join(", "));
    }
  };