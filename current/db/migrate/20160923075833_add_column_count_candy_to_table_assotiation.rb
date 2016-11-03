class AddColumnCountCandyToTableAssotiation < ActiveRecord::Migration
  def change
    add_column :candies_products, :count, :integer, :default => 1
  end
end
