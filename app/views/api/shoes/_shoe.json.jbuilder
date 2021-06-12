json.extract! shoe, :id, :brand, :name, :pcolor, :url, :style
json.photoUrl url_for(shoe.photo) if shoe.photo.attached?