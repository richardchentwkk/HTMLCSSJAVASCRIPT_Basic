<?php
	//http://localhost:8080/city.php?city=taipei
	$city = $_REQUEST["city"];
	if($city=="taipei"){
		echo "300 wan.";
	}else if($city=="hsinchu"){
		echo "30 wan.";
	}else{
		echo "No data.";
	}
	/* Square test.
	$x = $_REQUEST["x"];
	echo $x*$x;*/

	//Basic test.
	//echo "<b>Hello</b> world.<script>alert('')</script>";
?>