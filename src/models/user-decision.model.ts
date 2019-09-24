import { MetadataEntity } from "./metadata-entity.model";
import { UserDecisionOption } from "./user-decision-option.model";
import { DecisionType } from "./decision-type.model";

/**
 * Represents a decision the User wants to make and analyze, such as "Buying a House".
 * Has a type of decision that defines it, and a list of options that the User has to make the decision.
 * @extends MetadataEntity
 */
export class UserDecision extends MetadataEntity {
  options: UserDecisionOption[] = [];
  type: DecisionType = new DecisionType();

  constructor(
    name?: string,
    description?: string,
    icon?: string,
    type?: DecisionType,
    options?: UserDecisionOption[]
  );
  constructor(json?: any);
  constructor(
    nameOrJson?: any,
    description?: string,
    icon?: string,
    type: DecisionType = new DecisionType(),
    options: UserDecisionOption[] = []
  ) {
    super(nameOrJson, description, icon);
    if (nameOrJson) {
      if (typeof nameOrJson === "string") {
        this.type = type;
        this.options = options;
      } else {
        this.type = new DecisionType(nameOrJson.type);
        if (nameOrJson.options) {
          this.options = nameOrJson.options.map(
            (jsonOption: any) => new UserDecisionOption(jsonOption)
          );
        }
      }
    }
  }
}
