Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do    
    namespace :v1 do      
      resources :roasts, only: [:index, :show, :create]
      resources :landing, only: [:index]   
      resources :users, only: [:show]
      resources :methods, only: [:create, :show
        
      # resources :users, only: [:show] do
      #   resources :methods, only: [:show] 
      # end
    end  
  end

  get '*page', to: 'homes#index'

end
