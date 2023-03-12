export default function renderLoading() {
    const contenedor = document.createElement("section");
    contenedor.classList.add("loading-contenedor");

    const div = document.createElement("div");
    div.classList.add("loading");

    for (let i = 1; i <= 20; i++) {
        const span = document.createElement("span");
        span.style = `--i:${i};`;

        div.appendChild(span);
    }

    contenedor.appendChild(div);

    return contenedor;
};