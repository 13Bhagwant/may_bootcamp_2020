require_relative "./cookie_bag.rb"
require_relative "./cookie.rb"
require_relative "./oreo.rb"

c1 = Cookie.new(8, 10)
c2 = Cookie.new(20, 15)
c3 = Cookie.new(13, 19)
o1 = Oreo.new(20, 20)
o2 = Oreo.new(10, 12)
o3 = Oreo.new(7, 15)

puts "Creating a cookie bag"
cb = CookieBag.new(5)

puts "Adding cookies to cookie bag"
cb.add(c1)
cb.add(c2).add(c3).add(o1).add(o2)
cb.add(o3) # No room left because the capacity of the bag is 5 and we've already added 5 cookies


cb.details

puts "Taking Cookies"

cb.take
cb.take
cb.take
cb.take
cb.take
cb.take # No cookies left