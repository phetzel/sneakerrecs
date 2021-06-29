json.extract! shoe, :id, :brand, :name, :pcolor, :url, :style
json.photoUrl url_for(shoe.photo) if shoe.photo.attached?

json.secondaryColors do
    json.array! shoe.colors do |color|
        puts '--------------------------'
        puts 'SHOE COLOR'
        puts color
        puts color.id
        puts '--------------------------'
        json.partial! 'api/colors/color', color: color
    end
end