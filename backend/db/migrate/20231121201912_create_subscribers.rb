class CreateSubscribers < ActiveRecord::Migration[7.0]
  def change
    create_table :subscribers do |t|
      t.string :first_name
      t.string :email_address

      t.timestamps
    end
  end
end
