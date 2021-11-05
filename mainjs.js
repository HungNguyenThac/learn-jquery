// select element, tạo thẻ bằng jquery, lấy giá trị input, thêm 1 element vào html,
//gọi tới thẻ cha, .parentElement

// let count = 0;
// function getinput() {
//     count++
//     let input1 = $(".1").val();
//     let input2 = $(".2").val();

//     var p = `
//     <div>
//     <p> ten toi la ${input1} va tuoi cua toi la${input2} </p>
//     <button class="xoa">xoa</button>
//     </div>

//     `;
//     $("body").append(p)

//     $('.xoa')
//     .eq($('.xoa').length -1)
//     .click(function() {
//         this.parentElement.remove()
//     })


// }

// $('.event').click(function(){
//     let input1 = $(".1").val();
//     let input2 = $(".2").val();
//     console.log(input1, input2);
//     var p = `
//     <div>
//     <p> ten toi la ${input1} va tuoi cua toi la${input2}
//     </div>
//     `;
//     $("body").append(p)
// })


// thay đổi kiểu của nodeElement, bằng cách get Attribute
// console.log($('.1').attr('type'))

// console.log($('.2').attr('type', 'date'))


// lấy nội dung qua .html()
// function getinput() {
//     var thongBao=""
//     let input1 = $(".input1").val();
//     let input2 = $(".input2").val();
//     if(input1 ==="" || input2 ==="") {
//         thongBao = "không được để trống";
//     } if(input2.length < 8) {
//         thongBao = "mật khẩu không được để dưới 8 ký tự";
//     } else {
//         thongBao = "Đăng nhập thành công";
//     }
//     $('.thongBao').html("")
//     $(".thongBao").append(thongBao)
// }




//bài 1: cho 1 thẻ p có nội dung là xin chào nodemy, và 1 nút button
//thực hiện sự kiện click của nút button thì đoạn text của thẻ p sẽ đổi thành nodemy xin chào các bạn

// $('.btn').click(function(){
//     $('.xinchao').html('nodemy xin chao cac bạn')
// })

// Bài 2: Cho 2 ô input và 1 thẻ p nhưng không chứa text gì cả, khi người dùng nhập vào 2 ô input lấy giá trị của 2 ô đó rồi tính tổng 2 số rồi in giá trị tổng 2 số vào thẻ p.
//  (gợi ý dùng val(), html() )

// $('.btn').click(function(){
//    var input1 = $('.input1').val().trim()
//    var input2 =  $('.input2').val().trim()
//    var number1 = Number(input1);
//    var number2 = Number(input2);
//     if(typeof number1 === 'number' && typeof number2 === 'number') {
//         var total = number1 + number2
        
//     }
//     if(Number.isNaN(total)) {
//         alert('dữ liệu truyền vào không phải là số')
//     }

//     $('.content').html('')
//     $('.content').append(total)
// })

// Bài 3: Viết 1 trang html có 2 ô input để người dùng nhập số, khi người dùng nhập xong thì in ra số lớn nhất trong 2 ô vừa nhập.

// $('.btn').click(function(){
//     var input1 = $('.input1').val().trim();
//     var input2 = $('.input2').val().trim();
    
//     var array1 = input1.split('')
//     var array2 = input2.split('')
//     var totalArray = array1.concat(array2)
//     var arrayNumber =[]
//     var length = totalArray.length
//     for(var i = 0; i < length; i++){
//         arrayNumber.push(Number(totalArray[i]))
//     }
//     var highNumber = Math.max.apply(null, arrayNumber)
//     console.log(highNumber)
//     if(Number.isNaN(highNumber)){
//         alert('dữ liệu nhập vào không phải là số')
//     } else {
            
//         $('.content').html("")
//         $('.content').append(highNumber)
//     }
// })

// Bài 3.1: cho mảng dữ liệu sau : [1,'AB','find out','show','data',43,5]. 
	// value = arr[i]
    // kiểm tra, nếu value == ‘find out' {xử lý để in ra màn hình;return}
    // Tìm vị trí của chữ ‘find out’ rồi hiển thị kết quả ra màn hình theo mẫu dưới đây:
    // Vị trí chữ ‘find out' trong mảng là : 3.

