// HEADER COMPONENT

'use strict';

var docURL = document.URL;
    var linksList = document.querySelectorAll('a[href]');
    for (var i = 0; i< linksList.length; i++) {
        var link = linksList[i];
        if (link.href === docURL) {
            link.className += 'current-link';
        }
    }

var menu = {
    menus: [
    {
      title: 'Dashboard',
      link: 'dashboard.html',
      isActive: true
    },
    {
      title: 'Total Visits',
      link: 'visits.html',
      isActive: false

    },
    {
      title: 'Running Distance',
      link: 'distance.html',
      isActive: false

    },
    {
      title: 'Personal Best',
      link: 'best.html',
      isActive: false
    }
    ]
}
Vue.component('main-menu', {
  template: `
              <ul class="tabs" v-if="menus.length">
                <li v-for="menu in menus">
                  <a :href="menu.link" v-bind:class="{ active: menu.isActive }">{{ menu.title }}</a>
                </li>
              </ul>
            `,
  data: function() {
    return menu;
  }
});

var menus = new Vue({
  el: '#mainmenu'
})





