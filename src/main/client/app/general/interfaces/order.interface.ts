export interface Order {
  id?: number;
  name: string;
  customer: string;
  position: string;
  color: string;
  date: string;
  express: string;      //express czy nie
  lastUpdate: string;
  parentId: number;
  active: boolean;
}
