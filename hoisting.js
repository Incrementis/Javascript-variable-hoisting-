function Start()
{
	//Hitpoints
	var yHP = document.getElementById('Yhp');
	var cHP = document.getElementById('Chp');
	
	//Strength
	var yStr = document.getElementById('Ystr');
	var cStr = document.getElementById('Cstr');
	
	var result = document.getElementById('result');
	
	
	//Define strength of oponent - "Math.floor" means rounding up!	
	cStr.value = Math.floor( (Math.random() * 29) + 1 );
	
	
	
	/*
		ATTENTION:
		The "for" loop contains hoisted variables ("i" and "loopStr")
	*/
	for(var i = 0; i <= 2; i++)
	{
		//Critical Hit
		if(i !== 0 && loopStr === 30 )
		{
			loopStr = Math.floor( (Math.random() * 29) + 1 );	
			break;
		}
		else
		{
			loopStr = Math.floor( (Math.random() * 29) + 1 );			
		}
	}
	
	/*
		ATTENTION: 
		"loopStr" is still the same variable as in the for loop!
		"i" is used as a multiplicator for the strength value. 
		
	*/
	var loopStr;
	yStr.value = loopStr * i;
	
	//Reset
	loopStr = 0;
	
	
	
	
	/*
		NOTE: 
		The plus signs are used to convert strings into numbers.
		The whole code serves only illustration and could be optimized.
	*/
	//Checking Hitpoints
	if( (+yHP.textContent) > 0 && (+cHP.textContent) > 0 )
	{
		//Checking Hits
		if( (+yStr.value) > (+cStr.value) )
		{
			
			cHP.innerHTML = (+cHP.textContent) - yStr.value;
					
			result.innerHTML = "YES, your hit connects!"
			
		}
		else if( (+yStr.value) < (+cStr.value) )
		{
			
			yHP.innerHTML = (+yHP.textContent) - cStr.value; 
			
			result.innerHTML = "Ouch, you were hit!"
			
		}
		else
		{

			result.innerHTML = "You both missed!"
			
		}
	}
	else
	{
		result.innerHTML = "Competition ends and flexing muscles has no effect anymore!"
	}
	
	

}


