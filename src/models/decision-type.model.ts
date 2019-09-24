import { MetadataEntity } from "./metadata-entity.model";
import { DecisionCategory } from "./decision-category.model";

/**
 * Represents a type of decision such as Real Estate purchase.
 * It will have a list of categories in which to rate potential options for this type of decision.
 * @extends MetadataEntity
 */
export class DecisionType extends MetadataEntity {
  categories: DecisionCategory[] = [];

  constructor(name?: string, description?: string, icon?: string, categories?: DecisionCategory[]);
  constructor(json?: any);
  constructor(
    nameOrJson?: any,
    description?: string,
    icon?: string,
    categories: DecisionCategory[] = []
  ) {
    super(nameOrJson, description, icon);
    if (nameOrJson) {
      if (typeof nameOrJson === "string") {
        this.categories = categories;
      } else if (nameOrJson.categories) {
        this.categories = nameOrJson.categories.map(
          (jsonCat: any) => new DecisionCategory(jsonCat)
        );
      }
    }
  }
}
