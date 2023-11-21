# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
new_customer = Customer.create ({first_name: "Bon", last_name: "Jovi", phone_number: "23456789",home_address: "111 Bridgeport Avenue", email_address: "a@test.com", additional_info: "need it ASAP"})

new_subscriber = Subscriber.create({first_name: "Myles", email_address: "a@testa.com"})