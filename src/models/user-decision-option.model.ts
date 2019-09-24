import { MetadataEntity } from "./metadata-entity.model";
import { UserRating } from "./user-rating.model";

/**
 * Represents one of the User's options for a given decision.
 * For instance, for "Buying a House" decision, an option is "1233 Infinite Loop Street".
 * Contains the list of ratings the User selected for each applicable Category in the decision
 * @extends MetadataEntity
 */
export class UserDecisionOption extends MetadataEntity {
  ratings: UserRating[] = [];

  constructor(name?: string, description?: string, icon?: string, ratings?: UserRating[]);
  constructor(json?: any);
  constructor(nameOrJson?: any, description?: string, icon?: string, ratings: UserRating[] = []) {
    super(nameOrJson, description, icon);
    if (nameOrJson) {
      if (typeof nameOrJson === "string") {
        this.ratings = ratings;
      } else if (nameOrJson.ratings) {
        this.ratings = nameOrJson.ratings.map((jsonRating: any) => new UserRating(jsonRating));
      }
    }
  }
}
