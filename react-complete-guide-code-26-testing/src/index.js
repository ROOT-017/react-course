import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

/*ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot*/
//Fix the issue above
createRoot(document.getElementById("root")).render(<App />);
