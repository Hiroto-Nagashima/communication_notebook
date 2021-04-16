module  Api
  module V1
    class KidsController < ApplicationController
      def show
        kid = Kid.find(params[:id])
        render json: kid
      end
    end
  end
end