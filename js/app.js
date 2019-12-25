const technologies1 = [
  {
    name: 'react',
    __html: '<span>React JS</span> is a JavaScript library for building user interfaces. It was created and is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded. More on <a target="_blank" href="https://en.wikipedia.org/wiki/React_(web_framework)">Wikipedia</a>.'
  },
  {
    name: 'html5',
    __html: '<span>HTML</span> and <span>CSS</span> – this is what each and every site is built with. An industry-default markup language and a stylesheet language used to describe the presentation of a document written in HTML or XML'
  },
  {
    name: 'el',
    __html: '<span>El</span> is an analysis and feedback platform built to help you understand your users better. It gives you the complete visibility and the big picture on how to leverage your website’s user experience and increase both performance and conversion rates.'
  },
  {
    name: 'hotjar',
    __html: ' <span>Hotjar</span> is an analysis and feedback platform built to help you understand your users better. It gives you the complete visibility and the big picture on how to leverage your website’s user experience and increase both performance and conversion rates. More on <a target="_blank" href="https://www.hotjar.com/blog/what-is-hotjar/">Hotjar</a>.'
  },
  {
    name: 'php',
    __html: '<span>PHP</span> is an analysis and feedback platform built to help you understand your users better. It gives you the complete visibility and the big picture on how to leverage your website’s user experience and increase both performance and conversion rates.'
  },
  {
    name: 'nodejs',
    __html: '<span>Node.js</span> lets front-end developers use JavaScript to write code for servers (back-end) w/o involving another language. It is an open-source, cross-platform environment, created by Ryan Dahl and maintained by a community of individual developers. It represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server- and client-side code.'
  },
  {
    name: 'magento',
    __html: '<span>Magento</span> is an open-source e-commerce platform written in PHP. It is one of the most popular open e-commerce systems in the world. Up to this time, there are hundreds of thousands of businesses using including even big ones like Nike, Samsung, etc.'
  },
  {
    name: 'flutter',
    __html: '<span>Flutter</span> is an open-source UI software development kit created by Google in 2015. It allows to develop native-looking applications for Android and iOS from the same code base and does not require being an Android or iOS developer at all. Flutter apps are built using Dart, a simple object-oriented programming language.'
  },
  {
    name: 'prestashop',
    __html: '<span>PrestaShop</span> is a freely accessible open source e-commerce platform. It is written in the PHP programming language with support for the MySQL database management system. PrestaShop is currently used by 250,000 shops worldwide.'
  },
  {
    name: 'ruby',
    __html: '<span>Ruby</span> is an open source object-oriented programming language released back in 1995. It is known for being a flexible language allowing programmers to make modifications to its various parts. Ruby also allows the project to be set in a short time. All above makes it very popular. It is supported by a wide community of developers one of which is our local #pivorak in Lviv, UA.'
  },
  {
    name: 'wordpress',
    __html: '<span>WordPress</span> The most popular CMS in the world doesn’t require any introduction :)'
  },
  {
    name: 'winwin',
    __html: 'Win-win software development comprises various approaches to software development under which requirements and solutions evolve through the collaborative effort of self-organizing and cross-functional teams and their customer/end user'
  },
  {
    name: 'agile',
    __html: 'Agile software development comprises various approaches to software development under which requirements and solutions evolve through the collaborative effort of self-organizing and cross-functional teams and their customer/end user'
  }
];
let vh;

