<script>	
	function Validate()  { 
		var pw= document.getElementById("Password").value ;
		var Email = document.getElementById("UserName");
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
			
		if(Email.value.match(mailformat) && pw.length > 6 )  
		//if(Email.length > 5  )  
		{  
			document.getElementById("Submit").disabled=false;  
			return true;  
		}  
		else  
		{ 
			document.getElementById("Submit").disabled=true; 
			return false;  
		}  
	} 
</script>