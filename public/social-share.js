/* Copyright 2021 Akseizer Design Group */

// Get HTML head element
var head = document.getElementsByTagName('HEAD')[0];

// Create new link Element
var link = document.createElement('link');

// Set the attributes for link element
link.rel = 'stylesheet';

link.type = 'text/css';

link.href =
  'https://cdn.jsdelivr.net/gh/jmechristian/social-share-jme/public/style.css';

// Append link element to HTML head
head.appendChild(link);

// Social buttons

//Load into Container
const loadButtons = () => {
  document.querySelector('.share-buttons').innerHTML =
    '<div class="button-container"><a href="#" class="facebook-btn" target="_blank"><i class="fab fa-facebook-f"></i></a></div><div class="button-container"><a href="#" class="twitter-btn" target="_blank"><i class="fab fa-twitter"></i></a></div><div class="button-container"><a href="https://www.instagram.com/ghosttequila"><i class="fab fa-instagram"></i></a></div>';
};

loadButtons();

const facebookBtn = document.querySelector('.facebook-btn');
const twitterBtn = document.querySelector('.twitter-btn');
const pinterestBtn = document.querySelector('.pinterest-btn');

const init = () => {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI('Perfectly Spicy Ghost Tequila');

  facebookBtn.setAttribute(
    'href',
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    'href',
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );
};

init();
