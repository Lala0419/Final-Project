require 'faker'


20.times do
	fn=Faker::Name.first_name
	ln=Faker::Name.last_name
 Subscriber.create(
	 first_name: Faker::Name.first_name, 
	 email_address: Faker::Internet.email(name:"#{fn}.#{ln}", separators: ['-'], domain: 'gmail.com')  
 )
end

# new_customer = Customer.create ({first_name: "Bon", last_name: "Jovi", phone_number: "23456789",home_address: "111 Bridgeport Avenue", email_address: "a@test.com", additional_info: "need it ASAP"})

# new_subscriber = Subscriber.create({first_name: "Myles", email_address: "a@testa.com"})


20.times do
	fn=Faker::Name.first_name
	ln=Faker::Name.last_name
 Customer.create(
	first_name: fn, 
 last_name: ln,
  phone_number: Faker::PhoneNumber.cell_phone,
	home_address: Faker::Address.full_address,
	email_address: Faker::Internet.email(name: "#{fn}.#{ln}", separators: ['-'], domain: 'gmail.com'), 
	service: Faker::Lorem.words(number: 3) ,  
	additional_info: Faker::Lorem.paragraph(sentence_count: 2))
end