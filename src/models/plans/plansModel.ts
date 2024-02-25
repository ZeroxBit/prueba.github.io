export interface PlansAPI {
  list: PlansList[];
}

export interface PlansList {
  name: string;
  price: number;
  description: string[];
  age: number;
}

export interface PlansModel extends PlansList {
  descount: number;
}
