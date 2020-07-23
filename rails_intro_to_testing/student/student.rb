class Student

    attr_accessor :first_name, :last_name, :score
  
    def initialize(first_name, last_name, score)
      @first_name = first_name
      @last_name = last_name
      @score = score
    end
  
    def full_name
      "#{first_name} #{last_name}".squeeze(" ").strip
    end
    def grade
      case score
      when 90..100
          "A"
        when 80...90
          "B"
        when 70...80
          "C"
        when 60...70
           "D"
        else
          "F"
      end
    end
  
  end
  
  
  
  
  # # Brooklin
  #
  # class Student
  #   def initialize(first_name, last_name, score)
  #     @first_name = first_name
  #     @last_name = last_name
  #     @score = score
  #   end
  #
  #   def full_name
  #     @first_name.concat(' ', @last_name)
  #   end
  #
  #   def grade
  #     if @score > 90
  #       'A'
  #       elsif @score > 76
  #       'B'
  #       elsif @score > 60
  #       'C'
  #       elsif @score > 50
  #       'D'
  #     else
  #       'F'
  #     end
  #   end
  # end