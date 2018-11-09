setInterval(move, 20);
	var head = document.getElementById("snakeHead"); 
	var food = document.getElementById("food");

	var moveDir = "S";
	var reset = 0;
	var headX = 0;
	var headY = 0;
	
	var screenW = window.innerWidth;
	var screenH = window.innerHeight;
	var foodLocationX = Math.floor(Math.random() * (screenW+ 1));
	var foodLocationY = Math.floor(Math.random() * (screenH+ 1));

	food.style.left = foodLocationX+'px';
	food.style.top = foodLocationY+'px';
	
	
	
	function anim(e) 
	{ 
		if (e.keyCode == 39)
		{
			moveDir = "R";
		}
		else if (e.keyCode == 37)
		{
			moveDir = "L";
		}
		else if (e.keyCode == 40)
		{
			moveDir = "D"; 
		}
		else if (e.keyCode == 38)
		{
			moveDir = "U";
		}
		else if (e.keyCode == 83)
		{
			moveDir = "S";
		}
		else if (e.keyCode == 82)
		{
			reset = 1;
		}
	}
	document.onkeydown = anim;


	function move()
	{
		var offset = 5;
		if(moveDir == "R")
		{
			headX += offset;
		}
		else if(moveDir == "L")
		{
			headX -= offset;

		}
		else if(moveDir == "D")
		{
			headY += offset;
		}
		else if(moveDir == "U")
		{
			headY -= offset;
		}
		head.style.left = headX+'px';
		head.style.top = headY+'px';
		
		
		if((foodLocationX > headX && foodLocationX < headX + 40) &&
			foodLocationY > headY && foodLocationY < headY + 40)
		{
				foodLocationX = Math.floor(Math.random() * (screenW+ 1));
				foodLocationY = Math.floor(Math.random() * (screenH+ 1));

				food.style.left = foodLocationX+'px';
				food.style.top = foodLocationY+'px';
		}

		if((headX + 40 > screenW) || (headX < 0 ) ||
		   (headY + 40 > screenH) || (headY < 0))
			{
				document.getElementById("message").style.display = "block";
				head.style.display = "none";
				food.style.display = "none";
			}
			else
				food.style.backgroundColor = "green";
			
		if(reset == 1)
		{
			headX = 0;
			headY = 0;
			moveDir = "S";
			reset = 0 ;
			document.getElementById("message").style.display = "none";
			head.style.display = "block";
			food.style.display = "block";
		}
		
	}