<script>
	function checkPass()
{
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if(pass1.value == pass2.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
    }
} 
</script>

<script type="text/javascript"> {

  // polyfill for RegExp.escape
  if(!RegExp.escape) {
    RegExp.escape = function(s) {
      return String(s).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
    };
  }

</script>

<script>
	var inputs = $("form#newUser input, form#newUser textarea");

	var validateInputs = function validateInputs(inputs) {
	  var validForm = true;
	  inputs.each(function(index) {
	    var input = $(this);
	    if (!input.val() || (input.type === "radio" && !input.is(':checked'))) {
	      $("#Submit").attr("disabled", "disabled");
	      validForm = false;
	    }
	  });
	  return validForm;
	}

	inputs.change(function() {
	  if (validateInputs(inputs)) {
	    $("#Submit").removeAttr("disabled");
	  }
	});	
</script>