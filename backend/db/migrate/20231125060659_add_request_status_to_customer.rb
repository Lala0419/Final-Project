class AddRequestStatusToCustomer < ActiveRecord::Migration[7.0]
  def change
    add_column :customers, :request_status, :string,default: 'pending'
  end
end
