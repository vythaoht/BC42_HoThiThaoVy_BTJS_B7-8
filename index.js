//Mảng dùng chung cho 10 bài tập:
let arr = [];
document.getElementById("storage").onclick = function () {
    let number = +document.getElementById("number").value;
    arr.push(number);
    renderArr('array', arr);
    document.getElementById("number").value = ""; //để chỗ nhập số nó trở về rỗng
    document.getElementById("number").focus(); //và để focus
}

let renderArr = (id, arr) => { //hiển thị mảng ra
    document.getElementById(id).innerHTML = "Mảng hiện tại: " + JSON.stringify(arr);
} //JSON giữ nguyên định dạng []

// BT1: Tổng các số dương trong mảng
document.getElementById("bt1").onclick = function () {
    // let sum = 0;
    // sum = handlePositiveNumber(arr);
    document.getElementById("showBT1").innerHTML = handlePositiveNumber(arr);
    document.getElementById("showBT1").style.fontSize = "24px";
}
let handlePositiveNumber = (temp) => {
    let sum = 0;
    temp.forEach((value) => {
        if (value > 0) {
            sum += value;
        }
    })
    return sum;
}

//BT2: Đếm có bao nhiêu số dương trong mảng
document.getElementById("bt2").onclick = function () {
    document.getElementById("showBT2").innerHTML = "Có " + handleTotalPositiveNumber(arr) + " số dương";
    document.getElementById("showBT2").style.fontSize = "24px";
}
let handleTotalPositiveNumber = (temp) => {
    let total = 0;
    temp.forEach((value) => {
        if (value >= 0) {
            total++;
        }
    })
    return total;
}

//BT3: Tìm số nhỏ nhất [5,-3,2]
document.getElementById("bt3").onclick = function () {
    // let min = 0;
    document.getElementById("showBT3").innerHTML = "Số nhỏ nhất: " + handleMinNumber(arr);
    document.getElementById("showBT3").style.fontSize = "24px";
}
let handleMinNumber = (temp) => {
    let min = temp[0];
    temp.forEach((value) => {
        if (min > value) {
            min = value;
        }
    })
    return min;
}

//BT4: Tìm số DƯƠNG nhỏ nhất trong mảng [-2, 5, 2]
document.getElementById("bt4").onclick = function () {
    // let minPositiveNumber = 0;
    document.getElementById("showBT4").innerHTML = "Số dương nhỏ nhất: " + handleMinPositiveNumber(handleFilterPositiveNumber(arr));
    document.getElementById("showBT4").style.fontSize = "24px";
}

let handleFilterPositiveNumber = (temp) => {
    let result = [];
    temp.forEach((value) => {
        if (value >= 0) {
            result.push(value);
        }
    })
    return result;
} // [5, 2]

let handleMinPositiveNumber = (temp) => {
    let minPositiveNumber = temp[0];
    temp.forEach((value) => {
        if (minPositiveNumber > value) {
            minPositiveNumber = value;
        }
    })
    return minPositiveNumber;
}

//BT5: Tìm số chẳn cuối cùng trong mảng
document.getElementById("bt5").onclick = function () {
    // let even = 0;
    if (handleEvenNumber(arr) === -1) {
        document.getElementById("showBT5").innerHTML = "Không có số chẳn nào và trả về: " + handleEvenNumber(arr);
    } else {
        document.getElementById("showBT5").innerHTML = "Số chẳn cuối cùng: " + handleEvenNumber(arr)
    }
    document.getElementById("showBT5").style.fontSize = "24px";

}
let handleEvenNumber = (temp) => {  // [1, 2, 4, 8]
    let even = -1;
    temp.forEach((value) => {
        if (value % 2 === 0) {
            even = value;
        }
    })
    return even;
}

