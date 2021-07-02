/* Copyright 2021 Akseizer Design Group */

// Get HTML head element
var head = document.getElementsByTagName('HEAD')[0];

// Create new link Element
var link = document.createElement('link');

// Set the attributes for link element
link.rel = 'stylesheet';

link.type = 'text/css';

link.href =
  'https://cdn.jsdelivr.net/gh/jmechristian/social-share-jme@latest/public/style.css';

// Append link element to HTML head
head.appendChild(link);

// Social buttons

const facebookBtn = document.querySelector('.facebook-btn');
const twitterBtn = document.querySelector('.twitter-btn');
const pinterestBtn = document.querySelector('.pinterest-btn');

const init = () => {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI('Hi everyone, check this out: ');

  facebookBtn.setAttribute(
    'href',
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    'href',
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  pinterestBtn.setAttribute(
    'href',
    `https://pinterest.com/pin/create/bookmarklet/?url=${postUrl}&description=${postTitle}`
  );
};

init();
