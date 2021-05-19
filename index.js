console.log('index.js init ver18');

function atbClick(link) {
  console.log(link);
  window.parent.postMessage(JSON.stringify({ type: 'ATBExtLink', link }), '*');

}
