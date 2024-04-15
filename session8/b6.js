function calculate(num) {
    if (typeof num === "string") {
        console.log(num);
    }
    else if (Array.isArray(num)) {
        var result = num.map(function (e) {
            console.log(e);
        });
        return result;
    }
    else {
        console.log("không hơp lệ");
    }
}
console.log(" chào bạn");
console.log(["hi", "hello", "hmmmm"]);
