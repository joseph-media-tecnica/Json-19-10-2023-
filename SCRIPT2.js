import { Data } from './data/Data.js';

const items = document.getElementById('items');
const templatecars = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let like = []

document.addEventListener('DOMContentLoaded', () => {
    loadData(Data);
})

const loadData = Data => {
    Data.forEach(carro => {
        const { id, name, image } = carro;
        templatecars.querySelector('h5').textContent = name;
        templatecars.querySelector('img').setAttribute('src', image);
        templatecars.querySelector('.btn-dark').dataset.id = id;
        const clone = templatecars.cloneNode(true);
        fragment.appendChild(clone);


        items.appendChild(fragment);
    });



}

items.addEventListener('click', e => {
    addlike(e);
})

const addlike = e => {

    console.log(e.target.classList.contains('btn-dark'));

    setlike(e.target.parantElement);
};


const setlike = Objecto => {
    const boton = {
        id: Objecto = document.querySelector('.btn-dark').dataset.id,
        cantidad: 0
    }
    console.log(like.hasOwnProperty(boton.id));

    if (like.hasOwnProperty(boton.id)) {
        boton.cantidad = like[boton.id].cantidad + 1;
        Objecto = document.querySelector('#like').textContent = boton.cantidad;
    }

    like[boton.id] = { ...boton };
    console.log(like[boton.id]);
};

