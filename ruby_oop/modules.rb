# Apple as computer company
module Computer 
    class Apple 
    end

    class Microsoft
    end
end


# Apple as fruit
module Fruit 
    class Apple 
    end 
end


macbook = Computer::Apple.new
sufacepro = Computer::Microsoft.new 


p macbook.class 
p sufacepro.class 

green_apple = Fruit::Apple.new 
p green_apple.class

#  Module as a mixin 
module HelperMethods
    def name_display 
        name.capitalize
    end 

    def greeting 
        "Hi there"
    end 
end


class User 
    attr_accessor :name 
    # include <module_name>
    # will load in all the methods of a module and all allow instances
    # to use them as if they were instance methods
    include HelperMethods
    # include HelperMethods is kinda like having these instance methods 
    # in a different file 

    # def name_display 
    #     name.capitalize 
    # end 

    # def greeting 
    #     "Hi there"
    # end

end

u = User.new 
u.name = 'hindreen'
p u.name_display

class Car 
    attr_accessor :name 
    # extend a module will turn all the methods of the module into CLASS methods
    extend HelperMethods
end

c = Car.new 
p Car.greeting