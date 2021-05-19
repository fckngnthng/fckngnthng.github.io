
(function () {

  console.log('index.js init 2');

  document.atbHelper = {
    helper: function() {
      generateEventClick
    }
  }

})()

function generateEventClick(link) {
  console.log('ATBHrefClick', link)
  document.atbHelper.dispatchEvent(new Event('ATBHrefClick', { link }))
}