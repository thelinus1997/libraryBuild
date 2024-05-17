export interface AuthorData {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Doc[];
}

export interface Doc {
  alternate_names?: string[];
  birth_date?: string;
  death_date?: string;
  key: string;
  name: string;
  top_subjects?: string[];
  top_work?: string;
  type: Type;
  work_count: number;
  _version_: number;
}

export enum Type {
  Author = "author",
}
