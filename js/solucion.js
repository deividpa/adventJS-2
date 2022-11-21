/*
Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 
😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más 
  espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, 
que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. 
Por ejemplo, si tenemos el texto:
*/

const carta = "bici coche balón _playstation bici coche peluche";

function listGifts(letter) {
  // ¡Tú puedes!

  let arrRegalos = letter.split(" ");
  let lista = {};
  for (let el of arrRegalos) {
    // Se ignoran aquellos casos en los que el regalo empieza por "_" o que es un espacio en blanco " "
    if (el.startsWith("_") || el === "") {
      continue;
    }
    if (lista.hasOwnProperty(el)) {
      lista[el] = lista[el] + 1;
    } else {
      lista[el] = 1;
    }
  }

  return lista;
}

// Función para mostrar los regalos en el contenedor de index.html

const mostrarLista = (regalos) => {
  if (Object.keys(regalos).length > 0) {
    const info = JSON.stringify(regalos, null, 4);
    let container = document.getElementById("container");
    let pre = document.createElement("pre");
    let code = document.createElement("code");
    code.textContent = info;
    pre.append(code);
    container.append(pre);
    return true;
  }
  return false;
};

// Al ejecutar el método debería devolver lo siguiente:

const regalos = listGifts(carta);

mostrarLista(regalos);
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
