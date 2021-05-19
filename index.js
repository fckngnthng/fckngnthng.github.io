
(function () {

  console.log('index.js init 7');

  document.helper = document.createElement('div');

})()

function generateEventClick(link) {
  console.log('ATBHrefClick', link)
  console.log(document.helper);
  document.helper.dispatchEvent(new Event('ATBHrefClick', { link }))
}

