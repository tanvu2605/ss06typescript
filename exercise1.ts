// Khai báo biến name, age, job và gán giá trị cho chúng
let name: string = "John";
let age: number = 30;
let job: string = "Developer";

// Xây dựng hàm nhận vào 3 tham số
function printInformation(name: string, age: number, job: string): void {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Job:", job);
}

// Gọi hàm với các đối số là 3 biến vừa tạo
printInformation(name, age, job);
