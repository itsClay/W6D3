const FollowToggle = require('./follow_toggle.js');
const APIUtil = require('./api_util.js');


$(() => {
  $('.follow-toggle').each ((i, btn) => new FollowToggle(btn, {}) );
});
