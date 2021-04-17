class Api::V1::CommunicationNotebooksController < ApplicationController
  def create
    @communication_notebook = Communication_notebook.new(communication_notebook_params)
    if @communication_notebook.save
      render json: {},status: ok
    else
      render json: {
        status: 400,
        message; "未入力箇所があります"
        },status: 400
  end
  private

  def communication_notebook_params
    params.require(:communication_notebook).permit(:bodyTemperature, :hasBathed, :mood, :breakfast, :dinner, :memo)
  end
end
