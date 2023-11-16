class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
			t.string :first_name
			t.string :last_name
			t.string :phone_number
			t.text :home_address
			t.string :email_address
			t.text :user_request
      t.timestamps
    end
  end
end
