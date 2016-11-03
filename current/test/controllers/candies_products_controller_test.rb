require 'test_helper'

class CandiesProductsControllerTest < ActionController::TestCase
  setup do
    @candies_product = candies_products(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:candies_products)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create candies_product" do
    assert_difference('CandiesProduct.count') do
      post :create, candies_product: { candy_id: @candies_product.candy_id, count: @candies_product.count, product_id: @candies_product.product_id }
    end

    assert_redirected_to candies_product_path(assigns(:candies_product))
  end

  test "should show candies_product" do
    get :show, id: @candies_product
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @candies_product
    assert_response :success
  end

  test "should update candies_product" do
    patch :update, id: @candies_product, candies_product: { candy_id: @candies_product.candy_id, count: @candies_product.count, product_id: @candies_product.product_id }
    assert_redirected_to candies_product_path(assigns(:candies_product))
  end

  test "should destroy candies_product" do
    assert_difference('CandiesProduct.count', -1) do
      delete :destroy, id: @candies_product
    end

    assert_redirected_to candies_products_path
  end
end
