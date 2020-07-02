a = Array(1..100) # creates an array of size 5000 that contains elements 1 to 5000
a[50] = 4 #  duplicate number 23 in postion 4500
# duplicate searching code:
a.sort!
a.each.with_index do |num, i|
  if num == a[i + 1]
    p "FOUND"
    puts num
    break
  end
end
