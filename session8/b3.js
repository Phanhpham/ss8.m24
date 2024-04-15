function isquare(obj) {
    return obj.kind === 'square';
}
function calculateArea(obj) {
    if (isquare(obj)) {
        return Math.pow(obj.sideLength, 2);
    }
    else {
        return Math.PI * Math.pow(obj.radius, 2);
    }
}
var square = { kind: 'square', sideLength: 4 };
var circle = { kind: 'circle', radius: 9 };
console.log(calculateArea(square));
console.log(calculateArea(circle));
