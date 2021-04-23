class Api::V1::CommunicationNotebooksController < ApplicationController
  def create
    @kid = Kid.find(params[:kid_id])
    @communication_notebook = @kid.communication_notebooks.build(communication_notebook_params)
    if @communication_notebook.save!
      render json: {
        status: "ok"
      }
    else
      render json: {
        status: 400,
        message: "未入力箇所があります"
        },status: 400
    end
  end

  # def update
  #   @kid = Kid.find(params[:kid_id])
  #   @communication_notebook = @kid.communication_notebooks.build(communication_notebook_params)
  #   if @communication_notebook.save!
  #     render json: {
  #       status: "ok"
  #     }
  #   else
  #     render json: {
  #       status: 400,
  #       message: "未入力箇所があります"
  #       },status: 400
  #   end
  # end

  def index
    date = params[:date]
    new_date = date.slice(0..9)
    communication_notebook = CommunicationNotebook.where("created_at like?", "#{new_date}%")
    if communication_notebook.present?
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
