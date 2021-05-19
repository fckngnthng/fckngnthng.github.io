console.log('index.js init ver15');

function atbClick(link) {
  console.log(link);
  const event = new CustomEvent({ link })
  window.parent.postMessage(link, '*');

}
