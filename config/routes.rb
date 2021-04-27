Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :kids do
        get '/communication_notebooks/doesExist', to: 'communication_notebooks#doesExist'
        get '/communication_notebooks/registration', to: 'communication_notebooks#registration'
        resources :communication_notebooks
      end
    end
  end

end
