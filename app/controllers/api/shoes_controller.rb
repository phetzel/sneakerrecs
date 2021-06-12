class Api::ShoesController < ApplicationController
    def index
        @shoes = Shoe.all
        render :index
    end 

    def show
        @shoe = Show.find(params[:id])
        render :show 
    end

    def create
        @shoe = Shoe.new(shoe_params)

        if @shoe.save 
            render @shoe 
        else 
            render json: @shoe.errors.full_messages, status: 422
        end 
    end 

    def update 
        @shoe = Shoe.find(params[:id])

        if @shoe.update(shoe_params)
            render :show 
        else 
            render json: @shoe.errors.full_messages, status: 422
        end  
    end  
    
    def destroy 
        shoe = Shoe.find(params[:id])
        shoe.destroy
    end

    private 
    def shoe_params 
        params.require(:shoe).permit(
            :id,
            :brand,
            :name,
            :style,
            :pcolor,
            :url,
            :photo
        )
    end
end
