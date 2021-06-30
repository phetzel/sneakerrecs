json.extract! shoe, :id, :brand, :name, :pcolor, :url, :style, :price
json.photoUrl url_for(shoe.photo) if shoe.photo.attached?

json.colors do
    json.array! shoe.colors do |color|
        json.partial! 'api/colors/color', color: color
    end
end