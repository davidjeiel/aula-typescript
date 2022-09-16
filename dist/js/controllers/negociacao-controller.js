import NegociacaoModel from "../models/NegociacaoModel.js";
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = new NegociacaoModel(this.inputData, this.inputQuantidade, this.inputValor);
        console.debug(negociacao);
    }
}
