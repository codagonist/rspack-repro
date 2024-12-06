import "./render.css";
import { render as renderTestComponent } from "./components/TestComponent";

export function render() {
	const el = document.createElement("div");
	el.classList.add("text");
	document.getElementsByTagName("body")[0].appendChild(el);
	el.innerHTML = "hello, world";
	// Render TestComponent as a child
	renderTestComponent(el);
}
