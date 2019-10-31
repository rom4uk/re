$(document).ready(() => {

  /* Slider */
  $('.images .image-items').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true
  });
  $('.slick-prev').hide();

  const slideIn = document.querySelectorAll('.images .image-items .in-slider');
  const slideOn = document.querySelectorAll('.images .image-items .on-slider');
  const header = document.querySelector('header');
  const weAre = document.querySelector('main .we-are');
  const about = document.querySelector('main .about');
  const jobs = document.querySelector('main .jobs');
  const footer = document.querySelector('footer');
  const blured = [header, weAre, about, jobs, footer];
  let clicked;

  slideIn.forEach(item => {
    item.addEventListener('click', () => {
      clicked = true;
      // blured
      console.log('click');
      hide(slideIn, 500);
      show(slideOn, 500);
      document.body.classList.add('slide');
      const overlay = document.querySelector('.slide .slider-overlay');
      const heightTop = window.pageYOffset;
      const heightBottom = 1;
      console.log(heightTop, heightBottom);
      overlay.style.height = `${document.body.clientHeight}px`;
      bluring(blured);
      header.classList.add('blured');
      weAre.classList.add('blured');
      about.classList.add('blured');
      jobs.classList.add('blured');
      footer.classList.add('blured');
      console.log(slideOn.clientTop);

      overlay.addEventListener('click', (e) => {
        console.log('e.target', e.target, overlay);
        hideOverlay(e, overlay);
        clicked = !clicked;
      })

      $('.slide .slider-overlay').on('scroll', function () {
        alert('scrolling');
      });

      document.addEventListener('scroll', (e) => {
        if(clicked) {
          console.log(e)
          console.log('e.target', e.target, overlay);
          document.body.classList.remove('slide');
          overlay.style.height = '0px';
          hide(slideOn, 500);
          show(slideIn, 500);
          bluring(blured, false);
          clicked = !clicked;
        }
      })

      console.log('clicked', clicked);
    });
  })

  const hideOverlay = (e, overlay) => {
    if(e.target === overlay) {
      document.body.classList.remove('slide');
      overlay.style.height = '0px';
      hide(slideOn, 500);
      show(slideIn, 500);
      bluring(blured, false);
    }
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

  item.addEventListener('input', ()=> {
    if(this.value !== '') {
      
    }
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

let timerId;
const phone = document.querySelector('footer form #phone');
const message = document.querySelector('footer form #message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = checkInpits(formInputs);
  if(isValid) {
    /* send message than hide form*/
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
      console.log(item.parentNode);
      item.classList.add('typed');
      item.classList.add('invalid');
      item.focus();
      console.log(item, 'focused');
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