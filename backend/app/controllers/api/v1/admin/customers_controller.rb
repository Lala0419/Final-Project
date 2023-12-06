class Api::V1::Admin::CustomersController  < ApplicationController
include ActionController::HttpAuthentication::Basic::ControllerMethods
 http_basic_authenticate_with name: ENV['ADMIN_USERNAME'], password: ENV['ADMIN_PASSWORD']
  def index
    @customers = Customer.all

    render json: @customers
  end
 end
