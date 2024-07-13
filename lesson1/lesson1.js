// Câu 1
const square = (number) => {
    return  number * number;
}

// Câu 2
const keywordInString = (fullWord, keyword) => {
    const wordSplitList = fullWord.split(" ");
    console.log(wordSplitList);
    // ‘Hello world’ => ["Hello", "world"];
    for(let i = 0 ; i < wordSplitList.length;i++){
        console.log(keyword,wordSplitList[i]);
        if(keyword === wordSplitList[i]){
            return true;
        }
    }
    return false;
}

// console.log(keywordInString("Hello World", "World"));
// Câu 3

const addPredecesor = (array, word) => {
    const addedWordList = array.map(afterWord => {
        return `${word + ': ' + afterWord}`; 
    }) 

    return addedWordList;
}
// Câu 4
const doubleValue = (array) => {
    // ['1', '2']

    // phải convert từ string sang number vì trong js string + number sẽ ra string
    // '1' + 1 = "11"
    const doubleValueList = array.map(number => {
        return Number(number * 2); 
    }) 

    return doubleValueList;
}
// console.log('1' + 1);
// Câu 5
const soLe = (array) => {
    let soLeArray = [];

   array.forEach(number => {
        if(number % 2 === 1){
            soLeArray.push(number); 
        }
    }) 
    
    return soLeArray;
}

// Câu 6

const soCongNhanVien = (array) => {
    const employees = [
        { id: 1, name: "John", workingDays: 22 },
        { id: 2, name: "Jane", workingDays: 20 },
        { id: 3, name: "Mark", workingDays: 25 },
    ];
    let soCong = 0;
    array.forEach(employee => {return soCong += Number(employee.workingDays);} );

    return soCong;
}


// Câu 7

const luongCaoNhat = (array)=>{
    let highestSalary = 0;
    array.forEach(employee => {
        if(employee.salary > highestSalary){
            highestSalary = employee.salary;
        }
    })
    return highestSalary;
}

// Câu 8

const congCaoNhat = (array)=>{
    let highestCong = 0;
    array.forEach(employee => {
        if(employee.workingDays - employee.lateDays > highestCong){
            highestCong = employee.workingDays - employee.lateDays;
        }
    })
    return highestCong;
}


// Câu 9
const traVeTen = (array)=>{
   

    let result = {}; // HashSet > HashMap, HashSet không bao giờ trùng key.
    // array.forEach(employee => {
    //     if(!result[employee.name]){
    //         result[employee.name] = [];
    //     } 
    //     return result[employee.name].push(employee);
    // })
    for(let i = 0; i < array.length;i++){
        if(!result[array[i].name]){
            result[array[i].name] = [];
        } 
        result[array[i].name].push(array[i]); // Time complexity: O(n); Space complexity: O(n);
    }

    return result;
}

// Câu 10
// Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về số công làm việc, số công đi làm muộn và mức lương của nhân viên. 
// Tính hiệu suất của mỗi nhân viên bằng cách chia số ngày làm việc cho mức lương, sau đó tìm nhân viên có hiệu suất cao nhất và trả về thông tin của họ.

// hiệu suất = workingDays / salary
// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
// ];

// - Output: { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 }

const hieuSuatCaoNhat = (array)=>{
   

    
    let hieuSuatCaoNhat = 0;
    let employeeHieuSuatCapNhat;
    array.forEach(employee => {
        const hieuSuat = employee.workingDays / employee.salary;
        if(hieuSuat > hieuSuatCaoNhat){
            hieuSuatCaoNhat = hieuSuat;
            employeeHieuSuatCapNhat = employee;
        }

    })

    return employeeHieuSuatCapNhat;
}
const employees = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
];
console.log(hieuSuatCaoNhat(employees));
// Câu 11

const histogram = (array)=>{
   let histogram = {};
 
   array.forEach(employee => {
        let {workingDays} = employee;
        if(!histogram[workingDays]){
            histogram[workingDays] = 1;
        } else {
            histogram[workingDays] +=1;
        }
    }) // Time: O(n); Space: O(n);

    return histogram;
}

// Câu 12

const workInfo = (array)=>{
    array.map((employee, index) => {
         return {
            id: index + 1,
            name: employee.name,
            email: employee.email,
            workInfo: {
                workingDays: employee.workingDays,
                lateDays: employee.lateDays
            }
         }
 
     })
 
     return array;
 }


// Câu 13 Quản lý danh sách công việc

// Yêu cầu:
// 1. Viết hàm thực thi thêm một công việc mới
// 2. Viết hàm đánh dấu một hoặc nhiều công việc hoàn thành
// 3. Viết hàm sắp xếp các công việc theo alphabet của tên công việc theo hai chiều A -> Z, Z -> A


// let tasks = [ 
//     { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
//     { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
//     { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
// ];





const workListManagement = (array)=>{
    // let tasks = [ 
    //     { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
    //     { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
    //     { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
    // ];
    array.map((employee, index) => {
         return {
            id: index + 1,
            name: employee.name,
            email: employee.email,
            workInfo: {
                workingDays: employee.workingDays,
                lateDays: employee.lateDays
            }
         }
 
     })
 
     return array;
 }