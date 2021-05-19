
(function () {

  console.log('index.js init');

  document.atbHelper = {
    helper: function() {
      generateEventClick
    }
  }

})()

function generateEventClick(link) {
  console.log('ATBHrefClick', link)
  document.dispatchEvent(new Event('ATBHrefClick', { link }))
}