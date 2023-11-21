Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root to: "users#index"
  resources :users, only: [:new, :create, :show, :index]  
  get '/users', to: 'users#index'
  post '/users', to: 'users#create'

  get '/admin', to: 'admins#index'
  patch '/users/:id/update_status', to: 'users#update_status', as: 'update_user_status'

end
