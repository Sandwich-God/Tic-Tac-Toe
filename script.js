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

test = 0;
// OArray = [win.r1, win.r2, win.r3, win.g1, win.g2, win.g3, win.lrd, win.rld];
// IWOA = OArray[test];

function checkP1() {
	while (x < 3)
	{
		testingv = Player1.includes(winP[y].win[x]);
		checkP1A()
		x++;
	}
}
function checkP1A() {
	if (testingv)
	{
		winP[y].CHTorF.push(testingv);
		if (x == 2)
		{
			if (winP[y].CHTorF.length > 2)
			{
				console.log('win');
			}
			else
			{
				winP[y].CHTorF = [];
			}
		}
	}
	if (y != 8)
	{
		checkP1()
	}
}

function checkP2() {
	while (x < 3)
	{
		testingv = Player2.includes(winP[0].CHTorF[x]);
		checkP2A()
		x++;
	}
}
function checkP2A() {
	if (testingv)
	{
		if (winP[0].CHTorF.length > 2)
		{
		}
		else
		{
			winP[0].CHTorF = [];
		}
	}
}

var winP = [
	{
	win: ['1','2','3'],
	CHTorF: []
},
	{
	win: ['4','5','6'],
	CHTorF: []
},
	{
	win: ['7','8','9'],
	CHTorF: []
},
	{
	win: ['1','4','7'],
	CHTorF: []
},
	{
	win: ['2','5','8'],
	CHTorF: []
},
	{
	win: ['3','6','9'],
	CHTorF: []
},
	{
	win: ['1','5','9'],
	CHTorF: []
},
	{
	win: ['3','5','7'],
	CHTorF: []
	}
];