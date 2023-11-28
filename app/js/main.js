const menuBtn = document.querySelector('.menu-btn');
const menuBtnLink = document.querySelectorAll('.menu a');
const menu = [menuBtn, ...menuBtnLink];


menu.forEach(e => {
  e.addEventListener('click', () => {
    document.querySelector('.menu ul').classList.toggle('active');
  });
}); 

document.querySelectorAll('.menu a, .logo').forEach(link => {

  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 60;
    // const topOffset = 0; // если не нужен отступ сверху 
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

//lazyload

let images = document.querySelectorAll('img[data-src]');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

function handleImg(myImg, observer){
  myImg.forEach(myImgSingle => {
    if (myImgSingle.intersectionRatio > 0){
      console.log(myImgSingle.intersectionRatio);
      loadImage(myImgSingle.target);
    }
  });
};

function loadImage(image){
  image.src = image.getAttribute('data-src');
};

const observer = new IntersectionObserver(handleImg, options);

images.forEach(img => {
  observer.observe(img);
})


// lightGallery
if (document.querySelector('.gallery')){
  lightGallery(document.querySelector('.gallery'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
  });
}



initMap();

async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;

  const map = new ymaps3.YMap(document.getElementById('map'), {
    location: {
      center: [45.069550, 33.945080],
      zoom: 10
    }
  });

  map.addChild(new YMapDefaultSchemeLayer());
}