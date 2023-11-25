function Load() {
    Change_Map('Gorgan');
    Them('Dark');
    changeBackground();
}
function Them(mode) {
    switch (mode) 
    {
        case 'Light': 
        {
            Light();
            break;
        }
        case 'Dark': 
        {
            Dark();
            break;
        }
    }
}
// 

var backgroundIndex = 0;
var backgroundImages = ['img/BackGround_01.jpg', 'img/BackGround_02.jpg', 'img/BackGround_03.jpg'];

function changeBackground() {
    document.getElementById('Home').style.backgroundImage = 'url(' + backgroundImages[backgroundIndex] + ')';
    backgroundIndex++;
    if (backgroundIndex >= backgroundImages.length) {
        backgroundIndex = 0;
    }
}

// Change the background every 5 seconds
setInterval(changeBackground, 10000);

// 
function Light() {
    document.getElementById('Them_Dark').style.display = 'none';
    document.getElementById('Them_Light').style.display ='flex';
    // 
    document.getElementsByTagName('link')[7].href = 'css/Them/Light.css';
}
function Dark() {
    document.getElementById('Them_Dark').style.display = 'flex';
    document.getElementById('Them_Light').style.display ='none';
    // 
    document.getElementsByTagName('link')[7].href = 'css/Them/Dark.css';

}
function Change_Map(City) {
    switch (City) {
        case 'Gorgan':
            {
                document.getElementById('Nikolas-Gorgan').style.display = 'flex';
                document.getElementById('SarzaminCharm-Tehran').style.display = 'none';
                document.getElementById('Lanka-Mashhad').style.display = 'none';
                break;
            }
        case 'Tehran':
            {
                document.getElementById('Nikolas-Gorgan').style.display = 'none';
                document.getElementById('SarzaminCharm-Tehran').style.display = 'flex';
                document.getElementById('Lanka-Mashhad').style.display = 'none';
                break;
            }
        case 'Mashhad':
            {
                document.getElementById('Nikolas-Gorgan').style.display = 'none';
                document.getElementById('SarzaminCharm-Tehran').style.display = 'none';
                document.getElementById('Lanka-Mashhad').style.display = 'flex';
                break;
            }
    }
}
