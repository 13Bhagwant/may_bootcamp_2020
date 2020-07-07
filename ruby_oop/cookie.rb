# In Ruby, we define classes with the 'class' keyword
# By convention, we use PascalCase for class names.
# However, th file that contains the class is named
# using snake_case.
# It's best practice to create one file per class.

class Cookie
    # Class variables can be read and mutated by every 
    # instance of a class including class methods
    @@color = "brown"

    # 'initialize' is a special method that is called
    # everytime an instance is created. This is Ruby's 
    # version of the 'constructor' method.
    # Example: Cookie.new <= initialize method is called
    def initialize(sugar, butter)

        puts "Creating a #{@@color} cookie 🍪 👩‍🍳"

        # Variables prefixed with @ are called instance variables.
        # They only exist within the instance class meaning that 
        # all instance methods can use them
        @sugar = sugar
        @butter = butter 
    end

    def details 
        "sugar: #{@sugar} / butter: #{butter}"
    end

    # The instance method 'sugar' is an attribute reader,
    # because it returns the value of the instance variable
    # @sugar. In some languages, this is called getter
    def sugar 
        @sugar 
    end
    # usage: Cookie.new(10, 15).sugar

    # The instance method "sugar=" is an attribute write,
    # because it allows us to assign a value to the 
    # instance variable (@sugar). In some languages 
    # this is called a setter.
    def sugar=(amount) 
        @sugar = amount 
    end
    # usage: Cookie.new(10, 15).sugar = 40

    # The following will create an attribute reader method 
    # like the method for sugar. It will return the value of the 
    # @butter. this shortcut exist because this pattern 
    # is very commonplace.
    # attr_reader :butter

    # and create an attribute write for @butter
    # attr_writer :butter 

    # This is shortcut for creating a reader and writer
    # for @butter at the same time
    attr_accessor :butter


    # The method below is defined as a 'class' method
    # which means that it can only be called by the class itself.
    # It's not useable by instance of Cookie. 
    # Example: Cookie.info

    # 'self'. within a class clock refers to the class,
    # but inside a method it refers to the instance 
    # calling the method
    def self.info  # self refers to the Cookie class
        # Class method can use a class variable 
        # inside a class method, self refers to the class.

        # We can access the name of an object with ".name" method.
        # This is useful to display the name of the class.
        "I'm the #{self.name} class and I create #{@@color} cookies"
    end


    def eat 
        food = 'just a simple chicken salad'
        "Nom. Nom. Nom!"
    end

    # The 'private' keyword will make all methods below
    # only accessible within the body of the class 
    # meaning that these private methods
    # cannot be called by instances of the class.

    # Make methods private when you want to hide code
    # from users of the class. It represents internal 
    # implementation that may change.
    private

    def bake(minutes) 
        "Baking the cookie in #{minutes} mins."
    end

    def hidden_method
    end
    # bake and hidden_method are private
    # keep private methods at the bottom of your 
    # classes.
end

# c = Cookie.new(10, 15)
# # p c.bake # private
# # p c.eat # error because eat is a private method
# p Cookie.info 

# p c.sugar # 10
# c.sugar = 20 # setting attribute sugar with sugar attribute write
# p c.sugar # 20

# p c.butter # 15 
# c.butter = 35 # setting attribute butter with attr_accessor for butter
# p c.butter # 35

# # To get  the class of an object use the ".class"
# # this method can be used with any object.
# p c.class # returns the Cookie class
# p Cookie.class # returns the Class class 

# # In pry, use the command 'ls' and an object to
# # list all usable class and instance methods. 
# # example: 'ls Cookie'