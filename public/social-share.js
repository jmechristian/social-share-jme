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

const facebookBtn = document.querySelector('.facebook-btn');
const twitterBtn = document.querySelector('.twitter-btn');

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

const setPinterest = () => {
  let script = document.createElement('script'); // create a script DOM node
  script.src = 'https://assets.pinterest.com/js/pinit.js'; // set its src to the provided URL

  document.body.appendChild(script);
};

setPinterest();
init();
