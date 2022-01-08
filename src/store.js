import { createStore, reconcile } from "solid-js/store";
import { createMachine, assign, interpret } from "xstate";


const [store, setStore] = createStore();
const counter = {
  initial: "active",
  context: { count: 0 },
  states: {
    active: {
      on: {
        INCREMENT: {
          actions: assign({ count: (ctx) => ctx.count + 1 }),
        },
      },
    },
  },
};

const theMachine = createMachine(counter);

const service = interpret(theMachine).onTransition((state) =>
  setStore(reconcile(state)),
);

service.start();

const send = service.send

export {store, send}
