'use strict';

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let msg = document.querySelector('.dummy-msg');

btn1.addEventListener('mouseenter', e => {
  console.log('Haloo');

  e.target.classList.add('hidden');
  btn2.classList.remove('hidden');
});
btn3.addEventListener('click', e => {
  msg.classList.remove('hidden');
});

btn2.addEventListener('mouseenter', e => {
  console.log('Haloo');

  e.target.classList.add('hidden');
  btn1.classList.remove('hidden');
});
// =================================================
btn3.addEventListener('mouseleave', e => {
    msg.classList.add('hidden');
  });

