class AddAttachmentImageToPackings < ActiveRecord::Migration
  def self.up
    change_table :packings do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :packings, :image
  end
end
