'use strict';

function getElementWidth(content, padding, border) {
    Number.parseFloat(content, padding, border);
    const boxSizing = content + (padding +  border) * 2;
    return boxSizing;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
// Може треба вираз у форматі Npx привести до Number щоб можна було робити операції додавання та множення 