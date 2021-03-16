Player1 = [];
Player2 = [];

Pturn = 1;
Psign = '';
clicked = '';
TorF = true;
imgTorF = true;
RIV = 1;

function ReturnedValue(RV) {
	if (TorF)
	{
		clicked = RV;
		PlayerPatterns()
		ChangeImg()
		x = 0;
		TorF = false;
		EndTurn()
	}
	
}

function EndTurn() {
	clicked = '';
	TorF = true;
	imgTorF = true;
}

function ResetButton() {
	while (RIV != 10)
	{
		document.getElementById(RIV).innerHTML = '';
		RIV++;
	}
	Player1 = [];
	Player2 = [];
	Pturn = 1;
	Psign = '';
	clicked = '';
	TorF = true;
	imgTorF = true;
	RIV = 1;
	x = 0;
	y = 0;
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
var win = {
	r1: ['1','2','3'],
	r2: ['4','5','6'],
	r3: ['7','8','9'],
	g1: ['1','4','7'],
	g2: ['2','5','8'],
	g3: ['3','6','9'],
	lrdiagonal: ['1','5','9'],
	rldiagonal: ['3','5','7']
};
function testing(test) {
	return test == r1[x];
}

function checkP1() {
/*	while (x <= y)
	{
		check = Player1.find(testing);
		checktesting.push(check);
		console.log(checktesting);
		x++;
	}
*/
	while (x < 3)
	{
		testingv = Player1.includes(win.r1[x]);
		console.log(testingv);
		if (testingv) {

		}
		x++;
	}
}

function checkP2() {
	while (x < 3)
	{
		testingv = Player2.includes(win.r1[x]);
		console.log(testingv);
		if (testingv) {

		}
		x++;
	}
}