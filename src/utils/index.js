/**
 * This function calcutates the total price of the total new order.
 * @param {Array} products cartProducts: Array of objects
 * @returns {number} sum Total price
 */

export const totalPrice = (products) =>
  products.reduce((sum, product) => sum + product.price * product.quantity, 0);
