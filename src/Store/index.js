import createStore from "storeon";

import theme from "./theme";
import sidebar from './sidebar'

export const store = createStore([theme, sidebar]);
