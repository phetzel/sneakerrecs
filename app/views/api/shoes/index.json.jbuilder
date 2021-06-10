json.array! (@shoes) do |shoe|
    json.partial! 'shoe', shoe: shoe 
end