// var arr = [1,'AB','find out','show','data',43,5]
//     var length = arr.length;
// for(var i = 0; i < length; i++) {
//     value = arr[i];
//     if( value === 'find out') {
//         $('.findout').append(value);
//         $('.content').text(`Vị trí chữ ${value} trong mảng là ${arr[i]}`);
//     }   
// }

//Bài 3.2: Cho 1 input type number và 1 thẻ div có class = result(kích thước 300x400px) căn giữa màn hình . 
//Khi người dùng nhập số chẵn thì set div màu đỏ. nếu số lẻ thì set div màu xanh

// $('.btn').click(function(){
//     var value = $('.input').val().trim();
//     var numberValue = Number(value)
//     if(numberValue % 2 == 0) {
//         $('.div').attr('style', 'background-color: red;')
//     } else {
//         $('.div').attr('style', 'background-color:bisque;')
//     }
// })

// 3.3: Cho 1 thẻ input type text và button check. Khi click button check, 
//kiểm tra input theo các trường hợp sau:  vd: isNaN(value);
// hiển thị popup: input empty nếu input rỗng hoặc chỉ chứa dấu cách.
// Hiển thị popup:input has value is number nếu input chỉ chứa số.
// Hiển thị popup:input has value is string nếu input chứa string.

// $('.btn').click(function(){
//    var value = $('.input').val().trim();
//       var valueNumber = Number(value)
//    if(valueNumber == ""){
//        alert('input empty')}
//     else if(Number.isNaN(valueNumber)){
//         alert('input has value is string')
//     } else {
//         alert('input has value is number')
//     }
// })


// 3.4: Cho 3 thẻ div với 3 class tương ứng lần lượt là block-arr1, block-arr2, block-arr3.Với height mặc định là 300px.Mỗi div cho 3 màu khác nhau(tuỳ người làm chọn)
//  Tính tổng của các phần tử là số chẵn trong arr1(total1) và tổng các phần tử là số lẻ trong arr2(total2) và tổng các phần tử chia hết cho 7 trong arr3(total3). 
// set width là kết quả lần lượt của các giá trị total1,total2,total3 tương ứng với 
// block-arr1,block-arr2,block-arr3
//  Nếu total1 < total2 thì set text của div có class block-arr1 là “array1 lớn hơn array2”.
// Nếu total2 > total3 thì set text của div có class block-arr1 là “array2 lớn hơn array3”.
// Tìm giá trị nhỏ nhất trong 3 giá trị ở phần (a).Sau đó ẩn thẻ div có giá trị tương ứng.

// arr1 = [5,20,45,32];
// arr2 = [12,20,55,101];
// arr3 = [7,13,28,49];
// var value1 = []
// var value2 = []
// var value3 = []
// for(var i = 0; i < arr1.length; i++) {
//     if(arr1[i] % 2 ==0){
//         value1.push(arr1[i])
//     }
// }

// for(var i = 0; i < arr2.length; i++) {
//     if(arr2[i] % 2 !== 0) {
//         value2.push(arr2[i])
//     }
// }

// for(var i = 0; i < arr3.length; i++) {
//     if(arr3[i] % 7 ==0) {
//         value3.push(arr3[i])
//     }
// }
// var total3 = value3.reduce((total, e) => total + e, 0)
// var total2 = value2.reduce((total, e) => total + e, 0)
// var total1 = value1.reduce((total, e) => total + e, 0)

// $('.block-arr1').attr('style', `width: ${total1}` + `px`)
// $('.block-arr2').attr('style', `width: ${total2}` + `px`)
// $('.block-arr3').attr('style', `width: ${total3}` + `px`)

// if(total1 < total2){
//     var p1 = `<span class="rotate">Array1 < Array2</span>`;
//     $('.block-arr1').append(p1)
// }

// if(total2 > total3) {
//     var p2 = '<span class="rotate">Array2 > Array3</span>'
//     $('.block-arr2').append(p2)
// }

// var newArray = [total1, total2, total3]
// var lowTotal = Math.min.apply(null,newArray)

// var arrayChildren = ($('.parent').children());

