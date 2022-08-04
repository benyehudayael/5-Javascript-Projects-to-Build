var images =  ['https://unsplash.com/photos/Q14J2k8VE3U', 'https://unsplash.com/photos/d-Cr8MEW5Uc', 'https://unsplash.com/photos/wE9nUW7tMmk', 'https://unsplash.com/photos/I_9ILwtsl_k', 'https://unsplash.com/photos/_DA3D5P71qs', 'https://unsplash.com/photos/p-bkdO43shE', 'https://unsplash.com/photos/xS_RzdD5CFE', 'https://unsplash.com/photos/tS9hJOnmKK8', 'https://unsplash.com/photos/fj0tFloTPGQ', 'https://unsplash.com/photos/3HlgJNdnD7I', 'https://unsplash.com/photos/asrWX-lU3RE', 'https://unsplash.com/photos/rf-0DQu5M6Y', 'https://unsplash.com/photos/hlnucYOsL-c', 'https://unsplash.com/photos/A88emaZe7d8', 'https://unsplash.com/photos/3MtiSMdnoCo', 'https://unsplash.com/photos/ywiAen4L4qA', 'https://unsplash.com/photos/yPaskTQiNjA', 'https://unsplash.com/photos/gq4kE8KRP8c', 'https://unsplash.com/photos/8Zt0xOOK4nI', 'https://unsplash.com/photos/Osl4I3IS9Cw', 'https://unsplash.com/photos/o4H20aIIAt8', 'https://unsplash.com/photos/2wugfiddtXw', 'https://unsplash.com/photos/xzZtV9ED5Bs', 'https://unsplash.com/photos/M-1MRfncLk0', 'https://unsplash.com/photos/IQ1kOQTJrOQ', 'https://unsplash.com/photos/Acfgb7bc-Bc', 'https://unsplash.com/photos/v9eNihIWh8k', 'https://unsplash.com/photos/KSyemQIWwP8', 'https://unsplash.com/photos/6xqAK6oAeHA', 'https://unsplash.com/photos/TuOiIpkIea8', 'https://unsplash.com/photos/VkuuTRkcRqw', 'https://unsplash.com/photos/GG0jOrmwqtw', 'https://unsplash.com/photos/OODWPtfXAF0', 'https://unsplash.com/photos/revxuIor0nY', 'https://unsplash.com/photos/NYDo21ssGao', 'https://unsplash.com/photos/xPfj_Kdcal4', 'https://unsplash.com/photos/tVIqMgGlAG0', 'https://unsplash.com/photos/xpkmxDGPz0Y', 'https://unsplash.com/photos/x_jTtMOOMd4', 'https://unsplash.com/photos/4f7r1LuPYj8', 'https://unsplash.com/photos/iRyGmA_no2Q', 'https://unsplash.com/photos/HFbRnCjWHsk', 'https://unsplash.com/photos/MRxD-J9-4ps', 'https://unsplash.com/photos/kxqvE41_07k', 'https://unsplash.com/photos/gkT4FfgHO5o', 'https://unsplash.com/photos/Zdcq3iKly6g', 'https://unsplash.com/photos/ti4uz330CwU', 'https://unsplash.com/photos/SlGVAKyP20U', 'https://unsplash.com/photos/oFAVqfTSby8', 'https://unsplash.com/photos/agkblvPff5U', 'https://unsplash.com/photos/xjXz8GKXcTI', 'https://unsplash.com/photos/yD3PXDV7Sjc', 'https://unsplash.com/photos/WqK_xV_hbug', 'https://unsplash.com/photos/Xne1N4yZuOY', 'https://unsplash.com/photos/BjelfpszQDw', 'https://unsplash.com/photos/Ven2CV8IJ5A', 'https://unsplash.com/photos/LbS_k_c3BYA', 'https://unsplash.com/photos/cSe3oKQ03OQ', 'https://unsplash.com/photos/TQeX8khR54I', 'https://unsplash.com/photos/J8k-gzI0Zy0', 'https://unsplash.com/photos/YYegjUYIVeg', 'https://unsplash.com/photos/8hgm6mKK04U', 'https://unsplash.com/photos/WO4bxwzHRe8', 'https://unsplash.com/photos/tvicgTdh7Fg', 'https://unsplash.com/photos/JbeBraLha7U', 'https://unsplash.com/photos/lp0IFw6YqZg', 'https://unsplash.com/photos/Ps2n0rShqaM', 'https://unsplash.com/photos/ICW6QYOcdlg', 'https://unsplash.com/photos/0EjvnhOkPLM', 'https://unsplash.com/photos/BwgKUh9tN84', 'https://unsplash.com/photos/k7bQqdUf954', 'https://unsplash.com/photos/yNGQ830uFB4', 'https://unsplash.com/photos/M_eB1UjE0do', 'https://unsplash.com/photos/2kc8bigeqEI', 'https://unsplash.com/photos/oSf8ePoG9NU', 'https://unsplash.com/photos/1fpyA_z2woY', 'https://unsplash.com/photos/pHM4a_RZSLE', 'https://unsplash.com/photos/P7Lh0usGcuk', 'https://unsplash.com/photos/jrzvClypPq8', 'https://unsplash.com/photos/6iat9p85VnQ', 'https://unsplash.com/photos/umchkHwkdyM', 'https://unsplash.com/photos/d6ebY-faOO0', 'https://unsplash.com/photos/hVOv8me9ue8', 'https://unsplash.com/photos/t05kfHeygbE', 'https://unsplash.com/photos/mR_HR8NZwg8', 'https://unsplash.com/photos/n6TWNDfyPwk', 'https://unsplash.com/photos/FC9mIjVT-Yw', 'https://unsplash.com/photos/RL0l7Zk5PxU', 'https://unsplash.com/photos/N7XodRrbzS0', 'https://unsplash.com/photos/nJdwUHmaY8A', 'https://unsplash.com/photos/wSb8d-ke5-4', 'https://unsplash.com/photos/YoadQb46v6k', 'https://unsplash.com/photos/xlAmGyZE7Zg', 'https://unsplash.com/photos/PFZTiiJnjag', 'https://unsplash.com/photos/vCqmY3bfqfo', 'https://unsplash.com/photos/qPJ6eRAMmCM', 'https://unsplash.com/photos/NYxxuBSQzp4', 'https://unsplash.com/photos/-FgZlbzZ0R8', 'https://unsplash.com/photos/jVb0mSn0LbE', 'https://unsplash.com/photos/sX4lxBWV0-A'];
var cardCounts = 0;
var selectedItemId = -1; 
var items = [];
var levels = [
    { name: 'Hard', counts:[50, 80, 100], containerWidth: [ 528, 824, 1012] },
    { name: 'Medium', counts:[20, 40], containerWidth: [ 500, 506] },
    { name: 'Easy', counts:[8, 16], containerWidth: [ 230, 440 ] },
];

