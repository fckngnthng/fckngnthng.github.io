function atbBack() {
  console.log(window.history);
  if (window.history.length === 1) {
    windows.close()
  } else window.history.back();
}

console.log('version 4');
