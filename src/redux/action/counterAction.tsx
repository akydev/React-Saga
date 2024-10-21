import { ICounter } from "../interface/ICounter";

export const INC = (): ICounter => ({
  type: "INCREMENT",
});

export const DEC = (): ICounter => ({
  type: "DECREMENT",
});
