// PROFILE COMPONENT

'use strict';

var profile = {
    fname: 'Nelmari',
    sname: 'Addison',
    status: true,
    image: 'img/pp.png'
}


Vue.component('profile', {
  template: `<div class="profile-container">
              <div class="img-container pp">
                <img v-bind:src="image" style="width:150px;height:150px;">
              </div>
              <h2 class="name">{{ fname }} {{ sname }}</h2>
              <div class="user-status">
                <i v-bind:class="{ active: status }"></i>
                <p v-if="status" class="online">ACTIVE</p>
                <p v-else class="online">OFFLINE</p>
              </div>
            </div>
            `,
  data: function() {
    return profile;
  }
})

var profile = new Vue({
  el: '#profile'
})