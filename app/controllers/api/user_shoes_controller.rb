class Api::UserShoesController < ApplicationController
    def create 
        user_shoe = UserShoe.new(user_shoe_params)
        user_shoe.save
    end
    
    def destroy
        @user_shoe = UserShoe.find(params[:id]);
        @user_shoe.destroy 
    end

    private 
    def user_shoe_params 
        params.require(:user_shoe).permit(
            :user_id,
            :shoe_id,
        )
    end 
end
