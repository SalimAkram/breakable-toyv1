Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do    
    namespace :v1 do      
      resources :roasts, only: [:index, :show]    
    end  
  end
  
  get '*page', to: 'homes#index'
end
