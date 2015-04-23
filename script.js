
$( document ).ready(function() {
$('#mySelect').change(function(){
var selectNum = $('#mySelect');
var fmapVal = parseInt(selectNum.val());

    
if (!(fmapVal >=0 && fmapVal <=10)) {
  $('#result').html('Please Select A Number');
} else {
  var e = fmapVal *149;
  $('#result').html('$'+e);
}
  });


});


 function show_alert() {
                alert("Thanks for Shopping with us!");
            }


  
