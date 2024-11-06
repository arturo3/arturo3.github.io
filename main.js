let rotationDegree = 0;
let rotationIntervalId = null;
let lastScrollPosition = 0;
let isMobileView = false;

window.addEventListener("load", (_event) => {
  isMobileView = isMobile();
  startListeningToScrolling();
});

function scrollApplicationTo(elementId) {
  let scrollReference = window;

  if (!isMobileView) scrollReference = document.querySelector('div.content');

  const scrollToElement = document.getElementById(elementId);
  
  if (!scrollToElement) return;

  const elementRect = scrollToElement.getBoundingClientRect();
  let topPosition = elementRect.top;

  let scrollTop = 0;

  if (isMobileView) scrollTop = window.scrollY || document.documentElement.scrollTop;
  else scrollTop = scrollReference.scrollTop;
  
  // Jut give a bit more space on top so there's some background color
  // 135 is to account for sticky navigation menu
  topPosition += scrollTop + (isMobileView ? -135 : -10);

  highlightMenuItem(elementId == 'top' ? 'about-me' : elementId);
  scrollReference.scrollTo(0, topPosition);
}

function isMobile() {
  const mobileFooter = document.querySelector('div.mobile-footer');
  const displayProp = window.getComputedStyle(mobileFooter, null).display;
  return displayProp == 'flex';
}

function startListeningToScrolling() {
  const contentElement = document.querySelector('div.content');
  const spinnerElement = document.querySelector('div.spinner');
  const elementToTarget = isMobileView ? document : contentElement;

  elementToTarget.addEventListener('scroll', (e) => {
    // if (!rotationIntervalId) {
    //   const currentScrollPosition = e.target.scrollTop;
    //   let rotationIncrement = 1;
    
    //   if (currentScrollPosition < lastScrollPosition) {
    //     rotationIncrement = -1;
    //   }

    //   startRotatingSpinner(spinnerElement, rotationIncrement);
    // }
    highlightMenuItemInView();
  });

  elementToTarget.addEventListener('scrollend', (e) => {
    // if (rotationIntervalId) {
    //   stopRotatingSpinner();
    //   lastScrollPosition = e.target.scrollTop;
    // }
  });
}

function startRotatingSpinner(spinner, rotationIncrement) {
  rotationIntervalId = setInterval(() => {
    rotationDegree += rotationIncrement;
    spinner.style.transform = `rotate(${rotationDegree}deg)`;
  }, 25);
}

function stopRotatingSpinner() {
  clearInterval(rotationIntervalId);
  rotationIntervalId = null;
}

function highlightMenuItemInView() {
  const cards = Array.from(document.getElementsByClassName('panel'));

  if (isMobileView) {
    // Select the card that has the top of it in view or it's top border closest to the top 
    // of the viewport
    let cardClosestToTop = null;

    cards.forEach(c => {
      let cardTop = Math.abs(c.getBoundingClientRect().top);

      if (cardClosestToTop == null) cardClosestToTop = [c, cardTop];
      else {
        if (cardTop < cardClosestToTop[1]) cardClosestToTop = [c, cardTop];
      }
    });

    if (cardClosestToTop) highlightMenuItem(cardClosestToTop[0].id);
  } else {
    const cardsInView = cards.filter(c => c.getBoundingClientRect().top > 0);
    const firstCardInView = cardsInView[0];
  
    if (firstCardInView) highlightMenuItem(firstCardInView.id);
  }

}

function highlightMenuItem(menuItem) {
  const currentlySelectedItem = document.querySelector('div.menu-item.selected');

  if (currentlySelectedItem) currentlySelectedItem.classList.remove('selected');

  const itemToSelect = document.querySelector(`div.menu-item.mi-${menuItem}`);
  itemToSelect.classList.add('selected');
}