Rails.application.routes.draw do
  # devise_for :kids
  namespace 'api' do
    namespace 'v1' do
      resources :kids do
        resources :communication_notebooks
      end
    end
  end

end
