Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do    
    namespace :v1 do      
      resources :roasts, only: [:index, :show, :create]
      resources :landings, only: [:index]   
      resources :users, only: [:show]
      resources :brews, only: [:create, :index, :show]      
    end  
  end

  resources :roasts , only: [:new]
  get '*page', to: 'homes#index'

end
