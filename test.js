Player1 = [];
Player2 = [];

Pturn = 1;
Psign = '';
clicked = '';
imgTorF = true;
TorF = true;

function ReturnedValue(RV) {
	if (TorF)
	{
		clicked = RV;
		PlayerPatterns()
		ChangeImg()
	}
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
			check()
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
	clicked = '';
	TorF = true;
	imgTorF = true;
	x = 0;
	y = 0;
}
function check() {
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
				console.log('win');
			}
		}
	}
	else
	{
		winP[y].CHTorF = [];
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