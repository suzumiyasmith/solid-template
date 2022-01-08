import { render } from "solid-js/web";
import { store, send } from "./store";
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
        <Switch>
          <Match when={store.context.count <= 10}>
            <button
              class="btn btn-primary"
              onClick={() => send({ type: "INCREMENT" })}
            >
              Get Started <Heart weight="fill" />
              {store.context.count}
            </button>
          </Match>
          <Match when={store.context.count > 10}>
            <a class="link link-primary" href="https://www.solidjs.com">
              Go Solidjs
            </a>
          </Match>
        </Switch>
      </div>
    </div>
  </div>
);

render(App, document.getElementById("root"));
