import { mockStore } from "../store/mockStore";
import { Provider } from "react-redux";

export function createTestWrapper(store = mockStore) {
  return ({children}) => {
    <Provider store={store}>
      {children}
    </Provider>
  }
}
