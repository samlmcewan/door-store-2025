// Select the .hero-img element
const heroImg = document.querySelector('.hero-img');

// Make sure the element exists before continuing
if (heroImg) {
  const width = heroImg.offsetWidth;
  const height = heroImg.offsetHeight;

  // Calculate 105% of the original width and height
  const newWidth = width * 1.05;
  const newHeight = height * 1.05;

  // Select the .hero-hexagon element
  const heroHexagon = document.querySelector('.hero-hexagon');

  // Set the new width and height if the second element exists
  if (heroHexagon) {
    heroHexagon.style.width = `${newWidth}px`;
    heroHexagon.style.height = `${newHeight}px`;
  }
}

const hero = document.querySelector('.hero');

// Make sure the element exists before continuing
if (hero) {
  const height2 = hero.offsetHeight;

  // Calculate 105% of the original width and height
  const newHeight2 = height2 * .9;
  const newWidth2 = height2 * 1.05;

  // Select the .hero-hexagon element
  const heroHexagon2 = document.querySelector('.hero-hexagon-2');

  // Set the new width and height if the second element exists
  if (heroHexagon2) {
    heroHexagon2.style.width = `${newWidth2}px`;
    heroHexagon2.style.height = `${newHeight2}px`;
  }
}


const herotext = document.querySelector('.hero-text-container');

// Make sure the element exists before continuing
if (herotext) {
  const height3 = herotext.offsetHeight;

  // Calculate 105% of the original width and height
  const newHeight3 = height3 * 1.25;
  const newWidth3 = height3 * 1.75;

  // Select the .hero-hexagon element
  const heroHexagon3 = document.querySelector('.hero-hexagon-blue');

  // Set the new width and height if the second element exists
  if (heroHexagon3) {
    heroHexagon3.style.width = `${newWidth3}px`;
    heroHexagon3.style.height = `${newHeight3}px`;
  }
}
