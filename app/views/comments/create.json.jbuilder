json.text @comment.text
json.user_id @comment.user.id
json.user_name @comment.user.nickname

# jbuilderファイルでは基本的にjson.KEY VALUEという形で書くことができる。
# こうすることによってJavaScriptファイルに帰ってきたデータをjbuilderで定義したキーとバリューの形で呼び出して使うことができる。

