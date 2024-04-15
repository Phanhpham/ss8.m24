// 1.union
// Union Types cho phép bạn định nghĩa một kiểu 
// dữ liệu có thể nhận một trong các kiểu cụ thể. 
// Để tạo một Union Type, bạn sử dụng dấu chấm thang | giữa các kiểu.

// Union vi du
type MyPerson = string | number;

let variable1: MyPerson;

variable1 = "Phanh"; // OK
variable1 = 22; // OK
variable1 = true; // Sai


//2. Intersection
//Intersection Types cho phép bạn tạo ra một kiểu dữ 
//liệu mới bằng cách kết hợp các kiểu dữ liệu khác lại với nhau
// Để tạo một Intersection Type, bạn sử dụng dấu &

// vi dụ
// Intersection Types
interface A {
    iA: number;
}

interface B {
    iB: string;
}

type MyType = A & B;

let variable: MyType;

variable = { iA: 10, iB: "Hello" }; // Đúng
variable = { iA: 10 }; // Sai
variable = { iB: "Hello" }; // Sai,





