
(function () {

  console.log('index.js init 9');

  document.addEventListener('iframeLoad', ev => {
    var iframe = document.getElementById('test-external-iframe');
    console.log(iframe)
  })

})()

