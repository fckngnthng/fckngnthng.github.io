console.log('index.js init ver16');

function atbClick(link) {
  console.log(link);
  window.parent.postMessage(link, '*');

}
