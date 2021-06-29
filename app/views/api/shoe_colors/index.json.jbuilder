json.array! (@shoe_colors) do |color|
    json.partial! 'shoe_color', color: color 
end