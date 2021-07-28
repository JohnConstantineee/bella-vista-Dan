/**
 * При наведенні на блок 1 робити
 * блок 2 зеленим кольором
 * А при наведенні на блок 2 робити
 * блок 1 червоним кольором
 *
 */

const block1 = document.getElementById('block-1');
const block2 = document.getElementById('block-2');

block1.addEventListener('mouseover',() => {
    block2.style.backgroundColor = 'green';
});
block1.addEventListener('mouseout',() => {
    block2.style.backgroundColor = '';
});

block2.addEventListener('mouseover',() => {
    block1.style.backgroundColor = 'red';
});

block2.addEventListener('mouseout',() => {
    block1.style.backgroundColor = '';
});