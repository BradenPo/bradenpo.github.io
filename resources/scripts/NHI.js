<script>

function nhi_validate()
	{
	var nhi =document.getElementById("NHI").value 
	if (nhi=='')
		{
		return
		}
	//test for 3 letters and 4 digits
		var regnhi = /^([A-hj-np-xA-HJ-NP-X]){3}([0-9]){4}?$/;
		if(regnhi.test(nhi) == false  )
			{
				Test1=false
			}
		else
			{
				Test1=true
			}
	//Test NHI Validation routine
	
	var c1 = numerate(nhi.charAt(0))*7
	var c2 = numerate(nhi.charAt(1))*6	
	var c3 = numerate(nhi.charAt(2))*5
	var c4 = nhi.charAt(3)*4
	var c5 = nhi.charAt(4)*3	
	var c6 = nhi.charAt(5)*2	
	var c7 = nhi.charAt(6)*1	
	var cTotal = c1+c2+c3+c4+c5+c6
	
	if ( cTotal % 11 == 0)
		{
		var Test2=false
		}
		else
		{
		var checkdigit = 11- cTotal % 11;
		if(checkdigit == 10)
			{
			checkdigit = 0
			}
			
		if(c7==checkdigit)
			{
			var Test2=true
			}
			else
			{
			var Test2=false
			}
		}
	
	
	//Set Result	
		if(Test1 == false || Test2==false)
			{
				nhi.style.backgroundColor ='Red';
				document.getElementById("Action").disabled=true;
			}
		else
			{
				nhi.style.backgroundColor ='Green';
				document.getElementById("NHI").value =document.getElementById("NHI").value.toUpperCase(); 
				//document.theForm.SubmitButton.disabled=false;
				document.getElementById("Action").disabled=false;
			}
			
	// Convert leter to digit 
	function numerate (letter)
		{	
		var letter= letter.toUpperCase();
		switch (letter)
				{
					case "A" :
					var x='1'
					break;
					case "B":
					var x='2'
					break;
					case "C":
					var x='3'
					break;
					case "D":
					var x='4'
					break;
					case "E":
					var x='5'
					break;
					case "F":
					var x='6'
					break;
					case "G":
					var x='7'
					break;
					case "H":
					var x='8'
					// i IS INVALID
					break;
					case "J":
					var x='9'
					break;
					case "K":
					var x='10'
					break;
					case "L":
					var x='11'
					break;	
					case "M":
					var x='12'
					break;
					case "N":
					var x='13'
					break;
					// O IS INVALID
					case "P":
					var x='14'
					break;
					case "Q":
					var x='15'
					break;
					case "R":
					var x='16'
					break;
					case "S":
					var x='17'
					break;
					case "T":
					var x='18'
					break;
					case "U":
					var x='19'
					break;
					case "V":
					var x='20'
					break;
					case "W":
					var x='21'
					break;
					case "X":
					var x='22'
					break;
					case "Y":
					var x='23'
					break;
					case "Z":
					var x='24'
				}
	return x;
	}
}	

</script>