json.array!(@candies) do |candy|
  json.extract! candy, :id, :title, :image, :manufacturer
  json.url candy_url(candy, format: :json)
end
