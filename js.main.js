function htt_orion(){

setTimeout(function(){


swal({  

 title: "Bạn nhận được một món quà !",   
text: "Lee Cường vừa gửi bạn một món quà đặc biệt nhân ngày sinh nhật của bạn ", 
 imageUrl: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/242237168_1433258357104864_6223399705971305413_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5oRig7A3f0AAX8zxXXV&_nc_oc=AQlVYsQcooIMqM_k2ztTo_YbE835GHfpcp_gwa0n2YL7RXyuszT6Aqy5AUsBikTJ8rfN7uxNYTqQwYNXRca9RZXl&_nc_ht=scontent.fdad1-2.fna&oh=604fa9e3a5d5a69dc9ef447cf51da289&oe=61528FF1",
  showCancelButton: true,
   confirmButtonColor: "#DD6B55", 
  confirmButtonText: "Nhận quà ngay",
   cancelButtonText: "Không cần, cám ơn .", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Bạn có phải là Võ Hà ? ", 
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
 swal("OK ! ", "Món quà : " + inputValue + " sẽ được tặng cho Hà trong nữa hãy đợi nhé, Chúc một ngày Sinh Nhật thật Vui Vẻ nhé ^^   ", "success");
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

