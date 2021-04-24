Rails.application.routes.draw do
  # devise_for :kids
  namespace 'api' do
    namespace 'v1' do
      resources :kids do
        get '/communication_notebooks/new', to: 'communication_notebooks#new'
        get '/communication_notebooks/edit', to: 'communication_notebooks#edit'
        resources :communication_notebooks
      end
    end
  end

end
