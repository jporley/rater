import { DatabaseEntity } from "./database-entity.model";
import { DecisionCategory } from "./decision-category.model";

/**
 * Represents the points (from 1 to 10) that a User gave to a specific Category of a decision option.
 * For instance, for "Buying a House" decision, in category "Price" the User can select a rating of 3 because it is cheap.
 * @extends MetadataEntity
 */
export class UserRating extends DatabaseEntity {
  rating: number;
  category: DecisionCategory;

  constructor(rating?: number, category?: DecisionCategory);
  constructor(json?: any);
  constructor(ratingOrJson?: any, category: DecisionCategory = new DecisionCategory()) {
    super(typeof ratingOrJson === "number" ? undefined : ratingOrJson);
    if (typeof ratingOrJson === "number") {
      this.rating = ratingOrJson;
      this.category = category;
    } else {
      this.rating = ratingOrJson.rating;
      this.category = new DecisionCategory(ratingOrJson.category);
    }
  }
}
