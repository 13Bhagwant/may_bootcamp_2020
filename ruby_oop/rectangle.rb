class Rectangle

    attr_accessor :width, :height

    def initialize(width,height)
        @width=width
        @height=height
    end

    def area
        width*height
    end

    def is_square?
        @width==@height
    end
end

sqaure = Rectangle.new(4,4)

p sqaure.area #16
p sqaure.is_square? #true
sqaure.height = 10
p sqaure.height #10
p sqaure.is_square? #false