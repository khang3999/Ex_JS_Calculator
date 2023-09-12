//Node ket qua
const showResuiltNode = document.querySelector('.show-result');
//Node key AC, CE
const clearNodes = document.querySelectorAll('.btn-clear');
//Node key number
const numberAndOperatorNodes = document.querySelectorAll('.btn-number, .btn-operator');
//Node key equal
const equalNode = document.querySelector('.btn-equal')

let check = false;
//Xu li nut AC, CE
clearNodes.forEach(e => {
    e.addEventListener('click', function () {
        if (this.textContent === 'AC') {
            showResuiltNode.textContent = "";
        }
        else{
            showResuiltNode.textContent = showResuiltNode.textContent.substring(0, showResuiltNode.textContent.length - 1);
        }
    })
});

//Xu li cac nut number, operator
numberAndOperatorNodes.forEach(e => {
    e.addEventListener('click', function () {
        if (check == true) {
            showResuiltNode.textContent = '';
        }
        showResuiltNode.textContent += e.textContent;
        check = false;
    })
});

//Xu li nut equal
equalNode.addEventListener('click', function () {
    let a = showResuiltNode;
    let b = Number(a.textContent.substring(0, a.textContent.length - 1));
    let rs = 0;
    if ((a.textContent.indexOf('%') === a.textContent.length - 1) && b != NaN) {
        a.textContent = eval(b+'/100');
    }
    else{
        a.textContent = eval(a.textContent);
    }
    check = true;
});


