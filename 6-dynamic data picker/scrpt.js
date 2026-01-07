// const picker = document.getElementById('picker');
// const date = document.getElementById('date');
// const today = new Date().toLocaleDateString('en-CA');
// picker.value = today;
// picker = addEventListener('change',(event)=>{
//  const selectedDate = event.target.value;
//   date.textContent ="selected date is "+selectedDate;
// });

const picker = document.getElementById('picker');
const date =  document.getElementById('date');

const today =new Date().toLocaleDateString('en-CA');
 picker.value = today;

 picker.addEventListener