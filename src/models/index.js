// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Proyectos, Periodos, Funcionario } = initSchema(schema);

export {
  Proyectos,
  Periodos,
  Funcionario
};