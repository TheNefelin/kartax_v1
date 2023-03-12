import { Api } from "../class/ApiFetch.js";
import renderLoading from "../component/renderLoading.js";
import renderNavBar from "../component/renderNavBar.js"
import renderAcordion from "../component/renderAcordion.js"
import renderSlider from "../component/renderSlider.js"
import renderFooterLinks from "../component/renderFooterLinks.js";

window.onload = () => {
    inicializar();
};

function inicializar() {
    const body = document.querySelector("body");
    body.classList.add("paralax");

    const header = document.querySelector("header");
    header.appendChild(renderNavBar());

    const main = document.querySelector("main");
    main.appendChild(renderLoading());

    const api = new Api();

    Promise.all([
        api.getNegocioAll().then(data => data),
        api.getTipoAlimAll().then(data => data),
        api.getItemCategById(1).then(data => data),
        api.getItemById(1).then(data => data),
        api.getLinksGrpAll().then(data => data),
        api.getLinksAll().then(data => data),
    ]).then(arr => {
        main.innerHTML = "";
        main.appendChild(renderSlider(arr[1]));
        main.appendChild(renderAcordion(arr[2], arr[3]));
        main.appendChild(renderFooterLinks(arr[4], arr[5]));
    });
};
