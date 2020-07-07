
# Car exercises
class Car 

    attr_reader :type # createes the @type instance variable and the getter 
    attr_writer :type # creates the @type instance variable (if doesn't exist) and the setter

    attr_accessor :model, :capacity

    def initialize(model, type, capacity=3) 
        @model = model 
        @type = type 
        @capacity = capacity
    end

    @@color = "white"

    def self.max_speed 
        200
    end

    def drive 
        p pump_gas # private method that can only be accessed within the class
        p ignite_engine
        "vroom vroom"
    end

    def stop 
        "skkkrr"
    end

    def park 
        "parked"
    end

    private
    
    def pump_gas 
        # p @@color
        "glup glup glup: gas pumped"
    end

    def ignite_engine 
        "engine ignited"
    end

end

c1 = Car.new('C', 'C100B')

p c1.drive 
p c1.park
p c1.stop


# c2 = Car.new 

# p c2.drive 
# p c2.park
# p c2.stop