   /* const é parecido com a variavel a difenreça é que seu valor não pode ser alterado durante a execução do codigo */

   /* a funçao basica do queryselector é buscar elementos do  
   dom com base em um seletor */

/* const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("form button");
const ulElement = document.querySelector("ul"); */


/* uma funçao de um elemento html(objeto) nada mais é que do que um evento ou seja , uma ação do usurario naquele elemento */

/* buttonElement.onclick ()  */


/* Nova forma de digitar uma evento,nesta opçao é quando o usuario clicar */

/* buttonElement.onclick = ev => {
    ev.preventDefault();
} */

/* Verifia se o campo input realmente recebeu um valor */
/* if (inputElement.value) { */

    /* createElement = cria um elemento html para ser utilizado posteriormente */
    /* const textElement = document.createElement("span"); */

    /* innerHtml = insere um valor dentro do elemento(tag) html especificado */
    /* textElement.innerHTML = inputElement.value; */

    /* createElement = cria um elemento html button para ser utilizado posterirormente */

   /*  const btnElement = document.createElement("button"); */

    /* innerHTML = insere um valor dentro do elemento (tag) especificado,será a tag button  */
    
    /* btnElement.innerHTML = "Remover"; */

    /* createElement = cria um elemento html para ser utilizado posteriormente , nesse caso sera o li */

    /* const liElement = document.createElement("li"); */


    /* appendchild = adiciona na ultima posiçao do elemento pai o valor que foi passado a ele, nesse caso esta sendo passsado aquilo que o usuario digitou no campo input */
    /* liElement.appendChild(textElement);
    liElement.appendChild(btnElement); */

    
    /* removechild = remove o filho especificado no removeChild, nesse caso sera o liElement */
    /* btnElement.onclick = () =>  {
        ulElement.removeChild(liElement)
    }

    ulElement.appendChild(liElement);
    inputElement.value = "";
}
 */

const inputnameproduto = document.querySelector("input")
const inputprecoproduto = document.querySelector("input")
const buttonelements = document.querySelector("form button")
const elementul = document.querySelector("ul")



buttonelements.onclick = ev => {
    ev.preventdefault();
}

if (inputnameproduto.value && inputprecoproduto.value) {

    const textelement = document.createElement("span");
    const textelement1 = document.createElement("span");

    textelement.innerHTML = textelement.value;
    textelement.innerHTML = textelement1.value;

    const btnElement = document.createElement("button");
    btnElement.innerHTML = "Remover";

    const liElement = document.createElement("li");

    liElement.appendChild(textelement);
    liElement.appendChild(textelement1);
    liElement.appendChild(btnElement);;


    btnElement.onclick = () => {
        elementul.removeChild(liElement);
    }

    elementul.appendChild(liElement);
    textelement.value ="";
    textelement1.value = "";

}




