/**
 * Describes any entity that can be previewed within the system with basic metadata
 */
export interface Previewable {
  name: string;
  description: string;
  icon: string;
  createdAt?: Date;
  lastModifiedAt?: Date;
}
