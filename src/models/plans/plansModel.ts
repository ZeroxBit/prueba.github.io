export interface Plans {
  list: PlansList[];
}

export interface PlansList {
  name: string;
  price: number;
  description: string[];
  age: number;
}
