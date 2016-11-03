class CandiesProductsController < ApplicationController
  before_action :set_candies_product, only: [:show, :edit, :update, :destroy]

  # GET /candies_products
  # GET /candies_products.json
  def index
    @candies_products = CandiesProduct.all
  end

  # GET /candies_products/1
  # GET /candies_products/1.json
  def show
  end

  # GET /candies_products/new
  def new
    @candies_product = CandiesProduct.new
  end

  # GET /candies_products/1/edit
  def edit
  end

  # POST /candies_products
  # POST /candies_products.json
  def create
    @candies_product = CandiesProduct.new(candies_product_params)

    respond_to do |format|
      if @candies_product.save
        format.html { redirect_to @candies_product, notice: 'Candies product was successfully created.' }
        format.json { render :show, status: :created, location: @candies_product }
      else
        format.html { render :new }
        format.json { render json: @candies_product.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /candies_products/1
  # PATCH/PUT /candies_products/1.json
  def update
    respond_to do |format|
      if @candies_product.update(candies_product_params)
        format.html { redirect_to @candies_product, notice: 'Candies product was successfully updated.' }
        format.json { render :show, status: :ok, location: @candies_product }
      else
        format.html { render :edit }
        format.json { render json: @candies_product.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /candies_products/1
  # DELETE /candies_products/1.json
  def destroy
    @candies_product.destroy
    respond_to do |format|
      format.html { redirect_to candies_products_url, notice: 'Candies product was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_candies_product
      @candies_product = CandiesProduct.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def candies_product_params
      params.require(:candies_product).permit(:product_id, :candy_id, :count, :id)
    end
end
