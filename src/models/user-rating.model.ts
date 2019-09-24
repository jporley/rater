import { DatabaseEntity } from './database-entity.model';
import { DecisionCategory } from './decision-category.model';

export class UserRating extends DatabaseEntity {
  rating: number;
  category: DecisionCategory;

  constructor(rating?: number, category?: DecisionCategory);
  constructor(json?: any);
  constructor(ratingOrJson?: any, category?: DecisionCategory) {
    super(typeof ratingOrJson === 'number' ? undefined : ratingOrJson);
    if (typeof ratingOrJson === 'number') {
      this.rating = ratingOrJson;
      this.category = category;
    } else {
      this.rating = ratingOrJson.rating;
      this.category = new DecisionCategory(ratingOrJson.category);
    }
  }
}