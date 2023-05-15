import "./app.postcss";
import "./styles.css";
import App from "./App.svelte";
import { appWindow } from "@tauri-apps/api/window";
import { listen } from "@tauri-apps/api/event";

const app = new App({
  target: document.getElementById("app"),
});

listen("tauri://blur", (event) => {
  console.log(`Got blur event: ${event.event}`);
  appWindow.setIgnoreCursorEvents(true);
});

listen("tauri://focus", (event) => {
  console.log(`Got focus event: ${event.event}`);
  appWindow.setIgnoreCursorEvents(false);
});

appWindow.maximize();

export default app;
