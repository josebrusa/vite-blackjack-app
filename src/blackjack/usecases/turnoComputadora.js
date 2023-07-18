import { crearCartaHTML, pedirCarta, valorCarta } from "./";

/**
 *
 * @param {Number} puntosMinimo
 * @param {Array<String>} deck
 * @param {HTMLElement} puntosHTML
 * @param {HTMLElement} divCartasComputadora
 */

export const turnoComputadora = (
    puntosMinimo,
    puntosHTML,
    divCartasComputadora,
    deck = []
) => {
    if (!puntosMinimo) throw new Error("puntos minimos son necesarios");
    if (!puntosHTML) throw new Error("puntosHTML son necesarios");
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimo > 21) {
            break;
        }
    } while (puntosComputadora < puntosMinimo && puntosMinimo <= 21);

    setTimeout(() => {
        if (puntosComputadora === puntosMinimo) {
            alert("Nadie gana");
        } else if (puntosMinimo > 21) {
            alert("Computadora Gana");
        } else if (puntosComputadora > 21) {
            alert("Has Ganado!");
        } else {
            alert("Computadora Gana");
        }
    }, 100);
};
