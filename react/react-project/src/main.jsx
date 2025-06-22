import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../src/Components/App/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import 'react-loading-skeleton/dist/skeleton.css'


createRoot(document.getElementById("root")).render(<App />);
