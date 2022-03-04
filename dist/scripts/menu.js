class MENU {

  constructor() {

    document.addEventListener('scroll', () => {
      this.navbarlinksActive();
      this.navDisplay();
    });

    document.addEventListener('click', (e) => {

      //this does the scrolling for the back to top button
      if(e.target.id === 'back-to-top' || e.target.id === 'back-to-top-img') {
        e.preventDefault();
        let section;
        if(e.target.id === 'back-to-top-img') {
          section = document.querySelector(e.target.parentNode.hash);
        }else{
          section = document.querySelector(e.target.hash);
        }
        window.scrollTo({
          top: (section.offsetTop - 50),
          behavior: 'smooth'
        })
      }

      //this closes the expanded menu when an external element is clicked on
      let isNavElement, path;
      if(e.path){
        //for chrome browsers
        path = e.path;
      }else if(e.composedPath()) {
        // for firefox browser
        path = e.composedPath();
      }

      if(path){
        e.composedPath().every( element => {
          if(element.localName === 'nav') {
            isNavElement = true;
            return false;
          }else {
            isNavElement = false;
            return true;
          }
        });
        if(!isNavElement) {
          this.closeMenu();
        }
      }

    });

    //this adds event listener for all nav links to navigate to the selected part of the page
    this.navLinks.forEach( (link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.querySelector(link.hash);
        window.scrollTo({
          top: (section.offsetTop - 50),
          behavior: 'smooth'
        })
        // this.makeActiveLink(link);
      });
    });

    //this opens the menu when clicked
    this.expandMenuButton.addEventListener('click', this.openMenu );

    //this closes the menu when clicked
    this.closeButton.addEventListener('click', this.closeMenu );

  }
  
  closeButton = document.querySelector('#close-menu');
  expandMenuButton = document.querySelector('#expand-menu');
  menu = document.querySelector('#menu');
  navLinks = document.querySelectorAll('#nav-link');


  openMenu = () => {

    this.menu.classList.remove('hide');
    this.menu.classList.add('show');
    this.expandMenuButton.classList.add('hidden');
  
  }
  
  closeMenu = () => {
  
    this.menu.classList.remove('show');
    this.menu.classList.add('hide');
    this.expandMenuButton.classList.remove('hidden');
    
  }
  
  // removes the active style to a link
  removeActiveLink = (activeLink) => {
  
    if(activeLink) {
      activeLink.classList.remove('active-link');
      activeLink.classList.add('text-white', 'md:text-[#274690]', 'hover:bg-white/30', 'md:hover:bg-slate-600/40', 'hover:ml-4');
      return;
    }
    const allLinks = document.querySelectorAll('#nav-link');
    allLinks.forEach( (link) => {
      link.classList.remove('active-link');
      link.classList.add('text-white', 'md:text-[#274690]', 'hover:bg-white/30', 'md:hover:bg-slate-600/40', 'hover:ml-4');
    });
  
  }
  
  // applies the active style to a link
  makeActiveLink = (link) => {
  
    this.removeActiveLink();
    const currentLink = link
    currentLink.classList.remove('text-white', 'md:text-[#274690]', 'hover:bg-white/30', 'md:hover:bg-slate-600/40', 'hover:ml-4');
    currentLink.classList.add('active-link');
    this.closeMenu();
  
  }

  //this adds shadow to the nav bar when scrolled down to a particular point
  navDisplay = () => {

    const nav = document.querySelector('nav');
    const topBtn = document.querySelector('#back-to-top');

    if(window.scrollY < 100) {
      nav.classList.remove('shadow-md');
    }else{
      nav.classList.add('shadow-md');
    }

    if(window.scrollY > 500) {
      topBtn.classList.remove('hidden');
      topBtn.classList.add('grid');
    }else{
      topBtn.classList.remove('grid');
      topBtn.classList.add('hidden');
    }
  
  }
  
  // highlights the active link on scroll
  navbarlinksActive = () => {
      
    let activePos = window.scrollY + 250;
    this.navLinks.forEach( (link) => {
      let pageSection = document.querySelector(link.hash);
      if (activePos >= pageSection.offsetTop && activePos <= (pageSection.offsetTop + pageSection.offsetHeight)) {
        this.makeActiveLink(link);
      }else {
        // removeActiveLink(link);
      }
    })
  }
  
}

// export {MENU};