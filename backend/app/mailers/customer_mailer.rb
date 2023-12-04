class CustomerMailer < ApplicationMailer
	default from: 'prodigy.lanre@gmail.com'

  def notify_admin(params)
    @customer = params[:customer]
    @url  = 'http://api_v1_customer_url'
		#not sure the email 
    mail(to: ['Propertybrothershomeservices@gmail.com', 'akinola_lanrewaju@yahoo.com'], subject: 'Estimate Resquest Notification')
  end
end
