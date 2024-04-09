function typeUnknow(userName:unknown):void{
    if( typeof userName == "string"){
        console.log(userName.toUpperCase());
    }else{
        console.log("đây là số");
    }
    return;
}
typeUnknow(1);
function typeAny(userName:any):void{
    console.log(userName);
    return;
}
typeAny("nhất");
// kiểu unknow thì nó bắt kiểm tra kiểu dữ liệu của đối số truyền vào trước khi sử dụng biến đó,
// không thể thực hiện các phép toán hay truy cập từng phần tử bên trong trực tiếp mà cần phải kiểm tra hoặc ép kiểu để thực hiện hành động mong muốn