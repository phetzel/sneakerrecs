json.extract! user, :id, :email, :admin

json.shoes do
    json.array! user.shoes do |shoe|
        json.partial! 'api/shoes/shoe', shoe: shoe
    end
end

json.user_shoes do
    json.array! user.user_shoes do |user_shoe|
        json.partial! 'api/user_shoes/user_shoe', user_shoe: user_shoe
    end
end