import { render } from "solid-js/web";

import { Heart } from "phosphor-solid";
import "./index.css";

const App = () => (
  <div class="hero min-h-screen bg-base-200">
    <div class="text-center hero-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello there Solid</h1>
        <p class="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button
          class="btn btn-primary"
          onClick={() => (location.href = "https://www.solidjs.com")}
        >
          Get Started <Heart weight="fill" />{" "}
        </button>
      </div>
    </div>
  </div>
);

render(App, document.getElementById("root"));
