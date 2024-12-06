import "./TestComponent.css";

export function render(parent) {
	const el = document.createElement("div");
	el.classList.add("TestComponent");
	parent.appendChild(el);
	el.innerHTML = "TestComponent.js. This is a test.";
}
