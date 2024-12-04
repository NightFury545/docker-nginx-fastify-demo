export declare namespace EntityFields {
  export type Book = {
    id?: string;
    title?: string;
    author?: string;
    year?: number;
    genre?: string;
  };
}

export declare namespace Entities {
  export class Book {
    public id?: string;
    public title?: string;
    public author?: string;
    public year?: number;
    public genre?: string;

    constructor(fields: EntityFields.Book);
  }
}
