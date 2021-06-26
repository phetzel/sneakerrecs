class Api::UserShoesController < ApplicationController
    def index 
        @user_shoes = User.find(params[:user_shoe][:user_id]).user_shoes
        render @user_shoes
    end 

    def create 
        user_shoe = UserShoe.new(user_shoe_params)
        user_shoe.save
    end
    
    def destroy
        @user_shoe = UserShoe
            .where(user_id: params[:user_id], shoe_id: params[:shoe_id]);
        @user_shoe.destroy_all
    end

    private 
    def user_shoe_params 
        params.require(:user_shoe).permit(
            :user_id,
            :shoe_id,
        )
    end 
end

