$(function() {
  function buildHTML(comment){
    var html = `<p>
                  <strong>
                    <a href=/users/${comment.user_id}>${comment.user_name}</a>
                    :
                  </strong>
                  ${comment.text}
                </p>`
    return html;
  }
  // HTMLを追加している。簡単な記述で実現できるのはテンプレートリテラル記法を使用しているため
  // テンプレートリテラル記法は｀｀で囲むことによって、複数行文字列や文字列内挿入機能を使用できるもの。
  // buildHTMLの引数として渡されたcommentはサーバーから返されたデータであるjbuilderのデータであるため、ファイル内で定義したキーとバリューの形式で使用することができる。

  $('#new_comment').on('submit', function(e) {
    // フォームが送信されたらイベントが発火するようにする
    e.preventDefault();
    // 通常の同期通信を止める
    var formData = new FormData(this);
    // イベントが起きたフォームのデータを取得し、formDataという変数に代入
    var url = $(this).attr('action');
    // attrメソッドは要素が持つ指定属性の値を返す
    // 要素が指定属性を持っていないときはundefinedを返す
    // 今回はイベントが発生した要素のaction属性の値を取得しており、今回のaction属性にはフォームの送信先の値が入っている
    // つまり、"/twwets/#{tweet.id}/comments"が入っている
    $.ajax({
      // 非同期通信でコメントが保存されるようにする
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      // processDataオプションはデフォルトではtrueになっており、dataに指定したオブジェクトをクエリ文字に変換する役割がある
      // クエリ文字とは、webブラウザなどがwebサーバーに送信するデータをURLの末尾に特定の形式で表記したもの
      contentType: false
      // contentTypeオプションはサーバーにデータのファイル形式を伝えるヘッダ
      // text/xmlでコンテンツタイプをXMLとして返してくる
      // ajaxのリクエストがFormDataのときはどちらの値も適切な状態で送ることが可能なため、falseにすることで設定が上書きされることを防ぐ
      // FormDataを使ってフォームの情報を取得した時には必ずfalseにするという認識で良い
    })
    .done(function(data) {
      // 非同期通信に成功した時の記述
      // function(data)となっている部分の第一引数はサーバーから返されたデータが入っている
      // この時サーバーから返ってくるデータは、jbuilderで作成したcreate.json.jbuilderのデータ
      var html = buildHTML(data);
      $('.comments').append(html);
      $('.textbox').val('')
    })
    .fail(function(){
      alert('error');
    })
  })
});

















