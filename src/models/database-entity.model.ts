/**
 * Represents any entity in the system that will be stored in the database.
 * Holds boilerplate metadata for DB records
 * @extends MetadataEntity
 */
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
