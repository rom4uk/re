$(document).ready(() => {

  /* Slider */
  $('.images .image-items').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.slick-prev').hide();

  let slideIn;
  let slideOn;
  let overlay;
  let images = $('.images .image-items');

  const header = document.querySelector('header');
  const weAre = document.querySelector('main .we-are');
  const about = document.querySelector('main .about');
  const jobs = document.querySelector('main .jobs');
  const footer = document.querySelector('footer');
  const blured = [header, weAre, about, jobs, footer];
  let clicked;

  images.on('click', '.slick-slide .in-slider', twoSlides);

  function hideOnScroll(overlay) {
    if(clicked) {
      $('.images .image-items').slick('slickSetOption', {
        slidesToShow: 4
      }, true);
      document.body.classList.remove('slide');
      overlay.style.height = '0px';
      slideIn = document.querySelectorAll('.images .image-items .slick-slide .in-slider');
      slideOn = document.querySelectorAll('.images .image-items .slick-slide .on-slider');
      hide(slideOn, 500);
      show(slideIn, 500);
      bluring(blured, false);
      clicked = !clicked;
    }
  }

  function twoSlides() {
    clicked = true; 
    $('.images .image-items').slick('slickSetOption', {
      slidesToShow: 2
    }, true);
    slideIn = document.querySelectorAll('.images .image-items .slick-slide .in-slider');
    slideOn = document.querySelectorAll('.images .image-items .slick-slide .on-slider');
    hide(slideIn, 500);
    show(slideOn, 500);

    document.body.classList.add('slide');
    const overlay = document.querySelector('.slide .slider-overlay');
    overlay.style.height = `${document.body.clientHeight}px`;
    bluring(blured);

    overlay.addEventListener('click', () => {
      hideOnScroll(overlay);
    })

    document.addEventListener('scroll', () => {
      hideOnScroll(overlay);
    })
  }

  function bluring(arr, add = true) {
    if(add) {
      arr.forEach(item => {
        item.classList.add('blured');
      })
    } else {
      arr.forEach(item => {
        item.classList.remove('blured');
      })
    }
  }

  function hide(arr, time) {
    arr.forEach(item => {
      $(item).hide(time);
    })
  }

  function show(arr, time) {
    arr.forEach(item => {
      $(item).show(time);
    })
  }

  $(window).scroll(function(){
    scrollFunction();
  });

  $('#scrollTopBtn').click(function() {
    $('html, body').animate(
      {scrollTop: 0},
      'slow'
    );
  });
})

function scrollFunction() {
  if ($(window).scrollTop() > $(window).outerHeight()) {
    $('#scrollTopBtn').fadeIn(200);
  } else {
    $('#scrollTopBtn').fadeOut(200);
  }
}

/*3-c-128199-31 vid 25-10-2019*/
const formInputs = document.querySelectorAll('footer form .item input');
const form = document.querySelector('footer form[name="contact"]');
formInputs.forEach((item, index) => {
  item.addEventListener('focus', addTyped);

  item.addEventListener('blur', checkInput);

  item.addEventListener('input', function() {
    typingInput(this);
  });
})

function addTyped() {
  this.classList.add('typed');
}

function checkInput() {
  if(this.value !== '') {
    this.classList.add('typed');
  } else this.classList.remove('typed');
}

function typingInput(elem) {
  try{
    if(elem.parentElement.querySelector('.input-tooltip')) {
      elem.parentElement.querySelector('.input-tooltip').remove();
      elem.classList.remove('invalid');
    }
  }
  catch(err) {
    console.log(err);
  }
}

function removeInvalidTooltip(event) {
  if(event.target !== document.querySelector('footer form .phone input') && event.target !== document.querySelector('footer form .message input')) {
    const tooltips = document.querySelectorAll('.input-tooltip');
    tooltips.forEach(item => {
      item.parentElement.querySelector('input').classList.remove('invalid');
      item.remove();
    });
  }

}

document.addEventListener('click', removeInvalidTooltip);

let timerId;
const phone = document.querySelector('footer form #phone');
const message = document.querySelector('footer form #message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = checkInpits(formInputs);
  if(isValid) {
    /* send the message than hide the form */
    $(e.currentTarget).fadeOut(500, () => {
      $('.after-subm').fadeIn(500, () => {
        timerId = setTimeout(()=> fadeInForm(phone, message), 3000);
      });
    });
    /*  */
  }
})

function fadeInForm(phone, message) {
  clearTimeout(timerId);
  phone.value = '';
  message.value = '';
  $('.after-subm').fadeOut(500, ()=> $(document.forms[0]).fadeIn(500));
}

function checkInpits(arr) {
  removeTooltip()
  let errors = [];
  arr.forEach(item => {
    if(item.value === '') {
      const div = document.createElement('div');
      div.classList.add('input-tooltip');
      div.innerText = `Did you forget?`;
      item.parentNode.insertAdjacentElement('beforeend', div);
      item.classList.add('typed');
      item.classList.add('invalid');
      item.focus();
      errors.push(1);
    } else {
      item.classList.remove('invalid');
    }
  })
  return errors.length ? false : true;
}

function removeTooltip() {
  const tooltips = document.querySelectorAll('footer .input-tooltip')
  if(tooltips) {
    tooltips.forEach(item=>item.remove());
  }
}

document.querySelector('.another').addEventListener('click', ()=>fadeInForm(phone, message));


















/* ________________________________________________________________________________________ */
/* getters, setters */

function EmailParser(email) {
  this.email = email;
  
  Object.defineProperty(this, 'name', {
    get: function() {
      return this.isCorrect ? this.email.split('@')[0] : null;
    }
  });

  Object.defineProperty(this, 'domain', {
    get: function() {
      return this.isCorrect ? this.email.split('@')[1] : null;
    }
  });

  Object.defineProperty(this, 'isCorrect', {
    get: function() {
      return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/.test(this.email);
    }
  });
}

const obj = new EmailParser('info@gmail.com');

console.log(obj.name);
console.log(obj.domain);
console.log(obj.isCorrect);

obj.email = 'some@nz';
console.log(obj.name);
console.log(obj.domain);
console.log(obj.isCorrect);

/* getters, setters with Proxy */

const div = document.createElement('div');
//document.body.appendChild(div);

const watchObj = function(elem, func) {
  return new Proxy(elem, {
    get(target, name) {
      switch (typeof target[name]) {
        case('object'):
          return watchObj(target[name], func);
        case('function'):
          return target[name].bind(target);
        default:
          return target[name];
      }
    },
    set(target, name, val) {
      target[name] = val;
      func(name, val);
      return true;
    }
  })
}

let cleverDiv = watchObj(div, function(prop, value) {
  console.log(prop, value);
})

cleverDiv.innerHTML = `<strong>HTML</strong><em>Changed</em>`;

cleverDiv.style.color = 'red';

cleverDiv.querySelector('em').style.color = 'green';