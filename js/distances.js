// CHART DOC

'use strict';

Vue.component('distances', {
  template: `
              <div class="distances">
                <h1>Running distance!</h1>
                <div class="vid">
                <video width="620" height="540" autoplay loop>
                  <source src="img/giphy.mp4" type="video/mp4">
                </video>
                </div>
              </div>
            `
});
  
  var login = new Vue({
  el: '#distances'
})