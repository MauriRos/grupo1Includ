const path = require('path');
let ejs = require(('ejs'));


let productsTop = [
    {
        nombre: "Remera Stras M/C",
        precio: "$4100",
        imagen1: "top1.jpg",
        imagen2: "top1.1.jpg"
    },
    {
        nombre: "Top Amarillo S/M",
        precio: "$5500",
        imagen1: "top2.jpg",
        imagen2: "top2.1.jpg"
    },
    {
        nombre: "Remerón Blanco C/MC",
        precio: "$7400",
        imagen1: "top3.jpg",
        imagen2: "top3.1.jpg"
    },
    {
        nombre: "Top Negro S/M",
        precio: "$6300",
        imagen1: "top4.jpg",
        imagen2: "top4.1.jpg"
    },

]

let productsPantalones = [
    {
        nombre: "Pantalon Jirafa",
        precio: "$10200",
        imagen1: "pantalones1.jpg",
        imagen2: "pantalones1.1.jpg"
    },
    {
        nombre: "Biker Negra",
        precio: "$8000",
        imagen1: "pantalones2.png",
        imagen2: "pantalones2.1.png"
    },
    {
        nombre: "Biker Naranja",
        precio: "$8000",
        imagen1: "pantalones3.jpg",
        imagen2: "pantalones3.1.jpg"
    },
    {
        nombre: "Biker Verde",
        precio: "$9800",
        imagen1: "pantalones4.jpg",
        imagen2: "pantalones4.1.jpg"
    },

]

let productsAccesorios = [
    {
        nombre: "Medias",
        precio: "$1500",
        imagen1: "accesorios1.webp",
        imagen2: "accesorios1.1.webp"
    },
    {
        nombre: "Bandana",
        precio: "$1200",
        imagen1: "accesorios2.webp",
        imagen2: "accesorios2.1.webp"
    },
    {
        nombre: "Pin Rainbow",
        precio: "$400",
        imagen1: "accesorios3.webp",
        imagen2: "accesorios3.1.webp"
    },
    {
        nombre: "Pin Sandia",
        precio: "$400",
        imagen1: "accesorios4.webp",
        imagen2: "accesorios4.1.webp"
    },

]

const mainController = {
    home: (req,res) => {
        res.render('home', { productsTop : productsTop, productsAccesorios: productsAccesorios, productsPantalones: productsPantalones})
        },
};

    
    
module.exports = mainController;