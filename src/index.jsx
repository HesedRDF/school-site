/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import App from "./App";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router>
      <Route path="/" component={App} />
      <Route path="/about-hesed-academy" component={About} />
      <Route path="/our-services" component={Services} />
      <Route path="/gallery" component={Gallery} />
    </Router>
  ),
  root
);
