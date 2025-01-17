const counterelement=document.getElementById('counter');
const plusbtn=document.getElementById('plus-btn');
const minusbtn=document.getElementById('minus-btn');

let counter=0;

const updatecounter= (value) => {
    counter=counter+value;
    counterelement.textContent=counter;


    //minus
    /*    if(counter>=10){
      plusbtn.setAttribute('disabled',true);
    }
  
    else{
      plusbtn.removeAttribute('disabled',false);
    }
      */


 
/*
    if(counter<=0){
        minusbtn.setAttribute('disabled',true);
    }

    else{
        minusbtn.setAttribute('disabled');
    }

    */
  }



plusbtn.addEventListener('click',() => {
    updatecounter(1);
    });



minusbtn.addEventListener('click',() => {
    updatecounter(-1);
  });