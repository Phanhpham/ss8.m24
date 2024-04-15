/**
 1.union :kiểu kết hợp |
 2.intersetion :kiểu kết hợp &
 */

 let a:number|string|undefined=5;
    a="hong";
    //tham chiếu(array)
    let numbers:(number | string)[]=[1,2,3,5];
    let b:number=6;
    //  
    type Student={
        name:string,
        address:string,
        phone:string
    }
    let obj:Student={
        name:"hoa",
        address:"ha noi",
        phone:"098765654"
    }
