function calculate1(num) {
    if (typeof num === "number") {
        return Math.pow(num, 2);
    }
    else if (Array.isArray(num)) {
        var result = num.map(function (ese) {
            return Math.pow(ese, 2);
        });
        return result;
    }
    else {
        console.log("không hơp lệ");
    }
}
console.log(calculate1(6));
console.log(calculate1([1, 2, 3, 4]));
