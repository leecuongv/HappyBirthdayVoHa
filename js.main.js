function htt_orion(){

setTimeout(function(){


swal({  

 title: "Bạn nhận được một món quà !",   
text: "Lee Cường vừa gửi bạn một món quà đặc biệt nhân ngày sinh nhật của bạn ", 
 imageUrl: "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/275857915_1557837727980259_3533100780908852395_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=g-Kq2xqTic4AX9M42g7&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT_3N7EGohV03MKCImGzRV1cOlsHaQKXT_YlimE07tdHgg&oe=6337FC6A",
  showCancelButton: true,
   confirmButtonColor: "#DD6B55", 
  confirmButtonText: "Nhận quà ngay",
   cancelButtonText: "Không cần, cám ơn .", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Bạn có phải là Hà ?? ", 
  text: "Nhập mã xác nhận ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "Mã xác nhận là gì ?" },
 function(inputValue){   
if (inputValue === false) return true;   
   if (inputValue !== "aibiet") {   
  swal.showInputError("Nhập sai rồi kìa :v ");   
  return true   }   
 
setTimeout(function(){


swal({  
 title: "Nhập tên món quà nào đó ", 
  text: "Hà muốn nhận quà gì nào ? ",  
 type: "input",  

 showCancelButton: true,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: "Mình ,Cường, Lee Cường, .... " },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Không thể để trống được ");   
  return false   }  
 swal("OK ! ", "Món quà : " + inputValue + " sẽ được tặng cho Hà ngay hãy đợi nhé, Chúc một ngày Sinh Nhật thật Vui Vẻ nhé (´▽`ʃ♡ƪ) ", "success");
});
    
    

},3000);


});

 }
else {   
  swal("KHÔNG NHẬN ", "Bạn vừa từ chối món quà từ Lee Cường ,    Ấn F5 nếu muốn nhận lại quà :D ", "error"); 

  } });



},8000);
}
htt_orion();

