"use strict";
/*
ЗАДАЧА:
Создайте игру "Собери алфавит"
ПОДСКАЗКИ:
1-Не думайте о сокращении кода. Если будет очень много повторений однотипного кода - это нормально. Первая задача понимать логику языка, а только после оптимизировать его.
2-Помните про методы переноса элемента из одного места в другое(before, after и т.д.)
3-Помните про свойства, получения соседних элементов (previousElementSibling, previousElementSibling и т.д)
*/

document.addEventListener('DOMContentLoaded', function(e) {
  const boxes = document.querySelectorAll('.boxes__box');
  const audioClick = new Audio('./audio/Mountain Audio - Menu Click.mp3');
  const audioWin = new Audio('./audio/huge win.wav');
  
  boxes.forEach(function(box) {
    box.addEventListener('click', function(e) {
      const target = e.target;
      const prevEl = target.previousElementSibling;
  
      if (prevEl) {
        prevEl.before(target);
      } else {
        const nextEl = target.nextElementSibling;
        nextEl.after(target);
      }
  
      audioClick.play();
  
      checkOrder(document.querySelectorAll('.boxes__box'));
    });
  });
  
  function checkOrder(item) {
    if (item[0].classList.contains('box_a') 
    && item[1].classList.contains('box_b')
    && item[2].classList.contains('box_c')
    && item[3].classList.contains('box_d')
    && item[4].classList.contains('box_e')
    && item[5].classList.contains('box_f')) {
      audioWin.play();
    } 
  };
});