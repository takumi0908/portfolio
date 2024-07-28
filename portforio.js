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
    const textElement = document.getElementById("description"); 
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

//ポワンロード
const revealElements = document.querySelectorAll('.scroll-reveal');
  
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    } else {
      // 以下の行をコメントアウトすると、一度表示された要素は表示されたままになります
      // entry.target.classList.remove('revealed');
    }
  });
}, {
  threshold: 0.15 // 要素の15%が見えたときにコールバックを実行
});

revealElements.forEach(element => {
  revealObserver.observe(element);
});

document.addEventListener('DOMContentLoaded', function() {
  const lazyLoadElements = document.querySelectorAll('.lazy-load');

  const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const src = element.getAttribute('data-src');

        // 画像の場合
        if (element.tagName.toLowerCase() === 'img') {
          element.src = src;
        } else {
          // 画像以外の場合（背景画像など）
          element.style.backgroundImage = `url(${src})`;
        }

        element.classList.add('loaded');
        observer.unobserve(element); // 一度読み込んだら監視を解除
      }
    });
  }, {
    root: null, // ビューポートをルートとして使用
    rootMargin: '0px', // ビューポートのマージン
    threshold: 0.1 // 要素の10%が見えたときにコールバックを実行
  });

  lazyLoadElements.forEach(element => {
    lazyLoadObserver.observe(element);
  });
});



document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.querySelector('.modal .close');
  
    document.querySelectorAll('.back .cont1, .back .cont2').forEach(item => {
      item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const description = item.getAttribute('data-description');
        
        modalImg.src = imgSrc;
        modalDescription.textContent = description;
        modal.style.display = 'block';
      });
    });
  
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  