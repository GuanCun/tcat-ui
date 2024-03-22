import { App } from "vue";
import myButton from "./my-button/src/index.vue";

const components = [myButton];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
  myButton,
};
