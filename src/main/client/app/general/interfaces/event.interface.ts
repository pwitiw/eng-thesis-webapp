export interface Event{
  id?:number;
  orderNumber: number;
  orderStage: number;
  worker: Worker;
  element: number;
  date: string;
}
