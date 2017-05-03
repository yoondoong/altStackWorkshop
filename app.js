// SCROLL DOWN FOR DIRECTIONS
var user;

document.addEventListener(‘DOMContentLoaded’, function() {
 var loggedInUser = localStorage.getItem(“username”);
 if (loggedInUser != null ){
   document.getElementById(‘hello’).innerText = `Hi, ${loggedInUser}!`;
   document.getElementById(‘hello’).style.display = “block”;
   user = loggedInUser;
 }
 else{
   user = ‘Anonymous’;
 }
}, false);

var nav = new Vue({
  el: '#fake-nav',
  methods: {
    open: function(which, e) {
      e.preventDefault();
      modal.active = which;
      console.log(modal.active);
    },
  }
});

var modal_submit_login = 'Login';

var modal = new Vue({
  el: '#login-modal',
  data: {
    active: null,
    submitted: null,

    loginSubmit: modal_submit_login,
    loginUser: '',
  },
  methods: {
    close: function(e) {
      e.preventDefault();
      if (e.target === this.$el) {
        this.active = null;
      }
    },
    submit: function(which, e) {

      user = document.getElementById('username').value;
      localStorage.setItem(“username”, user);
      document.getElementById('hello').innerText = `Hi, ${user}!`;
      document.getElementById('hello').style.display = "block";
      modal.active = null;


    }
  }
});

// ADD CODE HERE TO CREATE A VUE INSTANCE
