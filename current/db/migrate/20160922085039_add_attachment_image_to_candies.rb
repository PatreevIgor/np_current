class AddAttachmentImageToCandies < ActiveRecord::Migration
  def self.up
    change_table :candies do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :candies, :image
  end
end
