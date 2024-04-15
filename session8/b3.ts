interface Square {
    kind: 'square';
    sideLength: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

function isquare(obj:Square | Circle): obj is Square{
    return obj.kind==='square';

}
function calculateArea(obj:Square | Circle):number{
    if (isquare (obj)){
        return obj.sideLength ** 2;
    }else{
        return Math.PI * obj.radius ** 2;
}
}
const square: Square = { kind: 'square', sideLength: 4 };
const circle: Circle = { kind: 'circle', radius: 9 };

console.log(calculateArea(square));
console.log(calculateArea(circle));
