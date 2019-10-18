class PokemonsController < ApplicationController
    def index
        pokemon = Pokemon.all
        render json: pokemon
    end


    def new
      @pokemon = Pokemon.new
    end

    def create
      binding.pry
      
    end

    def destroy
      pokemon = Pokemon.find_by_id(params[:id]).destroy
      render json: pokemon
      
    end


end
