const calcBut = document.querySelector('.buttonCalculte')
const cancelBut = document.querySelector('.buttonCancel')

function calc() {
  const res = document.querySelectorAll('.res')
  const inpBlack = Number(document.getElementById('black').value)
  const inpWhite = Number(document.getElementById('white').value)
  const solder = Number(document.getElementById('solder').value)
  let talc = document.getElementById('talc').value

  const marshrut = document.querySelector('.marshrut')
  const inpBlackNum = document.querySelector('.resBlackNum')
  const resWhiteNum = document.querySelector('.resWhiteNum')
  const resSiMNum = document.querySelector('.resSiMNum')
  const resProvNum = document.querySelector('.resProvNum')
  const resPripoyNum = document.querySelector('.resPripoyNum')
  const resKanifNum = document.querySelector('.resKanifNum')
  const resSpirtNum = document.querySelector('.resSpirtNum')
  const resNefrNum = document.querySelector('.resNefrNum')
  const resTalcNum = document.querySelector('.resTalcNum')

  if(inpBlack == '' && inpWhite == '' && solder == '' && talc == '') {
    marshrut.innerText = 'Введите данные';
  } else {
    marshrut.innerText = '335 (8502, 0190, 0186) ПС 335';
  }
  if (solder !== '' && solder !== 0) {
    marshrut.innerText = '335 (8502, 8000, 0190, 0186) ПС 335';
  }
  inpBlackNum.innerText = `${Math.round((inpBlack + inpWhite)*0.002*1000000000)/1000000000}`;
  resWhiteNum.innerText = `${Math.round((inpWhite*0.002)*1000000000)/1000000000}`;
  resSiMNum.innerText = `0`;
  if (inpWhite !== '' && inpWhite !== 0) {
    resSiMNum.innerText = `${0.0001}`;
  }
	resProvNum.innerText = "0";
	if (inpBlack !== 0 || inpWhite !== 0 || solder !== 0 || talc !== "") {
		resProvNum.innerText = `${0.0005}`;
	}
	console.log(inpBlack, inpWhite, solder, talc)
  resPripoyNum.innerText = `${Math.round(solder*0.0003*1000000000)/1000000000}`;
  resKanifNum.innerText = `${Math.round(0.00006*100000000000*solder)/100000000000}`;
  resSpirtNum.innerText = `${Math.round((((inpBlack + inpWhite)*0.00001)/2 + (solder*0.0004)/2 + solder*0.00015)*1000000000)/1000000000}`;
  resNefrNum.innerText = `${Math.round((((inpBlack + inpWhite)*0.00001)/2 + (solder*0.0004)/2)*1000000000)/1000000000}`;
  resTalcNum.innerText = '0';
  if (talc !== '') {
    if (talc.includes(',')) {
      talc = talc.replace(/,/g, '.');
    }
    resTalcNum.innerText = `${Math.round(eval(talc)*0.03*1000000000)/1000000000}`;    
  }

  res.forEach((re) => {
    if(re.classList.contains('hidden')) {
      re.classList.remove('hidden');
      re.previousElementSibling.classList.remove('hidden');
    }
  });

  res.forEach((re) => {
    if(re.innerText == 0) {
      re.classList.add('hidden');
      re.previousElementSibling.classList.add('hidden');
    }
  });
}

/*let copy = [];

function text() {
	let copy = [];

	let arr = [document.querySelector('.marshrut').innerText,
	document.querySelector('.resBlackNum') .innerText == "0" ? "" : `Маркер черный ${document.querySelector('.resBlackNum') .innerText} шт.`,
	document.querySelector('.resWhiteNum') .innerText == "0" ? "" : `Маркер белый ${document.querySelector('.resWhiteNum').innerText} шт.`,
	document.querySelector('.resSiMNum') .innerText == "0" ? "" : `Смазка Si-M ${document.querySelector('.resSiMNum').innerText} кг`,
	document.querySelector('.resPripoyNum') .innerText == "0" ? "" : `Припой ${document.querySelector('.resPripoyNum').innerText} кг`,
	document.querySelector('.resKanifNum') .innerText == "0" ? "" : `Канифоль ${document.querySelector('.resKanifNum').innerText} л`,
	document.querySelector('.resSpirtNum') .innerText == "0" ? "" : `Спирт ${document.querySelector('.resSpirtNum').innerText} л`,
	document.querySelector('.resNefrNum') .innerText == "0" ? "" : `Нефрас ${document.querySelector('.resNefrNum').innerText} л`,
	document.querySelector('.resTalcNum') .innerText == "0" ? "" : `Тальк ${document.querySelector('.resTalcNum').innerText} кг`];

	for(let i=0; i<9; i++) {
		arr[i] == "" ? arr : copy.push(arr[i]);
	}
	

	//copy = copy.toString()
	console.log(copy);
}*/

/*document.querySelector('.result').onclick = function() {
  copy.select();    
  document.execCommand("copy");
}*/





calcBut.addEventListener('click', () => {
  calc();
	//text();
});

document.addEventListener('keydown', function(event) {
  if (event.keyCode == 13) {
    calc();
		//text();
  }
  if (event.keyCode == 111) {
    cancel();
    document.getElementById('black').focus();
    document.getElementById('black').classList.add("active");
  }
  if (event.keyCode == 35) {
    const inp1 = document.querySelector('.inp1')
    const inp2 = document.querySelector('.inp2')
    const inp3 = document.querySelector('.inp3')
    const inp4 = document.querySelector('.inp4')

    if (inp1.classList.contains("active")) {
      inp1.classList.remove("active");
      inp2.classList.add("active");
      inp2.focus();
    } else if (inp2.classList.contains("active")) {
      inp2.classList.remove("active");
      inp3.classList.add("active");
      inp3.focus();
    } else if (inp3.classList.contains("active")) {
      inp3.classList.remove("active");
      inp4.classList.add("active");
      inp4.focus();
    } else if (inp4.classList.contains("active")) {
      inp4.classList.remove("active");
      inp1.classList.add("active");
      inp1.focus();
    }
  }
});

cancelBut.addEventListener('click', () => {
  cancel();
});


function cancel() {
  const res = document.querySelectorAll('.res')

  document.getElementById('black').value = '';
  document.getElementById('white').value = '';
  document.getElementById('solder').value = '';
  document.getElementById('talc').value = '';

  document.querySelector('.marshrut').innerText = '';
  document.querySelector('.resBlackNum').innerText = '';
  document.querySelector('.resWhiteNum').innerText = '';
  document.querySelector('.resSiMNum').innerText = '';
  document.querySelector('.resProvNum').innerText = '';
  document.querySelector('.resPripoyNum').innerText = '';
  document.querySelector('.resKanifNum').innerText = '';
  document.querySelector('.resSpirtNum').innerText = '';
  document.querySelector('.resNefrNum').innerText = '';
  document.querySelector('.resTalcNum').innerText = '';

  res.forEach((re) => {
    if(re.classList.contains('hidden')) {
      re.classList.remove('hidden');
      re.previousElementSibling.classList.remove('hidden');
    }
  });
}

