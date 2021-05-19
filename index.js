
(function () {

  console.log('index.js init');

  window.document.generateEventClick = generateEventClick;

  function generateEventClick(link) {
    console.log('ATBHrefClick', link)
    document.dispatchEvent(new Event('ATBHrefClick', { link }))
  }

})()