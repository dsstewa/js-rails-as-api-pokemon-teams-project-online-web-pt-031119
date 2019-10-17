class TrainerSerializer

    def initialize(trainer_object)
        @trainer = trainer_object
      end
       

      def to_serialized_json
        @trainer.to_json(:include => {
                     :bird => {:only => [:name, :species]},
                    :location => {:only => [:latitude, :longitude]}
        },
         :except => [:updated_at])
      end



end