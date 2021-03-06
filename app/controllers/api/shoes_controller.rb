class Api::ShoesController < ApplicationController
    def index
        @shoes = Shoe.all

        if params[:shoe] && params[:shoe][:id]
            @shoes = User.find(params[:shoe][:id]).shoes
        end

        if params[:shoe] && params[:shoe][:style] 
            @shoes = @shoes.where(style: params[:shoe][:style])
        end 

        if params[:shoe] && params[:shoe][:pcolor] 
            @shoes = @shoes.where(pcolor: params[:shoe][:pcolor])
        end 

        puts params

        if params[:shoe] && params[:shoe][:secondary] 
            secondary = params[:shoe][:secondary].split('/')
            @shoes = Shoe.joins(:colors)
                .where('colors.name IN (?)', secondary)
                .group(:id).having(Arel.star.count.eq(secondary.size))
        end 

        if params[:shoe] && params[:shoe][:price]
            @shoes = @shoes.where('price < ?', params[:shoe][:price])
        end 

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
            :photo,
            :price,
            :secondary
        )
    end
end
