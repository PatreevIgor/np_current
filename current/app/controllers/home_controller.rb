class HomeController < ApplicationController

  def index
    @products = Product.where(types: 't')
  end

  def roshen
    @products = Product.where(types: 'r')
  end

  def classic
    @products = Product.where(types: 'c')
  end

  def np
    @products = Packing.all
  end

  def prestig
    @products = Product.where(types: 'p')
  end

  def vip
    @products = Product.where(types: 'v')
  end

  def all
    @products = Product.where(types: ['v','p','r','c'])
  end

  def about_the_company
  end

  def shares
  end

  def shipping_and_payment
  end

  def contacts
  end

end
