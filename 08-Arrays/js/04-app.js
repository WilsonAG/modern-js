'use strict';

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

// Object.seal(meses);
meses[0] = 'Nuevo Mes';
meses[10] = 'Ultimo Mes';

console.table(meses);
