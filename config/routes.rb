Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :trails, only: [:show, :index] 
    resources :reviews, only: [:index, :create, :update, :destroy]
    resources :parks, only: [:show, :index] do
      resources :trails, only: [:index]
    end
  end
  
end
