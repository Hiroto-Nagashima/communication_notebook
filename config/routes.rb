Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :kids, only: [:show] do
        get '/communication_notebooks/doesExist', to: 'communication_notebooks#doesExist'
        get '/communication_notebooks/registration', to: 'communication_notebooks#registration'
        resources :communication_notebooks, only: [:index, :create, :update]
      end
    end
  end

end
