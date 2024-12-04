export declare namespace EntityFields {
  export type User = {
    id?: string;
    username?: string;
    libraryRef?: string | null;
  };
}

export declare namespace Entities {
  export class User {
    public id?: string;
    public username?: string;
    public libraryRef?: string | null;

    constructor(fields: EntityFields.User);
  }
}
