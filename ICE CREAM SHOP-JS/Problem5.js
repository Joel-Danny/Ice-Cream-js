let iceCreamInventory = [];

function addIceCream(flavor, price, quantity) {
    const newIceCream = { flavor, price, quantity };
    iceCreamInventory.push(newIceCream);
    console.log(`Added: ${flavor}, Price: ${price}, Quantity: ${quantity}`);
}

function updateIceCream(flavor, newPrice, newQuantity) {
    const iceCreamIndex = iceCreamInventory.findIndex(item => item.flavor === flavor);

    if (iceCreamIndex !== -1) {
        iceCreamInventory[iceCreamIndex].price = newPrice;
        iceCreamInventory[iceCreamIndex].quantity = newQuantity;
        console.log(`Updated: ${flavor}, New Price: ${newPrice}, New Quantity: ${newQuantity}`);
    } else {
        console.log(`Ice cream flavor ${flavor} not found.`);
    }
}

function calculateTotalValue() {
    let totalValue = iceCreamInventory.reduce((total, iceCream) => {
        return total + (iceCream.price * iceCream.quantity);
    }, 0);
    console.log(`Total value of ice cream in inventory: ${totalValue.toFixed(2)}`);
}


addIceCream('Vanilla', 3.5, 20);
addIceCream('Chocolate', 4.0, 15);
addIceCream('Strawberry', 3.0, 10);

updateIceCream('Chocolate', 4.5, 12); // Update Chocolate ice cream

calculateTotalValue(); // Calculate and display total value