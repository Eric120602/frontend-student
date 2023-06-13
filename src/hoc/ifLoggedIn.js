import { checkLogin } from "../session/session";
import { withCondition } from "./withCondition";

export const ifLoggedIn = (Component) => {
  return withCondition(Component, checkLogin(), '/login')
}