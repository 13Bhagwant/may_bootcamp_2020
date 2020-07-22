class Circle 
    attr_accessor :radius
  
    def initialize(radius)
      raise ArgumentError.new("Radius must be greater than zero") if radius <= 0
      @radius = radius
    end
  
    def diameter
      2 * @radius
    end
  
    def area
      Math::PI * @radius ** 2
    end
  
    def perimeter
      2 * Math::PI * @radius
    end
  end