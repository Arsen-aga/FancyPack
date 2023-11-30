const menuBtn = document.querySelector('.menu-btn');
const menuBtnLink = document.querySelectorAll('.menu a');
const menu = [menuBtn, ...menuBtnLink];


menu.forEach(e => {
  e.addEventListener('click', () => {
    document.querySelector('.menu ul').classList.toggle('active');
    if (menuBtn) {
      menuBtn.classList.toggle('menu-btn--active');
      if (document.body.clientWidth < 960) {
        document.querySelector('body').classList.toggle('scroll-none');
      }
    }
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

function handleImg(myImg, observer) {
  myImg.forEach(myImgSingle => {
    if (myImgSingle.intersectionRatio > 0) {
      loadImage(myImgSingle.target);
    }
  });
};

function loadImage(image) {
  image.src = image.getAttribute('data-src');
};

const observer = new IntersectionObserver(handleImg, options);

images.forEach(img => {
  observer.observe(img);
})


// lightGallery
if (document.querySelector('.gallery')) {
  lightGallery(document.querySelector('.gallery'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
  });
}

// before after slider

if (document.querySelectorAll('.slider-before-after')) {
  const sliders = document.querySelectorAll('.slider-before-after');
  const changes = document.querySelectorAll('.change');
  const body = document.body;

  let isActive = false;

  document.addEventListener('DOMContentLoaded', () => {
    for (var i = 0; i < sliders.length; i++) {
      let before = sliders[i].querySelector('.before');
      let beforeImage = before.querySelector('img');
      let width = sliders[i].offsetWidth;
      beforeImage.style.width = `${width}px`;
    }
  });

  for (let i = 0; i < changes.length; i++) {
    changes[i].addEventListener('mousedown', () => {
      isActive = true;
    });
  }

  body.addEventListener('mouseup', () => {
    isActive = false;
  });

  body.addEventListener('mouseleave', () => {
    isActive = false;
  });

  const beforeAfterSlider = (x, slider) => {
    let shift = Math.max(0, Math.min(x, slider.offsetWidth));
    let before = slider.querySelector('.before');
    let change = slider.querySelector('.change');
    before.style.width = `${shift}px`;
    change.style.left = `${shift}px`;
  };

  const pauseEvents = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
  };

  body.addEventListener('mousemove', (e) => {
    if (!isActive) {
      return;
    }
    let slider = e.target.closest('.slider-before-after');

    let x = e.pageX;
    if (!slider) {
      isActive = false;
    }
    x -= slider.getBoundingClientRect().left;
    beforeAfterSlider(x, slider);
    pauseEvents(e);
  });

  for (let i = 0; i < changes.length; i++) {
    changes[i].addEventListener('touchstart', () => {
      isActive = true;
    });
  }

  body.addEventListener('touchend', () => {
    isActive = false;
  });

  body.addEventListener('touchcancel', () => {
    isActive = false;
  });

  body.addEventListener('touchmove', (e) => {
    if (!isActive) {
      return;
    }
    let x;
    let i;
    for (i = 0; i < e.changedTouches.length; i++) {
      x = e.changedTouches[i].pageX;
    }

    let slider = e.target.closest('.slider-before-after');
    x -= slider.getBoundingClientRect().left;

    beforeAfterSlider(x, slider);
    pauseEvents(e);
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