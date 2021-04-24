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
    kid = Kid.find(params[:kid_id])
    communication_notebooks = kid.communication_notebooks
    render json: communication_notebooks
  end
  def new
    target_date = params[:target_date]
    new_date = target_date.slice(0..9)
    communication_notebook = CommunicationNotebook.where("date like?", "#{new_date}%")
    if communication_notebook.present?
      render json: {status: "ok"}
    else
      render json: {status: "already exist"}
    end
  end
  private

  def communication_notebook_params
    params.require(:communication_notebook).permit(:bodyTemperature, :bath, :mood, :breakfast, :dinner, :memo, :date)
  end
end
