json.array!(@candies_products) do |candies_product|
  json.extract! candies_product, :id, :product_id, :candy_id, :count
  json.url candies_product_url(candies_product, format: :json)
end
