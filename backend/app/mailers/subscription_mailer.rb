class SubscriptionMailer < ApplicationMailer
    default from: 'callmeteni@gmail.com'

    def welcome_email(subscriber)
        @subscriber = subscriber
        mail(to: @subscriber.email_address, subject: 'Welcome to Our Newsletter!')
      end
end
