Vue.component('prog', {
  template: `
              <div class="prog">
                <h1>Check your progress!</h1>
                <div class="elements">
                  <a href="#"><div class="activities"><h3>Your Activities fellow Member!</h3><img id="myDIV" src="img/activities.png"></div></a>
                
                  <a href="#"><div class="calories"><h3>Hey Look at that FAT burnt!</h3><img id="myDIV" src="img/calories.png"></div></a>

                  <a href="#"><div class="distance"><h3>Running away from someone?</h3><img id="myDIV" src="img/distance.png"></div></a>
                </div>
              </div>
            `,
  data: function() {
    return prog;
  }
});
  
  var login = new Vue({
  el: '#prog'
});

