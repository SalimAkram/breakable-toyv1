Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/", to: "homes#index" 
  get "/roasts", to: "homes#index" 
  get "/roasts/new", to: "homes#index" 
  get "/roasts/:id", to: "homes#index"
  get "/users/:id", to: "homes#authorized"
  get "/brews", to: "homes#index"
  get "/brews/:id", to: "homes#index"
  get "poc", to: "homes#index"
  get "testing", to: "homes#index"
  # get '*page', to: 'homes#index'

  namespace :api do    
    namespace :v1 do      
      resources :roasts, only: [:index, :show, :create]
      resources :landings, only: [:index]   
      resources :users, only: [:show]
      resources :brews, only: [:create, :index, :show]
      resources :blackowned, only: [:index]    
      resources :favorites, only: [:create]  
    end  
  end
end
