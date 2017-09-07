const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(btn, options) {
    this.$el = $(btn);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.text('Follow!');
    } else {
      this.$el.text('Unfollow!');
    }
  }

  handleClick() {
    const followToggle = this;

    this.$el.on('click', (event) => {
    event.preventDefault();
    this.$el.prop("disabled", true);



      if (this.followState === "unfollowed") {
        this.render();
        APIUtil.followUser(this.userId)
        .then( (r) => {
          followToggle.$el.data(this.followState, "followed");
          this.followState = "followed";
          followToggle.$el.prop("disabled", false);
          followToggle.render();
        });

      } else {
        this.render();
        APIUtil.unfollowUser(this.userId)
        .then( (r) => {
          followToggle.$el.data(this.followState, "unfollowed");
          this.followState = "unfollowed";
          followToggle.$el.prop("disabled", false);
          followToggle.render();
        });
      }
    });
  }
}

module.exports = FollowToggle;
