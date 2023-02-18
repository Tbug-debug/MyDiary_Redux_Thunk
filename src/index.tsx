import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

import App from "./components/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
