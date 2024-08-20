const calcVol = require('./polyhedron.js');

console.log(`Uma esfera com 3 de raio tem ${calcVol.sphereVol(3)} de volume`);
console.log(`Um cilindor com 3 de raio e 5 de altura tem ${calcVol.cylinderVol(3,5)} de volume`);
console.log(`Um cone com 3 de raio e 5 de altura tem ${calcVol.coneVol(3,5)} de volume`);
