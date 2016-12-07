export interface Order {
  id?: number;
  orderId: string;
  customer: string;
  color: string;
  position: string;
  type: string;      //express czy nie
  date: string;
}
