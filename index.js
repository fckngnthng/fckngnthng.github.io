
(function () {

  console.log('index.js init 4');

  document.atbHelper = {
    generateEventClick: function() {
      generateEventClick
    }
  }

  function generateEventClick(link) {
    console.log('ATBHrefClick', link)
    document.atbHelper.dispatchEvent(new Event('ATBHrefClick', { link }))
  }
})()


