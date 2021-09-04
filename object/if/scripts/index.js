let currentCategory = 'red';
const container = document.querySelector('.container');
const colorObject = {
    red: '#b90e0a',
    blue: '#1357a6',
    green: '#149414',
    yellow: '#ffdc00',
    orange: '#ff6600',
    violet: '#723189',
    white: '#ffffff',
    black: '#000000',
}

const changeActiveTabStyle = (target) => {
    document.querySelectorAll('li').forEach(item => item.classList.remove('active'));
    target.classList.add('active');
};

const setBackgroundColor = (color, container) => {
    container.style.background = colorObject[color];
}
document.querySelector('ul').addEventListener('click', (event) => {
    const target = event.target;
    if(target.innerText === currentCategory || target === event.currentTarget) {
        return;
    }

    currentCategory = target.innerText;
    changeActiveTabStyle(target);
    setBackgroundColor(currentCategory, container);
});


