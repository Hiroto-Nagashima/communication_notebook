class Api::V1::CommunicationNotebooksController < ApplicationController
  def create
    @kid = Kid.find(params[:kid_id])
    @communication_notebook = @kid.communication_notebooks.build(communication_notebook_params)
    if @communication_notebook.save!
      render json: {}
    else
      render json: {
        status: 400,
        message: "未入力箇所があります"
        },status: 400
    end
  end

  def index
    if communication_notebook = CommunicationNotebook.find_by(created_at: params[:date])
      render json: communication_notebook
    else
      @communication_notebook= CommunicationNotebook.new
      render json: @communication_notebook
    end
  end
  private

  def communication_notebook_params
    params.require(:communication_notebook).permit(:bodyTemperature, :bath, :mood, :breakfast, :dinner, :memo)
  end
end
