'use strict';

// Implement instances of the 'Product' type
function createElectronicDevice() {
    // TODO: Prompt user for electronic device details (brand and model)
    const brand = prompt('Enter the brand: ') ?? 'Brand unknown';
    const model = prompt('Enter the model: ') ?? 'Model unknown';
    // TODO: return object containing brand and model
    return { brand, model, type: 'electronic' };
}
function createBook() {
    // TODO: Prompt user for book details (title and author)
    const title = prompt('Enter the title: ') ?? 'Title unknown';
    const author = prompt('Enter the author: ') ?? 'Author unknown';
    // TODO: return object containing title and author
    return { title, author, type: 'book' };
}
// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();
// Display the details of each product
function displayProductDetails(product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === 'electronic') {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    }
    else {
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
console.log('Book Details:');
displayProductDetails(bookProduct);
