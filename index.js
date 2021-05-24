function atbBack() {
  console.log(window.history);
  if (window.history.length === 1) {
    window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({ type: 'ATBClosePage' }))
  } else window.history.back();
}

console.log('version 1');
