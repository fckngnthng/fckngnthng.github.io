
(function () {

  console.log('index.js init 5');

  window.document = document;
  
  window.document.generateEventClick = generateEventClick;

  function generateEventClick(link) {
    console.log('ATBHrefClick', link)
    document.dispatchEvent(new Event('ATBHrefClick', { link }))
  }
})()


