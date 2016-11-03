class AddFieldTypesInTableProducts < ActiveRecord::Migration
  def change
    add_column :products, :types, :string
  end
end
