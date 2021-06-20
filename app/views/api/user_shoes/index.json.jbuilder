json.array! (@user_shoes) do |user_shoe|
    json.partial! 'user_shoe', user_shoe: user_shoe 
end