import { checkLogin } from "../session/session";
import { withCondition } from "./withCondition";

export const ifLoggedOut = (Component) => {
  return withCondition(Component, !checkLogin(), '/home')
}