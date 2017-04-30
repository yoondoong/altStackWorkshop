
var nav = new Vue({
  el: '#fake-nav',
  methods: {
    open: function(which, e) {
      e.preventDefault();
      modal.active = which;
    },
  }
});

var modal_submit_register = 'Register';
var modal_submit_password = 'Reset Password';
var modal_submit_login = 'Login';

var modal = new Vue({
  el: '#login-modal',
  data: {
    active: null,
    submitted: null,

    // Submit button text
    registerSubmit: modal_submit_register,
    passwordSubmit: modal_submit_password,
    loginSubmit: modal_submit_login,

    // Modal text fields
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    loginUser: '',
    loginPassword: '',
    passwordEmail: '',

    // Modal error messages
    registerError: '',
    loginError: '',
    passwordError: '',
  },
  methods: {
    close: function(e) {
      e.preventDefault();
      if (e.target === this.$el) {
        this.active = null;
      }
    },
    flip: function(which, e) {
      e.preventDefault();
      if (which !== this.active) {
        this.active = which;
      }
    },
    submit: function(which, e) {
      e.preventDefault();
      this.submitted = which
      var data = {
        form: which
      };

      switch (which) {
        case 'register':
          data.name = this.registerName;
          data.email = this.registerEmail;
          data.password = this.registerPassword;
          this.$set('registerSubmit', 'Registering...');
          break;
        case 'login':
          data.user = this.loginUser;
          data.password = this.loginPassword;
          this.$set('loginSubmit', 'Logging In...');
          break;
        case 'password':
          data.email = this.passwordEmail;
          this.$set('passwordSubmit', 'Resetting Password...')
          break;
      }

      // TODO: submit our `data` variable
    }
  }
});


new Vue({

  // We want to target the div with an id of 'events'
  el: '#events',

  // Here we can register any values or collections that hold data
  // for the application
  data: {
    event: { name: '', description: '', date: '' },
    events: []
  },

  // Anything within the ready function will run when the application loads
  mounted: function() {
    // When the application loads, we want to call the method that initializes
    // some data
    this.fetchEvents();
  },

  // Methods we want to use in our application are registered here
  methods: {
    // We dedicate a method to retrieving and setting some data
    fetchEvents: function() {
      var events = [
        {
          id: 1,
          name: 'TIFF',
          description: 'Toronto International Film Festival',
          date: '2015-09-10'
        },
        {
          id: 2,
          name: 'The Martian Premiere',
          description: 'The Martian comes to theatres.',
          date: '2015-10-02'
        },
        {
          id: 3,
          name: 'SXSW',
          description: 'Music, film and interactive festival in Austin, TX.',
          date: '2016-03-11'
        }
      ];

      // Set the collection of events
      this.events = events;

      // or push them on separately
      // for (var i in events) {
      //   this.events.push(events[i]);
      // }
    },

    // Adds an event to the existing events array
    addEvent: function() {
      if(this.event.name) {
        this.events.push(this.event);
        this.event = { name: '', description: '', date: '' };
      }
    },

    deleteEvent: function(index) {
      if(confirm("Are you sure you want to delete this event?")) {
        // $remove is a Vue convenience method similar to splice
        this.events.splice(index, 1);
      }
    }
  }
});
