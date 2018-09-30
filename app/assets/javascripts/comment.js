$(function() {
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
  })
})
