export class Api {
    #url;
    #urlNegocio;
    #urlTipoAlim;
    #urlItemCateg;
    #urlItem;
    #urlLinksGrp;
    #urlLinks;
    constructor() {
        this.#url = "https://bsite.net/metalflap";
        this.#urlNegocio = `${this.#url}/demo-negocio`
        this.#urlTipoAlim = `${this.#url}/demo-tipo-alimento`
        this.#urlItemCateg = `${this.#url}/demo-item-categ`
        this.#urlItem = `${this.#url}/demo-item`
        this.#urlLinksGrp = `${this.#url}/links-group`
        this.#urlLinks = `${this.#url}/links`
    };
    getNegocioAll(){
        return get(this.#urlNegocio);
    };
    getTipoAlimAll(){
        return get(this.#urlTipoAlim);
    };
    getItemCategAll(){
        return get(this.#urlItemCateg);
    };
    getItemCategById(id){
        return getById(id, this.#urlItemCateg);
    };
    getItemAll(){
        return get(this.#urlItem);
    };
    getItemById(id){
        return getById(id, this.#urlItem);
    };
    getLinksGrpAll(){
        return get(this.#urlLinksGrp);
    };
    getLinksAll(){
        return get(this.#urlLinks);
    };
};

async function get(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch(e) {
        console.log(`Error: ${e}`)
        return [];
    };
};

async function getById(id, url) {
    try {
        const res = await fetch(`${url}/${id}`);
        const data = await res.json();
        return data;
    } catch(e) {
        console.log(`Error: ${e}`)
        return [];
    };
};