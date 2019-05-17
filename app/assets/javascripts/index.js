$(function() {
  $(".chat-group-form__input").on("keyup", function() {
    var input = $(".chat-group-form__input").val();
    console.log(input)
    
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users) {
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendErrMsgToHTML("一致する名前はありません");
      }
    })
    .fail(function() {
      alert('名前検索に失敗しました');
    })
  });
});
    