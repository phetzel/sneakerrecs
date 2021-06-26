class ShoeColor < ApplicationRecord
    belongs_to :color,
        primary_key: :id,
        foreign_key: :color_id,
        class_name: :Color

    belongs_to :shoe,
        primary_key: :id,
        foreign_key: :shoe_id,
        class_name: :Shoe
end
