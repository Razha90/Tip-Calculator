var persenTip = document.getElementsByClassName('four-bayar');
var jumlahTip = document.getElementById('jumlah-tip');
var totalTip = document.getElementById('total-tip');

var totalPeople = document.getElementById('total-people');
var numberErr = document.getElementById('number-eror');

var totalBill = document.getElementById('total-bill');

var resetBut = document.getElementsByClassName('reset-count');

var custom = document.getElementById('custom');

persenTip[0].addEventListener('click', () => {
    calculateBill(0.05);
})

persenTip[1].addEventListener('click', () => {
    calculateBill(0.1);
})

persenTip[2].addEventListener('click', () => {
    calculateBill(0.15);
})

persenTip[3].addEventListener('click', () => {
    calculateBill(0.25);
})

persenTip[4].addEventListener('click', () => {
    calculateBill(0.5);
})

custom.addEventListener('keypress', (e)=> {
    if (e.key == 'Enter') {
        var boom = custom.value / 100 ;
        calculateBill(boom);
    }
})


const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
  })

  var totalP = true;
  var totalV = true;
function calculateBill(num) {
    if (totalPeople.value == 0 || totalPeople.value == '') {
        numberErr.style.display = 'block';
        totalPeople.style.outline = '1px solid red';
        totalP = false ;
        jumlahTip.innerHTML = '0.00';
    totalTip.innerHTML = '0.00';
    } else {
        numberErr.style.display = 'none';
        totalPeople.style.outline = '';
        totalP = true
    }
    if (totalBill.value == 0 || totalBill.value == '') {
        totalBill.style.border = '1px solid red'; 
        jumlahTip.innerHTML = '0.00';
    totalTip.innerHTML = '0.00';
        totalV = false ;
    } else {
        totalBill.style.border = ''; 
        totalV = true;
    }

    var varian = totalBill.value * num  ;
    var tip = varian / totalPeople.value;
    var tipTotal = (totalBill.value * (1 + num)) / totalPeople.value;
    var tipAmont = Number(tip);
    var tipTnum = Number(tipTotal);
    if (totalP == true && totalV == true) {
    jumlahTip.innerHTML = formatter.format(tipAmont);
    totalTip.innerHTML = formatter.format(tipTnum);
    }
}

function kimmy() {
    totalBill.value = '';
    totalPeople.value = '';
    jumlahTip.innerHTML = '0.00';
    totalTip.innerHTML = '0.00';
}

resetBut[0].addEventListener('click', () => {
    totalBill.value = '';
    totalPeople.value = '';
    jumlahTip.innerHTML = '0.00';
    totalTip.innerHTML = '0.00';
})