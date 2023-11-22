class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.string :email_address
      t.text :home_address
      t.text :service, array:true, default: []
      t.text :additional_info

      t.timestamps
    end
  end
end
