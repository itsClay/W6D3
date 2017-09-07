const APIUtil = {
  followUser: id => APIUtil.changeFollowStatus(id, "POST"),
  unfollowUser: id => APIUtil.changeFollowStatus(id, "DELETE"),

  changeFollowStatus: (id, type) => (
    // debugger;
    $.ajax({
      url: `/users/${id}/follow`,
      dataType: 'JSON',
      type
    })
  )
};


module.exports = APIUtil;
