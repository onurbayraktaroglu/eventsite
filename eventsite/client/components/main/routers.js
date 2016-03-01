Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'Index',
});

Router.route('/event-detail', {
  name: 'EventDetail',
});