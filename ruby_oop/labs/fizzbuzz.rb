class FizzBuzz
    attr_accessor :first_number, :second_number
  
    def initialize first_number, second_number
      @first_number = first_number
      @second_number = second_number
    end
  
    def run
      output = []
      # for num in 1..100
      (1..100).each do |num|
        index = ''
        index += "fizz" if num % first_number == 0
        index += "buzz" if num % second_number == 0
        # index += "fizzbuzz" if num % second_number == 0 && num % first_number == 0
        index = num if index.length == 0
        output << index
      end
  
      output
    end
  end
  
  f1 = FizzBuzz.new 5, 3
  f2 = FizzBuzz.new 2, 6
  f3 = FizzBuzz.new 70, 10
  f4 = FizzBuzz.new 2, 3
  f5 = FizzBuzz.new 19, 41
  
  print f1.run
  print f2.run
  print f3.run
  print f4.run
  print f5.run
  
  