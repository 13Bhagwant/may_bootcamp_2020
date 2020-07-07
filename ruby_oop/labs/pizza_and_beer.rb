class Food
    attr_accessor :sugar, :protein, :fat #, :volume
    # def volume
    #   @volume
    # end
  
    # def volume=(volume)
    #   @volume = volume
    # end
  
    def initialize sugar, protein, fat
      @sugar = sugar
      @protein = protein
      @fat = fat
    end
  end
  
  class Pizza < Food
    attr_accessor :weight
  
    def initialize sugar, protein, fat, weight
      super sugar, protein, fat
      @weight = weight
    end
  end
  
  class Beer < Food
    attr_accessor :volume
  
    def initialize sugar, protein, fat, volume
      super sugar, protein, fat
      @volume = volume
    end
  end
  
  beer = Beer.new 5, 0, 1, 10
  puts beer.sugar
  puts beer.volume
  
  pizza = Pizza.new 5, 8, 9, 3
  puts "Pizza volume: #{pizza.volume}"
  puts pizza.volume
  