Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/", to: "homes#index" 
  get "/roasts", to: "homes#index" 
  get "/roasts/new", to: "homes#authenticated" 
  get "/roasts/:id", to: "homes#index"
  get "/users/:id", to: "homes#authorized"
  get "/users/:id/edit", to: "homes#authorized"
  get "/brews", to: "homes#index"
  get "/brews/:id", to: "homes#index"
  get 'brews/:id/edit', to: "homes#authenticated"
  get "/search", to: "homes#index"

  namespace :api do    
    namespace :v1 do      
      resources :roasts, only: [:index, :show, :create]
      resources :landings, only: [:index]
      resources :searches, only: [:create]
      resources :users, only: [:show]
      resources :brews, only: [:create, :index, :show, :update, :destroy] do
        get :edit_brew
      end
      resources :favorites, only: [:create]  
    end   
  end
end