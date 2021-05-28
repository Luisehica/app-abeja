import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Proyectos {
  readonly id: string;
  readonly nombre: string;
  readonly fecha_inicio: string;
  readonly fecha_fin?: string;
  readonly descripcion?: string;
  readonly url?: string;
  readonly autores: string;
  readonly temas_relacionados?: string;
  readonly periodosID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Proyectos>);
  static copyOf(source: Proyectos, mutator: (draft: MutableModel<Proyectos>) => MutableModel<Proyectos> | void): Proyectos;
}

export declare class Periodos {
  readonly id: string;
  readonly anho: string;
  readonly partido_politico_actual?: string;
  readonly asistencias?: string;
  readonly inasistencias?: string;
  readonly inasistencias_justificadas?: string;
  readonly votos_electo?: string;
  readonly funcionarioID: string;
  readonly Proyectos?: (Proyectos | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Periodos>);
  static copyOf(source: Periodos, mutator: (draft: MutableModel<Periodos>) => MutableModel<Periodos> | void): Periodos;
}

export declare class Funcionario {
  readonly id: string;
  readonly name: string;
  readonly ultimo_grupo: string;
  readonly ultimo_subgrupo?: string;
  readonly partido_politico_actual: string;
  readonly Periodos?: (Periodos | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Funcionario>);
  static copyOf(source: Funcionario, mutator: (draft: MutableModel<Funcionario>) => MutableModel<Funcionario> | void): Funcionario;
}