document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const layerMenu = document.getElementById('layerMenu');
    const menuLinks = layerMenu.querySelectorAll('a');
  
    function toggleMenu() {
      menuIcon.classList.toggle('active');
      layerMenu.classList.toggle('active');
    }
  
    menuIcon.addEventListener('click', function(e) {
      e.preventDefault();
      toggleMenu();
    });
  
    // メニュー内のリンクにイベントリスナーを追加
    menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            // メニューを閉じる
            toggleMenu();
            
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        } else {
          toggleMenu();
        }
      });
    });
  });


const pic = [
    './picture/others_01.JPG',
    './picture/others_02.JPG',
    './picture/others_03.JPG',
    './picture/others_04.JPG'
];

const text = [
    '菜の花',
    '紫陽花1',
    '紫陽花2',
    '太陽系'
];

let i = 1; //0番目の画像はhtmlで表示されているため
let interval;

function changeContent(index) {
    const imgElement = document.getElementById("img");
    const textElement = document.getElementById("description"); // テキスト用の要素を追加する必要があります
    imgElement.style.opacity = 0;
    textElement.style.opacity = 0;

    setTimeout(() => {
        imgElement.src = pic[index];
        textElement.innerText = text[index];
        imgElement.style.opacity = 1;
        textElement.style.opacity = 1;
    }, 500);
}

function ShowContent() {
    if (i == pic.length) {
        i = 0;
    }
    changeContent(i);
    i++;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(ShowContent, 10000);
}

document.getElementById('sc-to-right').addEventListener('click', function() {
    ShowContent();
    resetInterval();
});

document.getElementById('sc-to-left').addEventListener('click', function() {
    i = i - 2; // 前の画像とテキストを表示（ShowContent関数で＋1されるため-2）
    if (i < 0) {
        i = pic.length - 1; //これもShowContent関数で＋1されるため
    }
    ShowContent();
    resetInterval();
});

interval = setInterval(ShowContent, 10000);
