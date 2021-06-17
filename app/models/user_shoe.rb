class UserShoe < ApplicationRecord

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :shoe,
        primary_key: :id,
        foreign_key: :shoe_id,
        class_name: :Shoe
end
