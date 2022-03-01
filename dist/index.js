  const expandMenuButton = document.querySelector('#expand-menu');
  const closeButton = document.querySelector('#close-menu');

function openMenu() {

  const closeButton = document.querySelector('#close-menu');
  const expandMenuButton = document.querySelector('#expand-menu');
  const menu = document.querySelector('#menu');

  menu.classList.remove('hide');
  menu.classList.add('show');

  expandMenuButton.classList.add('hidden');

}

function closeMenu() {

  const closeButton = document.querySelector('#close-menu');
  const expandMenuButton = document.querySelector('#expand-menu');
  const menu = document.querySelector('#menu');

  menu.classList.remove('show');
  menu.classList.add('hide');

  expandMenuButton.classList.remove('hidden');
  
}

// removes the active style to a link
function removeActiveLink(navbarlink) {

  if(navbarlink) {
    navbarlink.classList.remove('active-link');
    navbarlink.classList.add('text-white', 'md:text-[#274690]', 'hover:bg-white/30', 'md:hover:bg-[#4E74CF]');
    return;
  }
  const allLinks = document.querySelectorAll('nav ul li a');
  allLinks.forEach( (link) => {
    link.classList.remove('active-link');
    link.classList.add('text-white', 'md:text-[#274690]', 'hover:bg-white/30', 'md:hover:bg-[#4E74CF]');
  });

}

// applies the active style to a link
function makeActiveLink(link) {

  removeActiveLink();
  // console.log('made active link');
  const currentLink = link
  currentLink.classList.remove('text-white', 'md:text-[#274690]', 'hover:bg-white/30', 'md:hover:bg-[#4E74CF]');
  currentLink.classList.add('active-link');
  closeMenu();
  // console.log('result' + currentLink.classList.contains('active-link'))

}


const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach( (link) => {
  link.addEventListener('click', () => {
    makeActiveLink(link);
  });
});


const home = document.querySelector('#home');
home.addEventListener('focus', () => {
  makeActiveLink(document.querySelector('#home-link'));
  console.log('focus home');
});

const about = document.querySelector('#about');
about.addEventListener('focus', () => {
  makeActiveLink(document.querySelector('#about-link'));
});

const projects = document.querySelector('#projects');
projects.addEventListener('focus', () => {
  makeActiveLink(document.querySelector('#projects-link'));
});

const contact = document.querySelector('#contact');
contact.addEventListener('focus', () => {
  makeActiveLink(document.querySelector('#contact-link'));
});

expandMenuButton.addEventListener('click', openMenu );
closeButton.addEventListener('click', closeMenu );


function navbarlinksActive() {
	  
  let activePos = window.scrollY + 250;
  navLinks.forEach( (link) => {
    // console.log(link)
    let pageSection = document.querySelector(link.hash);
    // console.log('started', pageSection.offsetHeight, pageSection.offsetTop, link.hash, activePos);
    if (activePos >= pageSection.offsetTop && activePos <= (pageSection.offsetTop + pageSection.offsetHeight)) {
      makeActiveLink(link);
    }else {
      // removeActiveLink(link);
    }
  })
}
// window.addEventListener('load', navbarlinksActive)
document.addEventListener('scroll', () => {
  navbarlinksActive();
});