$(document).ready(() => {

  const techItems = document.querySelectorAll('.technologies .img-wrapper');
  const dotted = document.querySelectorAll('.about .philosphy .dotted');

  techItems.forEach(item => {
    item.addEventListener('mouseenter', techItemEnter);
    item.addEventListener('mouseleave', techItemLeave);
  });
  dotted.forEach(item => {
    item.addEventListener('mouseover', techItemEnter);
    item.addEventListener('mouseleave', techItemLeave);
  });

  function techItemEnter(event) {
    event.preventDefault();
    console.log('currentTarget', event.currentTarget);
    this.classList.add('active');
    const offsetTop = this.offsetTop;
    const offsetLeft = this.offsetLeft;
    // const qwe = event.currentTarget.querySelector('.qwe') || event.currentTarget.parentNode.querySelector('.qwe');
    const tooltip = event.currentTarget.querySelector('.tooltip') || event.currentTarget.parentNode.querySelector('.tooltip');
    const figureBefore = event.currentTarget.querySelector('.figure-before') || event.currentTarget.parentNode.querySelector('.figure-before');
    const tooltipBorder = event.currentTarget.querySelector('.tooltip-border') || event.currentTarget.parentNode.querySelector('.tooltip-border');
    const text = technologies1.filter(item => item.name === this.getAttribute('data-name'))[0].__html;
    const parentWrapper = event.currentTarget.parentNode;
    // parentWrapper.style.cssText = `border: 1px solid red;`;

    // qwe.innerHTML = text;
    const floatingRight = tooltip.getBoundingClientRect().right > parentWrapper.getBoundingClientRect().right ? tooltip.getBoundingClientRect().right - parentWrapper.getBoundingClientRect().right : 0;
    const vw = window.innerWidth;
    // tooltip.style.cssText = window.innerWidth > 380 ? `width: 350px; left: ${offsetLeft}px` : `width: auto`;;
    tooltip.style.cssText = vw > 380 ? `left: ${offsetLeft - floatingRight}px` : `left: ${offsetLeft}px`;

    vh = tooltip.scrollHeight + 20;
    const top = vh > 100 && vw > 380 ? vh - offsetTop : vh - offsetTop - 2;
    const miunsTop = vh < 90 ? 0 : 8;
    tooltipBorder.style.cssText = `${vh < 90 ? `top: 17%;` : ''}`;
    const textRight = event.srcElement.localName === 'span' ? -32 : 0;
    const right = vw < tooltip.getBoundingClientRect().right ? `right: ${textRight + 5}px; left: auto` : 'right: auto';
    tooltip.style.cssText += `top: -${top - miunsTop}px; ${right}`;
    figureBefore.style.cssText = `display: block; position: absolute; left: ${offsetLeft + 20}px; top: ${offsetTop - 21}px`;
  }

  function techItemLeave(event) {
    console.log('leave');
    // const qwe = event.currentTarget.querySelector('.qwe') || event.currentTarget.parentNode.querySelector('.qwe');
    const tooltip = event.currentTarget.querySelector('.tooltip') || event.currentTarget.parentNode.querySelector('.tooltip');
    const figureBefore = event.currentTarget.querySelector('.figure-before') || event.currentTarget.parentNode.querySelector('.figure-before');
    tooltip.removeAttribute('style');
    figureBefore.removeAttribute('style');
    // qwe.innerHTML = '';
    // const tooltip = event.currentTarget.parentElement.querySelector('.tooltip');
    // const figureBefore = event.currentTarget.parentElement.querySelector('.figure-before');
    this.classList.remove('active');
    // figureBefore.remove();
    // tooltip.remove();
  }


  /* Slider */
  let images = $('.images .image-items');
  images.slick({
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    pauseOnFocus: false,
    centerMode: true,
    centerPadding: '150px',
    responsive: [
      {
        breakpoint: 886,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 484,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });


  let slideIn;
  let slideOn;
  let overlay;

  const header = document.querySelector('header');
  const weAre = document.querySelector('main .we-are');
  const about = document.querySelector('main .about');
  const jobs = document.querySelector('main .jobs');
  const footer = document.querySelector('footer');
  const blured = [header, weAre, about, jobs, footer];
  let clicked, sliding;

  images.on('click', '.slick-slide .in-slider', twoSlides);

  function hideOnScroll(overlay) {
    if (clicked) {
      images.slick('slickSetOption', {
        slidesToShow: 4
      }, true);
      document.body.classList.remove('slide');
      overlay.style.height = '0px';
      slideIn = document.querySelectorAll('.images .image-items .slick-slide .in-slider');
      slideOn = document.querySelectorAll('.images .image-items .slick-slide .on-slider');
      hide(slideOn, 500);
      show(slideIn, 500);
      images.removeAttr('style');
      bluring(blured, false);
      clicked = !clicked;
      sliding = !sliding;
    }
  }

  function twoSlides() {
    console.log('this', this);
    clicked = true;
    sliding = true;

    images.slick('slickSetOption', {
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 886,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 484,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    }, true);
    slideIn = document.querySelectorAll('.images .image-items .slick-slide .in-slider');
    slideOn = document.querySelectorAll('.images .image-items .slick-slide .on-slider');
    hide(slideIn, 500);
    show(slideOn, 500);

    document.body.classList.add('slide');
    const overlay = document.querySelector('.slide .slider-overlay');
    overlay.style.height = `${document.body.clientHeight}px`;
    // images.css('transform', `translateY(-${window.innerHeight / 2.5}px)`);
    bluring(blured);

    overlay.addEventListener('click', () => {
      hideOnScroll(overlay);
    })

    document.addEventListener('scroll', () => {
      if (sliding) {
        let itemTop = document.querySelector('.images .image-items').getBoundingClientRect().top;
        let innerHeight = window.innerHeight;
        let top = innerHeight / 1.3;
        const num = innerHeight / 80;
        if (itemTop < num || itemTop > top) {
          console.log(top, itemTop, innerHeight, num);
          hideOnScroll(overlay);
        }
      }
    })
  }

  function bluring(arr, add = true) {
    if (add) {
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

  $(window).scroll(function () {
    scrollFunction();
  });

  $('#scrollTopBtn').click(function () {
    $('html, body').animate(
      { scrollTop: 0 },
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

const textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', autosize);

function autosize() {
  const el = this;
  setTimeout(function () {
    el.style.cssText = 'height: auto';
    if (el.getBoundingClientRect().height < el.scrollHeight) {
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }
    if (el.value == '') {
      el.removeAttribute('style');
    }
  }, 0);
}


const formInputs = document.querySelectorAll('footer form .item .inputed');
const form = document.querySelector('footer form[name="contact"]');
formInputs.forEach((item, index) => {
  item.addEventListener('focus', addTyped);

  item.addEventListener('blur', checkInput);

  item.addEventListener('input', function () {
    typingInput(this);
  });
})

function addTyped() {
  this.classList.add('typed');
}

function checkInput() {
  if (this.value !== '') {
    this.classList.add('typed');
  } else {
    this.classList.remove('typed');
  }
}

function typingInput(elem) {
  try {
    if (elem.parentElement.querySelector('.input-tooltip')) {
      elem.parentElement.querySelector('.input-tooltip').remove();
      elem.classList.remove('invalid');
    }
  }
  catch (err) {
    console.log(err);
  }
}

function removeInvalidTooltip(event) {
  if (event.target !== document.querySelector('footer form .phone input') && event.target !== document.querySelector('footer form .message input')) {
    const tooltips = document.querySelectorAll('.input-tooltip');
    tooltips.forEach(item => {
      item.parentElement.querySelector('.inputed').classList.remove('invalid');
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
  if (isValid) {
    /* send the message than hide the form */
    $(e.currentTarget).fadeOut(500, () => {
      $('.after-subm').fadeIn(500, () => {
        timerId = setTimeout(() => fadeInForm(phone, message), 3000);
      });
    });
    /*  */
  }
})

function fadeInForm(phone, message) {
  clearTimeout(timerId);
  phone.value = '';
  message.value = '';
  phone.classList.remove('typed');
  message.classList.remove('typed');
  $('.after-subm').fadeOut(500, () => $(document.forms[0]).fadeIn(500));
}

function checkInpits(arr) {
  removeTooltip();
  let errors = [];
  arr.forEach(item => {
    if (item.value === '') {
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
  if (tooltips) {
    tooltips.forEach(item => item.remove());
  }
}

document.querySelector('.another').addEventListener('click', () => fadeInForm(phone, message));

/* puzzle */
function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}


function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}

const puzzle = document.querySelector('.puzzle');
console.log('puzzle.clientY', puzzle.getBoundingClientRect().top + pageYOffset);
const puzzleTop = puzzle.getBoundingClientRect().top + pageYOffset;
const puzzles = document.querySelectorAll('.puzzle .puzzle-item');


// set animated on scroll on .service-img
/* let scrollTimer = -1;
const men = document.querySelector('.about .service-img');

function bodyScroll() {
  men.style.cssText = `animation: serviceImg 2s ease-in infinite;`;

    if (scrollTimer != -1) {
      clearTimeout(scrollTimer);
    }

    scrollTimer = window.setTimeout("scrollFinished()", 500);
}

function scrollFinished() {
  men.removeAttribute('style');
} */



function onDragStart(event) {
  console.log(event);
  event
    .dataTransfer
    .setData('text/plain', event.target);
}

// $('#makeMeDraggable').draggable({
//   containment: '#content',
//   cursor: 'move',
//   snap: '#content'
// });




$(window).scroll(function () {
  if (isFullyVisible(puzzle)) {
    puzzles.forEach(item => {
      item.classList.add('moved');
      item.setAttribute('draggable', true);
      $(item).draggable({
        containment: 'parent',
        cursor: 'move',
        snap: '#content'
      });
    });
  }
  if (!isPartiallyVisible(puzzle)) {
    puzzles.forEach(item => {
      item.classList.remove('moved');
      item.removeAttribute('draggable');
    })
  }
});


















/* ________________________________________________________________________________________ */
/* getters, setters */

function EmailParser(email) {
  this.email = email;

  Object.defineProperty(this, 'name', {
    get: function () {
      return this.isCorrect ? this.email.split('@')[0] : null;
    }
  });

  Object.defineProperty(this, 'domain', {
    get: function () {
      return this.isCorrect ? this.email.split('@')[1] : null;
    }
  });

  Object.defineProperty(this, 'isCorrect', {
    get: function () {
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

const watchObj = function (elem, func) {
  return new Proxy(elem, {
    get(target, name) {
      switch (typeof target[name]) {
        case ('object'):
          return watchObj(target[name], func);
        case ('function'):
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

let cleverDiv = watchObj(div, function (prop, value) {
  console.log(prop, value);
})

cleverDiv.innerHTML = `<strong>HTML</strong><em>Changed</em>`;

cleverDiv.style.color = 'red';

cleverDiv.querySelector('em').style.color = 'green';



















const aboutContainer = document.querySelector('.about-item.first');
const checkVisible = document.querySelector('.man-animation-anchor');
let man = document.querySelector('.service-img');
const startManTopPosition = checkVisible.getBoundingClientRect().top - man.getBoundingClientRect().height;

function isVisible( node ) {
  let elementBoundary = node.getBoundingClientRect();
  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  let height = elementBoundary.height;
  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
};
function percentToValue (width, percent) {
  return (width / 100) * percent
}
function scrollMan(node, startTopPosition) {
  const manSpeed  = 0.7;
  const scrollTop  = window.pageYOffset - node.getBoundingClientRect().top;
  const manWidth  = node.offsetWidth;
  const bodyWidth = document.body.offsetWidth;
  node.style.left = (-manWidth + scrollTop * manSpeed) + 'px';
  if (node.getBoundingClientRect().left <= 0) {
    node.style.top = (startTopPosition + scrollTop * manSpeed) + 'px';
  }
}
function scrollHandler() {
  requestAnimationFrame( function () {
    scrollMan(man, startManTopPosition)
    if (man.getBoundingClientRect().left >= percentToValue(document.body.offsetWidth, 70)) {
      aboutContainer.classList.remove('m-about-item');
      (!isVisible(man)) && window.removeEventListener('scroll', scrollHandler);
    } else {
      aboutContainer.classList.add('m-about-item');
    }
  });
}
window.addEventListener('scroll', scrollHandler);




