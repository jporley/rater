export class DatabaseEntity {
  id?: string;
  createdAt?: Date;
  lastModifiedAt?: Date;

  constructor(json?: any) {
    if (json) {
      this.id = json.id;
      this.createdAt = new Date(json.createdAt);
      this.lastModifiedAt = new Date(json.lastModifiedAt);
    }
  }
}