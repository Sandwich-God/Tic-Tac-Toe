Player1 = [];
Player2 = [];
CV = '';
Pturn = 1;
Psign = '';
clicked = '';
TorF = true;
imgTorF = true;
endTorF = true;
RIV = 1;
End = false;

function ReturnedValue(RV) {
	if (TorF)
	{
		clicked = RV;
		PlayerPatterns()
		ChangeImg()
		x = 0;
		y = 0;
		TorF = false;
		if (endTorF)
		{
			EndTurn()
		}
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
	if (End)
	{
		for (C = 0; C < 3; C++)
		{
			document.getElementById(winP[CV].win[C]).style.color = 'black';
		}
	}
	
	C = 0;
	CV = '';
	document.getElementById('winner').innerHTML = '';
	Player1 = [];
	Player2 = [];
	Pturn = 1;
	Psign = '';
	clicked = '';
	TorF = true;
	imgTorF = true;
	endTorF = true;
	End = false;
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
			checkP1()
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
			Psign = 'x';
			checkP2()
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
		document.getElementById(clicked).innerHTML = Psign;
	}
}
x = 0;
y = 0;

test = 0;
// OArray = [win.r1, win.r2, win.r3, win.g1, win.g2, win.g3, win.lrd, win.rld];
// IWOA = OArray[test];

function checkP1() {
	for (y = 0; y < 8; y++)
	{
		for (x = 0; x < 3; x++)
		{
			testingv = Player1.includes(winP[y].win[x]);
			checkP1A()
		}
		
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
				document.getElementById('winner').innerHTML = 'You win player ' + Pturn + '!';
				for (C = 0; C < 3; C++)
				{
					document.getElementById(winP[y].win[C]).style.color = 'blue';
					CV = y;
					End = true;
				}
				C = 0;
				endTorF = false;
			}
		}
	}
	else
	{
		winP[y].CHTorF = [];
	}
}

function checkP2() {
	for (y = 0; y < 8; y++)
	{
		for (x = 0; x < 3; x++)
		{
			testingv = Player2.includes(winP[y].win[x]);
			checkP2A()
		}
	}
}
function checkP2A() {
	if (testingv)
	{
		winP[y].CHTorF2.push(testingv);
		if (x == 2)
		{
			if (winP[y].CHTorF2.length > 2)
			{
				document.getElementById('winner').innerHTML = 'You win player ' + Pturn + '!';
				for (C = 0; C < 3; C++)
				{
					document.getElementById(winP[y].win[C]).style.color = 'blue';
					CV = y;
					End = true;
				}
				C = 0;
				endTorF = false;
			}
		}
	}
	else
	{
		winP[y].CHTorF2 = [];
	}
}

var winP = [
	{
	win: ['1','2','3'],
	CHTorF: [],
	CHTorF2: []
},
	{
	win: ['4','5','6'],
	CHTorF: [],
	CHTorF2: []
},
	{
	win: ['7','8','9'],
	CHTorF: [],
	CHTorF2: []
},
	{
	win: ['1','4','7'],
	CHTorF: [],
	CHTorF2: []
},
	{
	win: ['2','5','8'],
	CHTorF: [],
	CHTorF2: []
},
	{
	win: ['3','6','9'],
	CHTorF: [],
	CHTorF2: []
},
	{
	win: ['1','5','9'],
	CHTorF: [],
	CHTorF2: []
},
	{
	win: ['3','5','7'],
	CHTorF: [],
	CHTorF2: []
	}
];