import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.Object.extend({
      username: null,
      email: null,
      password: null,
      passwordConfirm: null
    }).create();
  },
  setupController: function(controller, model) {
    controller.set('registration', model);
  }
});
