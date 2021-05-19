
// (function () {

  console.log('index.js init 15');

//   // document.addEventListener('iframeLoad', ev => {
//   //   var iframe = document.getElementById('test-external-iframe');
//   //   console.log(iframe)
//   //   const externalLinks = (iframe.contentDocument || iframe.contentWindow.document).body.querySelectorAll('a')
//   //   console.log(externalLinks);
//   //   externalLinks.forEach(element => {
//   //       element.addEventListener('click', function (e) {
//   //           e.preventDefault()
//   //           console.log(this.href)
//   //       })
//   //   })
//   // })

//   // var frame = document.getElementById('new-atb-product-iframe');
//   // var frameWindow = frame.contentWindow ? frame.contentWindow : frame.contentDocument.defaultView;

//   // const event = new CustomEvent({ link })
//   // frameWindow.postMessage(JSON.stringify(event), '*');

// })()

function atbClick(link) {
  // var frame = document.getElementById('new-atb-product-iframe');
  // var frameWindow = frame.contentWindow ? frame.contentWindow : frame.contentDocument.defaultView;

  const event = new CustomEvent({ link })
  window.parent.postMessage(JSON.stringify(event), '*');

}
