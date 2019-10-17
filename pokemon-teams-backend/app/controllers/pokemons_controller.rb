class PokemonsController < ApplicationController
    def index
        pokemon = Pokemon.all
        render json: pokemon
    end


    def new
      @pokemon = Pokemon.new
    end

    def create
      
    end




end
