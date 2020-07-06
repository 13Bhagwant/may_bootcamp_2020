def reduce(arr, init) 
    accumulator = init 

    for val in arr 
        accumulator = yield(accumulator, val)
    end

    accumulator
end


puts reduce([1, 2, 3, 4, 5, 6], 0) { |total, v| total + v } # => 21

puts reduce(["This", "is", "my", "sentence"], "") { |sentence, word| sentence + " " + word } # => "This is my sentence"

puts reduce([6, 5, 9, 2, 1, 10, 3], Float::INFINITY) { |min, v|
    if min > v 
        v 
    else
        min 
    end 
} # => 1

puts reduce([6, 5, 9, 2, 1, 10, 3], -Float::INFINITY) { |max, v| max = max > v ? max : v } # => 10