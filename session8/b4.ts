function calculate1(num: number | number[]) {
  if (typeof num === "number") {
    return num ** 2;
  } else if (Array.isArray(num)) {
    let result = num.map((ese) => {
      return ese ** 2;
    });
    return result;
  } else {
    console.log("không hơp lệ");
  }
}
console.log(calculate1(6));
console.log(calculate1([1, 2, 3, 4]));
