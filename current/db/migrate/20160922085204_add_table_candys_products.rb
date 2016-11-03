class AddTableCandysProducts < ActiveRecord::Migration
  def change

	  create_table :candies_products do |t|
	    t.integer :product_id
	    t.integer :candy_id
	  end

  end
end
