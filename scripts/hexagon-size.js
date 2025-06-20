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


// TESTIMONIALS /////////

// Select the .testimonials-img element
const testimonialsImg = document.querySelector('.testimonials-img');

// Make sure the element exists before continuing
if (testimonialsImg) {
  const testimonialsWidth = testimonialsImg.offsetWidth;
  const testimonialsHeight = testimonialsImg.offsetHeight;

  // Calculate 105% of the original width and height
  const newTestimonialsWidth = testimonialsWidth * 1.05;
  const newTestimonialsHeight = testimonialsHeight * 1.05;

  // Select the .testimonials-hexagon element
  const testimonialsHexagon = document.querySelector('.testimonials-hexagon');

  // Set the new width and height if the second element exists
  if (testimonialsHexagon) {
    testimonialsHexagon.style.width = `${newTestimonialsWidth}px`;
    testimonialsHexagon.style.height = `${newTestimonialsHeight}px`;
  }
}

const testimonials = document.querySelector('.testimonials');

// Make sure the element exists before continuing
if (testimonials) {
  const heightTestimonials2 = testimonials.offsetHeight;

  // Calculate 105% of the original width and height
  const newTestimonialsHeight2 = heightTestimonials2 * .9;
  const newTestimonialsWidth2 = heightTestimonials2 * 1.05;

  // Select the .testimonials-hexagon element
  const testimonialsHexagon2 = document.querySelector('.testimonials-hexagon-2');

  // Set the new width and height if the second element exists
  if (testimonialsHexagon2) {
    testimonialsHexagon2.style.width = `${newTestimonialsWidth2}px`;
    testimonialsHexagon2.style.height = `${newTestimonialsHeight2}px`;
  }
}

// Broken, ignore
const testimonialstext = document.querySelector('.testimonials-text');

// Make sure the element exists before continuing
if (testimonialstext) {
  const computedStyle = window.getComputedStyle(testimonialstext);

  const heightTestimonials3 = testimonialstext.offsetHeight;
  const widthTestimonials3 = testimonialstext.offsetWidth;

  const leftPadding = computedStyle.paddingLeft;
  const rightPadding = computedStyle.paddingRight;
  const topPadding = computedStyle.paddingTop;
  const bottomPadding = computedStyle.paddingBottom;

  const actualWidth = widthTestimonials3 - (leftPadding + rightPadding)
  const actualHeight = heightTestimonials3 - (topPadding + bottomPadding)

  let largestDimension;

  if(actualWidth > actualHeight) {
    largestDimension = actualWidth
  } else {
    largestDimension = actualHeight
  }

  console.log(`width: ${actualWidth}`)
  console.log(`height: ${actualHeight}`)
  console.log(`largest: ${largestDimension}`)

  // Calculate 105% of the original width and height
  const newTestimonialsHeight3 = largestDimension * 1.15;
  const newTestimonialsWidth3 = largestDimension * 1.55;

  // Select the .testimonials-hexagon element
  const testimonialsHexagon3 = document.querySelector('.testimonials-hexagon-blue');

  // Set the new width and height if the second element exists
  if (testimonialsHexagon3) {
    testimonialsHexagon3.style.width = `${newTestimonialsWidth3}px`;
    testimonialsHexagon3.style.height = `${newTestimonialsHeight3}px`;
  }
}




// Door Cards 1 

const blackHexagons = document.querySelectorAll('.door-card-1-container .title');

blackHexagons.forEach(h => {
  const blackHexWidth = h.offsetWidth;
  h.style.height = `${blackHexWidth}px`;
})

const blueHexagons = document.querySelectorAll('.door-card-1-container .foot');

blueHexagons.forEach(h => {
  const blueHexWidth = h.offsetWidth;
  h.style.height = `${blueHexWidth}px`;
})