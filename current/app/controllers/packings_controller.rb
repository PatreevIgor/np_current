class PackingsController < ApplicationController
  before_action :set_packing, only: [:show, :edit, :update, :destroy]

  # GET /packings
  # GET /packings.json
  def index
    @packings = Packing.all
  end

  # GET /packings/1
  # GET /packings/1.json
  def show
  end

  # GET /packings/new
  def new
    @packing = Packing.new
  end

  # GET /packings/1/edit
  def edit
  end

  # POST /packings
  # POST /packings.json
  def create
    @packing = Packing.new(packing_params)

    respond_to do |format|
      if @packing.save
        format.html { redirect_to @packing, notice: 'Packing was successfully created.' }
        format.json { render :show, status: :created, location: @packing }
      else
        format.html { render :new }
        format.json { render json: @packing.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /packings/1
  # PATCH/PUT /packings/1.json
  def update
    respond_to do |format|
      if @packing.update(packing_params)
        format.html { redirect_to @packing, notice: 'Packing was successfully updated.' }
        format.json { render :show, status: :ok, location: @packing }
      else
        format.html { render :edit }
        format.json { render json: @packing.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /packings/1
  # DELETE /packings/1.json
  def destroy
    @packing.destroy
    respond_to do |format|
      format.html { redirect_to packings_url, notice: 'Packing was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_packing
      @packing = Packing.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def packing_params
      params.require(:packing).permit(:image, :title, :description, :price)
    end
end
