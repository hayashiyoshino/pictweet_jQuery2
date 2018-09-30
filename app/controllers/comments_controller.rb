class CommentsController < ApplicationController
  def create
    @comment = Comment.create(text: comment_params[:text], tweet_id: comment_params[:tweet_id], user_id: current_user.id)

    respond_to do |format|
      format.html { redirect_to tweet_path(params[:tweet_id])}
      format.json
    end
    # respond_to do を使用し、リクエストされたformatによって処理を分けるようにする
    # todoリストのアプリではformat.jsonに引数としてインスタンスを渡したが、今回はjbuilderを使ってJavaScriptに返すデータを作成する。
    # jbuilderは、railsにデフォルトで入っているgemで、入力データをJSON形式で出力するテンプレートエンジン。
  end

  private
  def comment_params
    params.permit(:text, :tweet_id)
  end

end
