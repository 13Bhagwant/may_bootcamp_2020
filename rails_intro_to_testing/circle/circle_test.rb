require "./circle.rb"
require "minitest/autorun"

class CircleTest < MiniTest::Test
  def test_requiring_positive_radius
    assert_raises(ArgumentError) { Circle.new -1 }
  end

  def test_radius_is_numeric
    assert_raises(ArgumentError) { Circle.new "not numeric"}
  end

  def test_diameter
    c = Circle.new(4)
    assert_equal(8, c.diameter)
  end
  
  def test_area
    c = Circle.new(4)
    assert_in_delta(50.27, c.area, 0.01)
  end
  
  def test_perimeter
    c = Circle.new(4)
    assert_in_delta(25.13, c.perimeter, 0.01)
  end
end