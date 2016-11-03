require 'test_helper'

class PackingsControllerTest < ActionController::TestCase
  setup do
    @packing = packings(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:packings)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create packing" do
    assert_difference('Packing.count') do
      post :create, packing: { description: @packing.description, image: @packing.image, title: @packing.title }
    end

    assert_redirected_to packing_path(assigns(:packing))
  end

  test "should show packing" do
    get :show, id: @packing
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @packing
    assert_response :success
  end

  test "should update packing" do
    patch :update, id: @packing, packing: { description: @packing.description, image: @packing.image, title: @packing.title }
    assert_redirected_to packing_path(assigns(:packing))
  end

  test "should destroy packing" do
    assert_difference('Packing.count', -1) do
      delete :destroy, id: @packing
    end

    assert_redirected_to packings_path
  end
end
