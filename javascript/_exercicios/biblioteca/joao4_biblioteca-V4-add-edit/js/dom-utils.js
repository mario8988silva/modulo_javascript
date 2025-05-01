
//* METODOS QUE NAO IMPLICAM ALTERACAO DO MODELO DE DADOS

//mostrar popup
export const showPopup = url => {
    popup.classList.add('open');
    popup.firstElementChild.src = url;
}

export const closePopup = () => popup.classList.remove('open');