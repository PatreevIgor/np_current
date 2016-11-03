class ProductsPackings < ActiveRecord::Migration
  def change

	  create_table :packings_products, :id => false do |t|
	    t.integer :product_id
	    t.integer :packing_id
	  end

  end
end
