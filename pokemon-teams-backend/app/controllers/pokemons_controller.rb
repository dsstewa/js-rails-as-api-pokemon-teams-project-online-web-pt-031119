class PokemonsController < ApplicationController
    def index
        pokemon = Pokemon.all
        render json: pokemon
        #, include: [:bird, :location]
   
      end


end
