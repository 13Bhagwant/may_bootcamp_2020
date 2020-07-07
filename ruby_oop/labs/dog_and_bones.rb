class Dog
    attr_accessor :colour, :type, :bones
  
    def initialize colour, type
      @colour = colour
      @type = type
      @bones = []
    end
  
    def give bone
      unless bone.is_a? Bone
        raise ArgumentError.new "Must be a Bone"
      end
      if @bones.length == 3
        puts "I have too many bones"
      else
        @bones << bone
      end
    end
  
    def eat
      bone = @bones.shift
      puts "Yummy! I ate a #{bone.size} bone"
    end
  end
  
  class Bone 
    attr_accessor :size
    def initialize size
      @size = size
    end
  end
  
  dog = Dog.new 'White', 'Husky'
  dog.give Bone.new('big')
  dog.give Bone.new('small')
  print dog.bones
  puts "\n"
  dog.eat
  print dog.bones
  dog.eat
  