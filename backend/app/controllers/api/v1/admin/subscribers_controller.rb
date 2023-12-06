class Api::V1::Admin::SubscribersController  < ApplicationController
	include ActionController::HttpAuthentication::Basic::ControllerMethods
 http_basic_authenticate_with name: ENV['ADMIN_USERNAME'], password: ENV['ADMIN_PASSWORD']
  def index
    @subscribers = Subscriber.all

    render json: @subscribers
  end
 end