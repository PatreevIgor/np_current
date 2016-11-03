class AddColumnPriceOnThePackingTable < ActiveRecord::Migration
  def change
    add_column :packings, :price, :integer
  end
end
