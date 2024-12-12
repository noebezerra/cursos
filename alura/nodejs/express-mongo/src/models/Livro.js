import mongoose from 'mongoose';
import autopopulate from 'mongoose-autopopulate';
// import { autorSchema } from './Autor.js';

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: [true, 'Título é obrigatótio'] },
    editora: {
      type: String,
      require: [true, 'A editora é obrigatório'],
      enum: {
        values: ['Alura', 'Casa do codigo', 'Abril'],
        message: 'A editora {VALUE} não é um valor permitido.',
      },
    },
    preco: { type: Number },
    paginas: {
      type: Number,
      validate: {
        validator: (val) => {
          return val >= 1 && val <= 5000;
        },
        message: 'O número de páginas deve estar entre 1 e 5000',
      },
      // min: [1, 'O número de páginas deve estar entre 1 e 5000'],
      // max: [5000, 'O número de páginas deve estar entre 1 e 5000'],
    },
    // usando o formato embedding
    // autor: autorSchema,
    // usando o formato referencing
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'autores',
      required: [true, 'Id do autor é obrigatótio'],
      autopopulate: true,
    },
  },
  { versionKey: false }
);

livroSchema.plugin(autopopulate);
const livro = mongoose.model('livros', livroSchema);

export default livro;
