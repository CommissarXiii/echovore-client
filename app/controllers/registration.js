import Ember from 'ember';

export default Ember.Controller.extend({
  title: 'Echovore Registration',
  actions: {
    register: function() {

      Ember.$.post('http://localhost:3000/registration', this.get('registration').getProperties(['username', 'email', 'password', 'passwordConfirm']), function(res) {

        console.log(res);
      });
    }
  }
});
