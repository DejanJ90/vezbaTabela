var installment1 = document.getElementsByClassName("installment-1");
var installment2 = document.getElementsByClassName("installment-2");
var installment3 = document.getElementsByClassName("installment-3");
var ukm1 = document.querySelector(".ukm.ukm-1");
var ukm2 = document.querySelector(".ukm.ukm-2");
var ukm3 = document.querySelector(".ukm.ukm-3");

function calc(arry) {

    var paid = 0;

    for (var i = 0; i < arry.length; i++) {

        if (arry[i].className === "column-sm paid " + arry[i].classList[2] + " placeno") {
            paid += parseInt(arry[i].innerText);
        }

    };

    return paid;
};

function compare(arry) {
    var sum = 0

    for (var i = 0; i < arry.length; i++) {
        console.log(arry[i].previousElementSibling.classList);

        console.log(arry[i].previousElementSibling.classList[3]);

        if (arry[i].previousElementSibling.classList[3] === "placeno" && arry[i].classList[3] !== "placeno") {
            sum += parseInt(arry[i].innerText);
        }
    }

    return sum;
};



    ukm1.innerText = calc(installment1) + ".00 ";
    ukm2.innerText = calc(installment2) + ".00 " + " (" + compare(installment2) + ".00 " + ")";
    ukm3.innerText = calc(installment3) + ".00 " + " (" + compare(installment3) + ".00 " + ")";
