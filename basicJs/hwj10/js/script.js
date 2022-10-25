
const tabList = document.querySelector('.tabs');
tabList.onclick = (event) => {
    const clickedBth = event.target;


    if (clickedBth.tagName === 'LI') {
        const tabActive = event.currentTarget.querySelector('.active');
        const tabName = clickedBth.dataset.tab;
        const tabItem = document.querySelector(`.tabs-content-item[data-tab="${tabName}"]`);
        const tabContent = document.querySelector('.tabs-content-item-active');


        if (tabActive !== clickedBth) {
            tabActive.classList.remove('active');
        }
        if (tabContent !== tabItem) {
            tabContent.classList.remove('tabs-content-item-active');
        }
        tabItem.classList.add('tabs-content-item-active')
        clickedBth.classList.add('active');
    }
};


