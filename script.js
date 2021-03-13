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
		x = 0;
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
			checkP1()
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
			Psign = 'x';
			Pturn = 1;
			checkP2()
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
		document.getElementById(clicked).innerHTML = Psign;
	}
}
x = 0;
y = 0;
checktesting = [];
r1 = [1,2,3];
g1 = [1,4,7]; //13
g3 = [3,6,9]; //18
r3 = [7,8,9]; //24
function testing(test) {
	return test == '1';
}


lrdiagonal = [1,5,9]; //15
rldiagonal = [3,5,7]; //15
r2 = [4,5,6]; //15
g2 = [2,5,8]; //15

function checkP1() {
	while (x <= y)
	{
		check = Player1.find(testing);
		checktesting.push(check);
		console.log(checktesting);
		x++;
	}
	y++;
}

function checkP2() {
	check = Player2.find(testing);
}