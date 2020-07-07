# Build a class Animal that has two methods: "eat" that prints "I'm eating" and "walk" that prints "I'm walking". Make the class have two attribute accessors: name and color. Make the initialize method set those two variables.
class Animal

    attr_accessor :name, :color

    def initialize (name,color)
        @name=name
        @color=color
    end

    def eat
        "I'm eating"
    end

    def walk
        "I'm walking"
    end

end

# Now build a class called Dog that inherits from the Animal class. Add a new method to this class called bark that returns woof. Override the eat methods and make it print whatever the Animal class eat method prints and then print "Bones are yummy!".

class Dog < Animal

    def bark
        "Woof"
    end
    
    def eat
        puts "Bones are yummy!"
        super
    end

end

# Now build a class called Cat that inherits from the Animal class. Override the eat methods and make it print "Fish is yummy!".

class Cat < Animal

    def eat
        puts "Fish is yummy!"
        super
    end

end

d1=Dog.new("dogo","gold")
puts d1.name
puts d1.color
puts d1.eat
puts d1.bark

c=Cat.new("meaw","black")
puts c.name
puts c.color
c.eat