class Shoe < ApplicationRecord
    has_one_attached :photo

    has_many :shoe_colors
    has_many :colors, through: :shoe_colors, source: :color
end
