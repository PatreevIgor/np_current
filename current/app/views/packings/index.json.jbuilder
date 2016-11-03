json.array!(@packings) do |packing|
  json.extract! packing, :id, :image, :title, :description
  json.url packing_url(packing, format: :json)
end
