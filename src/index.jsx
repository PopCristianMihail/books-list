import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/books";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
  <Provider value={5}>
    <App />
  </Provider>
);
