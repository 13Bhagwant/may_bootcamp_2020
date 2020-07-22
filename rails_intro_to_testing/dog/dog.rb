class Dog 

    attr_accessor :color, :type, :bones
  
    MAX_BONES = 3
  
    def initialize(color, type)
      @color = color
      @type = type
      @bones = []
    end
  
    def give_bone(bone)
      if bones.length < MAX_BONES
        @bones << bone
      else
        print "I have too many bones"
      end
    end
  
    def eat_bone
      if @bones.length > 0
        print "Yummy! I ate a #{bones.last.size} bone"
        bones.pop
      else
        print "I don't have any bones to eat"
      end
    end
  
    def bone_count
      @bones.count
    end
  end