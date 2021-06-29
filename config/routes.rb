Rails.application.routes.draw do
  root "static_pages#root"
  
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :show, :destroy]
    resources :shoes, only: [:index, :show, :create, :update, :destroy]
    resources :shoe_colors, only: [:index, :create, :destroy]
    resources :users, only: [:create, :show]
    resources :user_shoes, only: [:index, :create, :destroy]
  end 
end
