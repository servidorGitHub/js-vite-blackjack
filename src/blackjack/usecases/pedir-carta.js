//
/**
 * Esta funcion permite tomar una carta
 * @param {array<String>} deck array de String
 * @returns {String} retorna una carta del deck
 */

// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}