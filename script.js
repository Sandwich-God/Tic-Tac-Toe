Player1 = [];
Player2 = [];
Pturn = 1;
Psign = '';
clicked = '';
TorF = true;
imgTorF = true;

function ReturnedValue(RV) {
	if (TorF)
	{
		clicked = RV;
		PlayerPatterns()
		ChangeImg()
		TorF = false;
		Reset()
	}
	
}

function Reset() {
	clicked = '';
	TorF = true;
	imgTorF = true;
}

function PlayerPatterns() {
	scan1 = Player1.indexOf(clicked);
	scan2 = Player2.indexOf(clicked);
	scan = scan1 + scan2;
	if (Pturn == 1)
	{
		if (scan < -1)
		{
			Player1.push(clicked);
			Psign = 'o';
			Pturn = 2;
		}
		else 
		{
			imgTorF = false;
		}
	}
	else
	{
		if (scan < -1)
		{
			Player2.push(clicked);
			console.log(Psign);
			Psign = 'x';
			Pturn = 1;
		}
		else
		{
			imgTorF = false;
		}
	}
}

function ChangeImg() {
	if (imgTorF)
	{
		document.getElementById(clicked).src = 'images/' + Psign + '.png';
	}
}