function chooseLevel() {
    document.getElementById('splashScreen').classList.add("hide");
    document.getElementById('chooseLevel').classList.remove("hide");
    levels.forEach(x => {
        addLevelItemDiv(x.name);
    });
}

function addLevelItemDiv(name) {
    var levelItem = document.createElement('div');
    levelItem.innerText = name;
    levelItem.classList.add('dialogItem');
    levelItem.onclick = () => { setLevel(name) };
    document.getElementById('levels').appendChild(levelItem);
}

function setLevel(levelName) {
    var level = levels.find(x => x.name == levelName);
    level.counts.forEach(x => addLevelCardsCountDiv(x, level));
    document.getElementById('chooseLevel').classList.add("hide");
    document.getElementById('chooseCardsCount').classList.remove("hide");    
}

function addLevelCardsCountDiv(count, level) {
    var cardsCount = document.createElement('div');
    cardsCount.innerText = count;
    cardsCount.classList.add('dialogItem');
    cardsCount.onclick = () => { 
        cardCounts = count;
        var width = level.containerWidth[level.counts.findIndex(x => x == count)];
        document.getElementById('gameBoard').style.maxWidth = width + 'px';
        startGame() ;
    };
    document.getElementById('cardsCount').appendChild(cardsCount);
}

function startGame(){
    document.getElementById('chooseCardsCount').classList.add("hide");
    createCardsData();
    generateCards();
    document.getElementById('gameBoard').classList.remove("hide");
}

function createCardsData() {
    items = [];
    for (let index = 0; index < (cardCounts / 2); index++) {
        items.push({ id: index, url: images[index], order: Math.floor(Math.random() * 100000)});
        items.push({ id: index, url: images[index], order: Math.floor(Math.random() * 100000)});
    }    
}

function generateCards()
{
    items = items.sort(function (a, b) {
        return a.order - b.order;
      });
    for (let index = 0; index < items.length; index++) {
        var card = document.createElement('div');
        card.setAttribute('data', items[index].id);
        card.classList.add('card');
        var item = items[index];
        card.onclick = () => { checkMatch(item) };
        document.getElementById('gameBoard').appendChild(card);    
    }
}

function checkMatch(item) {
    card.style.backgroundImage = 'url(\'' + item.url + '\')';
    if(selectedItemId > 0) {
        if(selectedItemId === item.id) {
            document.querySelectorAll('[data="' + item.id + '"]').forEach(x => x.remove());
        } else {
            document.querySelectorAll('[data="' + item.id + '"]').forEach(x => x.style.backgroundImage = '');
        }
    } else {
        selectedItemId = item.id;
    }
}