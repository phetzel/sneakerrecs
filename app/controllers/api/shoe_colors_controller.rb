class Api::ShoeColorsController < ApplicationController
    def create 
        shoe_color = ShoeColor.new(shoe_color_params)
        puts '--------------'
        puts shoe_color
        puts '--------------'
        if shoe_color.save
            render json: 'success'
        else 
            render json: shoe_color.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @shoe_color = ShoeColor
            .where(color_id: params[:color_id], shoe_id: params[:shoe_id]);
        @shoe_color.destroy_all
    end

    private 
    def shoe_color_params 
        params.require(:shoe_color).permit(
            :shoe_id,
            :color_id,
        )
    end 
end
