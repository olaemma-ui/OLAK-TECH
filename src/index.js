import ReactDOM from "react-dom/client";

import './asset/css/all.min.css';
import './asset/css/bootstrap.min.css';
import './asset/css/spacing.css';
import './asset/css/style.css';
import './asset/css/mesaurement.css';
import { App } from "./Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);