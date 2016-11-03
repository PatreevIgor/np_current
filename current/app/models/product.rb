class Product < ActiveRecord::Base

  has_attached_file :image, :styles => { :smal => "200x200>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  has_and_belongs_to_many :packings

  # has_and_belongs_to_many :candies

  has_many :candies_products
  has_many :candies, :through => :candies_products

  validates :title, :description, :price, :types,  presence: true





end