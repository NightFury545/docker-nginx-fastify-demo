export declare namespace EntityFields {
  export type Library = {
    id?: string;
    name?: string;
    booksRef?: string[] | null;
  };
}

export declare namespace Entities {
  export class Library {
    public id?: string;
    public name?: string;
    public booksRef?: string[] | null;
    constructor(fields: EntityFields.Library);
  }
}
