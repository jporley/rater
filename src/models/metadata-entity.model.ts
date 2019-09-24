import { DatabaseEntity } from "./database-entity.model";
import { Previewable } from "../interfaces/previewable";

export class MetadataEntity extends DatabaseEntity implements Previewable {
  name: string = '';
  description: string = '';
  icon: string = '';

  constructor(name?: string, description?: string, icon?: string);
  constructor(json?: any);
  constructor(nameOrJson?: any, description: string = '', icon: string = '') {
    super(nameOrJson);
    if (nameOrJson) {
      if (typeof nameOrJson === 'string') {
        this.name = nameOrJson;
        this.description = description;
        this.icon = icon;
      } else {
        this.name = nameOrJson.name;
        this.description = nameOrJson.description;
        this.icon = nameOrJson.icon;
      }
    }
  }
}