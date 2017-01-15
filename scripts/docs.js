// var fs = require('fs')
// var commonmark = require('commonmark')
// var jsdom = require('jsdom')

// var branch = fs.readFileSync('.git/HEAD').toString().split(/\r|\n|\r\n/)[0]
// branch = branch.slice(branch.lastIndexOf('/') + 1)

// var destination = './gh-pages/' + branch

// var mustRebuildAll = false

// try {
//   if (!fs.fstatSync(fs.openSync(destination)).isDirectory()){
//       console.error('Destination ' + JSON.stringify(destination)+ ' is not a directory.')
//     }
// } catch (e) {
//   fs.mkdirSync(destination)
//   mustRebuildAll = true
// }

// if (!fs.existsSync(destination + '/partials')) {fs.mkdirSync(destination + '/partials')}


// var sources = fs.readDirSync('./docs')
// sources.forEach(function(source) {

// })

//          // <svg style="width: 512px; height: 512px;" height="100%" width="100%" preserveAspectRatio="xMinYMin meet" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g class="svgGrid" id="svgGrid"><line stroke-width="1" stroke="#B35047" x1="32" x2="32" y1="0" y2="512"></line><line stroke-width="1" stroke="#B35047" x1="64" x2="64" y1="0" y2="512"></line><line stroke-width="1" stroke="#B35047" x1="96" x2="96" y1="0" y2="512"></line><line stroke-width="1" stroke="#B35047" x1="128" x2="128" y1="0" y2="512"></line><line stroke-width="1" stroke="#B35047" x1="160" x2="160" y1="0" y2="512"></line><line stroke-width="1" stroke="#B35047" x1="192" x2="192" y1="0" y2="512"></line><line stroke-width="1" stroke="#B35047" x1="224" x2="224" y1="0" y2="512"></line><line stroke-width="1" stroke="#B35047" x1="256" x2="256" y1="0" y2="512"></line><line stroke-width="1" stroke="#B35047" x1="288" x2="288" y1="0" y2="512"></line><line stroke-width="1" stroke="#B35047" x1="320" x2="320" y1="0" y2="512"></line><line stroke-width="1" stroke="#B35047" x1="352" x2="352" y1="0" y2="512"></line><line stroke-width="1" stroke="#B35047" x1="384" x2="384" y1="0" y2="512"></line><line stroke-width="1" stroke="#B35047" x1="416" x2="416" y1="0" y2="512"></line><line stroke-width="1" stroke="#B35047" x1="448" x2="448" y1="0" y2="512"></line><line stroke-width="1" stroke="#B35047" x1="480" x2="480" y1="0" y2="512"></line><line stroke-width="1" stroke="#B35047" x1="0" x2="512" y1="32" y2="32"></line><line stroke-width="1" stroke="#B35047" x1="0" x2="512" y1="64" y2="64"></line><line stroke-width="1" stroke="#B35047" x1="0" x2="512" y1="96" y2="96"></line><line stroke-width="1" stroke="#B35047" x1="0" x2="512" y1="128" y2="128"></line><line stroke-width="1" stroke="#B35047" x1="0" x2="512" y1="160" y2="160"></line><line stroke-width="1" stroke="#B35047" x1="0" x2="512" y1="192" y2="192"></line><line stroke-width="1" stroke="#B35047" x1="0" x2="512" y1="224" y2="224"></line><line stroke-width="1" stroke="#B35047" x1="0" x2="512" y1="256" y2="256"></line><line stroke-width="1" stroke="#B35047" x1="0" x2="512" y1="288" y2="288"></line><line stroke-width="1" stroke="#B35047" x1="0" x2="512" y1="320" y2="320"></line><line stroke-width="1" stroke="#B35047" x1="0" x2="512" y1="352" y2="352"></line><line stroke-width="1" stroke="#B35047" x1="0" x2="512" y1="384" y2="384"></line><line stroke-width="1" stroke="#B35047" x1="0" x2="512" y1="416" y2="416"></line><line stroke-width="1" stroke="#B35047" x1="0" x2="512" y1="448" y2="448"></line><line stroke-width="1" stroke="#B35047" x1="0" x2="512" y1="480" y2="480"></line><rect x="0" y="0" width="512" height="512" fill="none" stroke-width="1" stroke="#B35047"></rect></g><path d="M 476.698,37.321l-2.014-2.021c-47.074-47.067-124.097-47.067-171.163,0.00L 194.468,144.368 c-47.067,47.066-47.067,124.088,0.00,171.155l 2.013,2.013c 3.916,3.924, 8.073,7.462, 12.368,10.729l 39.924-39.925 c-4.651-2.747-9.063-6.036-13.058-10.03l-2.021-2.021c-25.557-25.549-25.557-67.136,0.00-92.695L 342.758,74.538 c 25.558-25.559, 67.137-25.559, 92.693,0.00l 2.021,2.012c 25.55,25.558, 25.55,67.146,0.00,92.695l-49.343,49.343 c 8.566,21.154, 12.624,43.70, 12.269,66.193l 76.302-76.302C 523.767,161.411, 523.767,84.39, 476.698,37.321zM 315.521,194.467c-3.916-3.916-8.073-7.461-12.368-10.72l-39.924,39.916c 4.652,2.748, 9.063,6.037, 13.058,10.031l 2.021,2.02 c 25.558,25.558, 25.558,67.136,0.00,92.694L 169.243,437.475c-25.559,25.551-67.138,25.551-92.694,0.00l-2.021-2.021 c-25.549-25.56-25.549-67.138,0.00-92.694l 49.344-49.343c-8.567-21.153-12.623-43.701-12.269-66.193l-76.301,76.299 c-47.068,47.066-47.068,124.089,0.00,171.162l 2.013,2.016c 47.076,47.064, 124.096,47.064, 171.164,0.00l 109.055-109.059 c 47.067-47.066, 47.067-124.097,0.00-171.163L 315.521,194.467z"></path></svg>