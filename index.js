function atbBack() {
  console.log(window.history);
  if (window.history.length === 1) {
    window.close()
  } else window.history.back();
}

console.log('version 5');
