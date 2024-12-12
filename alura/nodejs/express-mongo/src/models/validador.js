import mongoose from 'mongoose';

mongoose.Schema.Types.String.set('validate', {
  validator: (val) => !!val.trim(),
  message: ({ path }) => `O campo ${path} está em branco.`,
});