// for(var i = 0; i < arrayChildren.length; i++){
//     if(arrayChildren[i].clientWidth == lowTotal) {
//        $('.parent').children()[i].classList.add('none')
//        break
//     }
// }

//Bài 4: Tạo 1 trang html theo mẫu. ()
//Khi bấm lần 1 vào một ô chứa số bất kì, thì màu nền của ô đó chuyển sang 1 màu (do người viết chọn)
//khi bấm lần 2 thì màu đó sẽ biến mất và quay trở lại màu như hình 1.

// function get_random_color1() {
//     var color;
//     function c() {
//       var hex = Math.floor(Math.random()*256).toString(16);
//       return ("0"+String(hex)).substr(-2); // pad with zero
//     }
//     color = "#"+c()+c()+c();
//     $('.div1').attr('style', `background-color: ${color};`)
// };
// function get_random_color2() {
//     var color;
//     function c() {
//       var hex = Math.floor(Math.random()*256).toString(16);
//       return ("0"+String(hex)).substr(-2); // pad with zero
//     }
//     color = "#"+c()+c()+c();
//     $('.div2').attr('style', `background-color: ${color};`)

// };
// function get_random_color3() {
//     var color;
//     function c() {
//       var hex = Math.floor(Math.random()*256).toString(16);
//       return ("0"+String(hex)).substr(-2); // pad with zero
//     }
//     color = "#"+c()+c()+c();

//     $('.div3').attr('style', `background-color: ${color};`)

// };
// function get_random_color4() {
//     var color;
//     function c() {
//       var hex = Math.floor(Math.random()*256).toString(16);
//       return ("0"+String(hex)).substr(-2); // pad with zero
//     }
//     color = "#"+c()+c()+c();
//     $('.div4').attr('style', `background-color: ${color};`)
// };

// $('.div1').click(function(){
//     get_random_color1()
// });
// $('.div2').click(function(){
//     get_random_color2()
// });
// $('.div3').click(function(){
//     get_random_color3()
// });
// $('.div4').click(function(){
//     get_random_color4()
// })

// $('.div5').click(function(){
//    $('.div5').toggleClass('active')
// })


//Bài 6:
function get_random_color1() {
    var color;
    function c() {
      var hex = Math.floor(Math.random()*256).toString(16);
      return ("0"+String(hex)).substr(-2); // pad with zero
    }
    color = "#"+c()+c()+c();
    $('.div1').attr('style', `background-color: ${color};`)
};
function get_random_color2() {
    var color;
    function c() {
      var hex = Math.floor(Math.random()*256).toString(16);
      return ("0"+String(hex)).substr(-2); // pad with zero
    }
    color = "#"+c()+c()+c();
    $('.div2').attr('style', `background-color: ${color};`)

};
function get_random_color3() {
    var color;
    function c() {
      var hex = Math.floor(Math.random()*256).toString(16);
      return ("0"+String(hex)).substr(-2); // pad with zero
    }
    color = "#"+c()+c()+c();

    $('.div3').attr('style', `background-color: ${color};`)

};
function get_random_color4() {
    var color;
    function c() {
      var hex = Math.floor(Math.random()*256).toString(16);
      return ("0"+String(hex)).substr(-2); // pad with zero
    }
    color = "#"+c()+c()+c();
    $('.div4').attr('style', `background-color: ${color};`)
};
function get_random_color5() {
    var color;
    function c() {
      var hex = Math.floor(Math.random()*256).toString(16);
      return ("0"+String(hex)).substr(-2); // pad with zero
    }
    color = "#"+c()+c()+c();
    $('.div5').attr('style', `background-color: ${color};`)
};

$('.div1').click(function(){
    $('.content1').addClass('active')
    get_random_color1()
});
$('.div2').click(function(){
    $('.content2').addClass('active')
    get_random_color2()
});
$('.div3').click(function(){
    $('.content3').addClass('active')
    get_random_color3()
});
$('.div4').click(function(){
    $('.content4').addClass('active')
    get_random_color4()
})

$('.div5').click(function(){
    $('.content5').addClass('active')
    get_random_color5()
})

console.log($('.content1'))

