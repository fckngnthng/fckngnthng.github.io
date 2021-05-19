
(function () {

  console.log('index.js init 11');

  document.addEventListener('iframeLoad', ev => {
    var iframe = document.getElementById('test-external-iframe');
    console.log(iframe)
    const externalLinks = (iframe.contentDocument || iframe.contentWindow.document).body.querySelectorAll('a')
    console.log('externalLinks')
    externalLinks.forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault()
            console.log(this.href)
        })
    })
  })

})()

