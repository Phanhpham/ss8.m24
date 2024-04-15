function calculate(num: string | string[]) {
    if (typeof num === "string") {
      console.log(num);
    } else if (Array.isArray(num)) {
      let result = num.map((e) => {
        console.log(e);
      });
      return result;
    } else {
      console.log("không hơp lệ");
    }
  }
  console.log(" chào bạn");
  console.log(["hi", "hello", "hmmmm"]);
