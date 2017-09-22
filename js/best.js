// best DOC

'use strict';

Vue.component('best', {
  template: `
              <div class="best">
                <h1>Personal Best!</h1>
                <div class="vid">
                <video width="620" height="540" autoplay loop>
                  <source src="img/giphy2.mp4" type="video/mp4">
                </video>
                </div>
              </div>
            `
});
  
  var login = new Vue({
  el: '#best'
})