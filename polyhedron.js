const coneVol = (radius, height)=> {
    return 1/3 * Math.PI * Math.pow(radius, 2) * height;
}

const cylinderVol = (radius, height)=> {
    return Math.PI * Math.pow(radius, 2) * height;
}

const sphereVol = (radius)=> {
   return 4/3 * Math.PI * Math.pow(radius, 3)
}

module.exports = {
    coneVol,
    cylinderVol,
    sphereVol
}