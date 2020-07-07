require_relative "./cookie.rb"

class Oreo < Cookie
    attr_accessor :filling_type 
    def initialize(sugar, butter, filling_type = "vanilla")
        super(sugar, butter)
        @filling_type = filling_type
    end

    def eat 
        puts "from oreo class"
        super
    end

    def details 
        "sugar: #{@sugar} / butter: #{@butter} / filling type: #{@filling_type}"
    end

end

# o = Oreo.new(2, 5)

# p o.filling_type = "vanilla"

# # To test if an object is an instance of a class use
# # the ".is_a?" method.
# p o.is_a? Oreo # => true
# p o.is_a? Array # => false
# p o.is_a? Cookie # => true
# p o.is_a? Object # => true
# p o.is_a? BasicObject # => true
