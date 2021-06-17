json.extract! user, :id, :email, :admin

json.shoes do
    json.array! user.shoes do |shoe|
        json.partial! 'api/shoes/shoe', shoe: shoe
    end
end