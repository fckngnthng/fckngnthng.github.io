console.log('index.js init ver17');

function atbClick(link) {
  console.log(link);
  window.parent.postMessage(JSON.stringify({ type: 'ATBExtLink', link }), '*');

}
