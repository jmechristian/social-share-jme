const facebookBtn = document.querySelector('.facebook-btn');
const twitterBtn = document.querySelector('.twitter-btn');
const pinterestBtn = document.querySelector('.pinterest-btn');

const init = () => {
  const pinterestImg = document.querySelector('.pinterest-img');

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI('Hi everyone, please check this out: ');
  let postImg = encodeURI(pinterestImg.src);

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
    `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}`
  );
};

init();