//BT6: Đổi chỗ 2 vị trí bất kỳ: [1, 2, 3, 4, 5]
document.getElementById("bt6").onclick = function () {
    let index1 = +document.getElementById("index1").value;
    let index2 = +document.getElementById("index2").value;
    document.getElementById("showBT6").innerHTML = "Mảng khi đã đổi chỗ: " + JSON.stringify(handleChangeTwoIndex(arr, index1, index2));
    renderArr('array', arr);
    document.getElementById("showBT6").style.fontSize = "24px";

}
let handleChangeTwoIndex = (temp, index1, index2) => {
    let num = temp[index1];
    temp[index1] = temp[index2];
    temp[index2] = num;
    return temp;
}

//BT7: Sắp xếp mảng theo thứ tự tăng dần [5,2,3,9,8]
document.getElementById("bt7").addEventListener("click", () => {
    document.getElementById("showBT7").innerHTML = "Mảng tăng dần là " + JSON.stringify(bubbleSort(arr));
    document.getElementById("showBT7").style.fontSize = "24px";

})

let bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//BT8: Tìm số nguyên tố đầu tiên trong mảng
document.getElementById("bt8").addEventListener("click", () => {
    if (findingFirstSNT(arr) === -1) {
        document.getElementById("showBT8").innerHTML = "Không có số nguyên tố " + findingFirstSNT(arr);
    } else {
        document.getElementById("showBT8").innerHTML = "Số nguyên tố đầu tiên tìm thấy là: " + findingFirstSNT(arr)
    };
    document.getElementById("showBT8").style.fontSize = "24px";

})

let checkSNT = (n) => {
    if (n < 2) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
    // Ta mặc định ban đầu là SNT
    let isCheck = true;
    // Tối ưu hơn: Kiểm tra các số lẻ từ 3 đến căn bậc 2 của n, xem có số nào mà n chia hết hay ko
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            isCheck = false;
        }
    }
    return isCheck;
}

let findingFirstSNT = (arr) => {
    let result = -1;
    for (let i = 0; i < arr.length; i++) {
        if (checkSNT(arr[i]) === true) {
            result = arr[i];
            break;
        }
    }
    return result;
}

//BT9: Nhập mảng số thực và tìm các số nguyên có trong mảng
let floatArr = [];
document.getElementById("storageNewNums").onclick = function () {
    let number = +document.getElementById("floatNums").value;
    floatArr.push(number);
    renderArr('floatArr', floatArr);
    document.getElementById("floatNums").value = ""; //để chỗ nhập số nó trở về rỗng
    document.getElementById("floatNums").focus(); //và để focus
}

document.getElementById("bt9").addEventListener("click", () => {
    document.getElementById("showBT9").innerHTML = "Tổng các số nguyên đếm được là " + countInteger(floatArr);
    document.getElementById("showBT9").style.fontSize = "24px";

})

let countInteger = (temp) => {
    let count = 0;
    temp.forEach((value) => {
        if (Number.isInteger(value)) {
            count++;
        }
    });
    return count;
}

//BT10: So sánh số dương và số âm có trong mảng:

document.getElementById("bt10").onclick = function () {
    if (countingPositiveNumber(arr) > countingNegativeNumber(arr)) {
        document.getElementById("showBT10").innerHTML = "Số dương nhiều hơn số âm";
    } else if (countingPositiveNumber(arr) < countingNegativeNumber(arr)) {
        document.getElementById("showBT10").innerHTML = "Số dương ít hơn số âm";
    } else {
        document.getElementById("showBT10").innerHTML = "Số dương bằng số âm";
    }
    document.getElementById("showBT10").style.fontSize = "24px";
}

//Đếm số dương:
let countingPositiveNumber = (temp) => {
    let total = 0;
    temp.forEach((value) => {
        if (value >= 0) {
            total++;
        }
    })
    return total;
}

//Đếm số âm:
let countingNegativeNumber = (temp) => {
    let total = 0;
    temp.forEach((value) => {
        if (value < 0) {
            total++;
        }
    })
    return total;
}


