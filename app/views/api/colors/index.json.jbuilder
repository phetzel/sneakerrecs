puts 'hit'
puts @colors
json.array! (@colors) do |color|
    puts 'hit1'
    puts color
    json.partial! 'api/colors/color', color: color 
end