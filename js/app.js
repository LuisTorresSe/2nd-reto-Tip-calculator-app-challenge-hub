//Selected of DOM 
const bill_price = document.getElementById('bill-price');
const btn_percentage = document.querySelectorAll('.btn-percentage');
const custom_tip = document.getElementById('custom_tip');
const numb_people = document.getElementById('numb-people');
const reset = document.querySelector('.reset');
const tip_by_person = document.getElementById('tip-by-person');
const total_tip = document.getElementById('total-tip');
const box_people = document.getElementById('info-number');
// variables
let price = 0; 
let percentage = 0;
let people= 0;
let totalPerson = 0;
let tipAmount = 0;

//Programming events 
bill_price.addEventListener('input',(e)=>{
   price = e.target.value;
   price = Number(price);
   calculator();
});

btn_percentage.forEach(e => { 
    e.addEventListener('mouseenter', ev =>{
        ev.target.classList.add('active')
    });

    e.addEventListener('mouseleave', ev =>{
        ev.target.classList.remove('active')
    });

    e.addEventListener('click', () =>{
        e.classList.add('select')
        percentage = e.value;
        percentage = percentage.substring(0, percentage.length-1)
        percentage  = Number(percentage);
        calculator();
        for (const value of btn_percentage) {
            if( value.attributes.value != e.attributes.value){
                value.classList.remove('select');
            }
        }
    });
});

custom_tip.addEventListener('click', (e)=>{
    for (const btn of btn_percentage) {
        btn.classList.remove('select');
    }
    percentage = 0;
    tip_by_person.textContent = `$0.00`;
    total_tip.textContent =`$0.00` ;
});

custom_tip.addEventListener('input',(e)=>{
  percentage = Number(e.target.value); 
  calculator();
});

numb_people.addEventListener('input', (e)=>{
   people = Number(e.target.value);
   
   if(e.target.value == 0 && e.target.value !=""){
       const msg =  document.createElement('P');
       msg.textContent = "Can't be zero";
       msg.classList.add('info_numb_people');
       numb_people.classList.add('numb-people-error');
       box_people.appendChild(msg);
   }
   else{
        if(box_people.children.length > 1){
            numb_people.classList.remove('numb-people-error');
            numb_people.classList.add('numb-people-active');
            box_people.removeChild(document.getElementById('info-number').lastChild);
        }
   }
   calculator();
});

reset.addEventListener('click',()=>{
    tip_by_person.textContent = `$0.00`;
    total_tip.textContent =`$0.00`;
    bill_price.value ="";
    numb_people.value = "";
    for (const per of btn_percentage) {
        per.classList.remove('select');
    }
    
    price = 0; 
    percentage = 0;
    people= 0;
    totalPerson = 0;
    tipAmount = 0;
    if(box_people.children.length > 1){
        box_people.removeChild(document.getElementById('info-number').lastChild);
        numb_people.classList.remove('numb-people-error');
        numb_people.classList.add('numb-people-active');

    }
   
});


const calculator = ()=>{
    if( price != 0 && percentage != 0 && people != 0){
        tipAmount = price * (percentage/100);
        tipAmount= tipAmount.toFixed(2);
        totalPerson = tipAmount*people;
        totalPerson = totalPerson.toFixed(2);
        tip_by_person.textContent = `$${String(tipAmount)}`;
        total_tip.textContent = `$${String(totalPerson)}` ;
    }
}


