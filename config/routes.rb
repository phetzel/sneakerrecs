Rails.application.routes.draw do
  root "static_pages#root"
  
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :show, :destroy]
    resources :shoes, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:create, :show]
  end 
end
