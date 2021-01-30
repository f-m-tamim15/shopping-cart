const sum = document.getElementById("first-plus");
sum.addEventListener("click",function(){
    var caseInput = document.getElementById('input-count');
    var caseCount = parseInt(caseInput.value);
    var caseNewCount = caseCount + 1;
    caseInput.value = caseNewCount;
     calculateTotal();
});
const sub = document.getElementById('first-minus');
sub.addEventListener('click',function(){
    var caseInput = document.getElementById('input-count');
    var caseCount = parseInt(caseInput.value);
    var caseNewCount = caseCount - 1;
    caseInput.value = caseNewCount;
   

     calculateTotal();

})

const economyPlus = document.getElementById("second-plus");
economyPlus.addEventListener("click",function(){

    var economyInput = document.getElementById('economy');
    var economyCount = parseInt(economyInput.value);
    var economyNewCount = economyCount + 1;
    economyInput.value = economyNewCount;
     calculateTotal();

})


const economyMinus = document.getElementById("second-minus");

var product = economyMinus.addEventListener("click",function(){
    var economyInput = document.getElementById('economy');
    var economyCount = parseInt(economyInput.value);
    var economyNewCount = economyCount -  1;
    economyInput.value = economyNewCount;
     calculateTotal();
})

function calculateTotal(){
    const firstClass = document.getElementById('input-count');
    const firstCount = parseInt(firstClass.value);
    
    const economyClass =  document.getElementById('economy');
    const economyCount = parseInt(economyClass.value);

    const totalPrice = firstCount * 150 + economyCount *100;
    document.getElementById('sub-total').innerText = totalPrice;

    const tax = totalPrice * 0.1;
     

    document.getElementById('taxAmount').innerText = tax;

    const grandTotal = tax + totalPrice ;
    document.getElementById('total').innerText = grandTotal;



}

function bookNow(){

    alert('Congratulation ticket is confirm');
    
 

}