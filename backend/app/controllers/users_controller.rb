class UsersController < ApplicationController
	before_action :set_user, only: [:show, :edit, :update, :destroy]

	def index
		@users = User.all
	  end

	def new
	  @user = User.new
	end

	def show
		@user = User.find(params[:id])
	  end
  
	def create
		@user = User.new(user_params)
	  
		if @user.save
		  flash[:success] = 'User created successfully.'
		  redirect_to user_path(@user) # Use user_path instead of @user
		else
		  render 'new'
		end
	  end

	  def update_status
		@user = User.find(params[:id])
		new_status = params[:status]
	
		if @user.update(status: new_status)
		  flash[:success] = 'Status updated successfully.'
		else
		  flash[:error] = 'Failed to update status.'
		end
	
		redirect_to admin_path
	  end
  
	private
  
	def user_params
	  params.require(:user).permit(:first_name, :last_name, :phone_number, :home_address, :email_address, :status)
	end

	def set_user
		@user = User.find(params[:id])
	  end

  end