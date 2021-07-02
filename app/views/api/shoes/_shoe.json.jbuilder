json.extract! shoe, :id, :brand, :name, :pcolor, :url, :style, :price
json.photoUrl url_for(shoe.photo) if shoe.photo.attached?

json.secColors do
    json.array! shoe.colors do |color|
        json.extract! color, :name
    end
end