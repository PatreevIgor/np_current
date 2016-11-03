class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]
  # GET /products
  # GET /products.json
  def index
    @products = Product.all.sort_by {|x| [x.types] }
  end

  # GET /products/1
  # GET /products/1.json
  def show
    @CandiesProducts = CandiesProduct.all
  end

  # GET /products/new
  def new
    @product = Product.new
    @packings = Packing.all
    @candies = Candy.all
  end

  # GET /products/1/edit
  def edit
    @packings = Packing.all
    @candies = Candy.all
    @packings = Packing.all
  end

  # POST /products
  # POST /products.json
  def create
    @product = Product.new(product_params)
    # binding.pry

    respond_to do |format|
      if @product.save

        product_id = @product.id
        candy_ids = params['check_box'].keys
        counts = params['count']
        
        candy_ids.each do |candy_id|
          @product.candies << Candy.find(candy_id) 
          count = counts[candy_id]
          CandiesProduct.where(product_id:@product.id, candy_id: candy_id).first.update_attributes(count:count)
        end

        format.html { redirect_to @product, notice: 'Product was successfully created.' }
        format.json { render :show, status: :created, location: @product }
      else
        format.html { render :new }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /products/1
  # PATCH/PUT /products/1.json
  def update
    respond_to do |format|
      if @product.update(product_params)
        format.html { redirect_to @product, notice: 'Product was successfully updated.' }
        format.json { render :show, status: :ok, location: @product }
      else
        format.html { render :edit }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /products/1
  # DELETE /products/1.json
  def destroy
    @product.destroy
    respond_to do |format|
      format.html { redirect_to products_url, notice: 'Product was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def product_params
      params.require(:product).permit(:title, :description, :price, :image, :types, :packing_ids => [], :candy_ids => [])
    end
end
