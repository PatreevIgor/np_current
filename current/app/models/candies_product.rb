class CandiesProduct < ActiveRecord::Base
	  belongs_to :candy
      belongs_to :products
end
