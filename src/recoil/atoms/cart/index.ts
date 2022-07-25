import { atom } from "recoil";
import { Atoms } from "@recoil/constants";

export const myCartDefault: any = [];

export const myCartState = atom({
  key: Atoms.MyCart,
  default: myCartDefault,
});
