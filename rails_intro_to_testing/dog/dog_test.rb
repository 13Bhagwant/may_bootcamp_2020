require "./dog.rb"
require "./bone.rb"
require "minitest/autorun"

class DogTest < MiniTest::Test
  def setup
    @s_bone = Bone.new('small')
    @m_bone = Bone.new('medium')
    @l_bone = Bone.new('large')
    @extra_bone = Bone.new('large')
  end

  def test_length_of_bones_owned
    dog = Dog.new('white', 'poodle')
    dog.give_bone(@s_bone)
    assert_equal(1, dog.bones.length)
  end
  
  def test_max_three_bones
    dog = Dog.new('white', 'poodle')
    dog.give_bone(@s_bone)
    dog.give_bone(@m_bone)
    dog.give_bone(@l_bone)
    dog.give_bone(@extra_bone)
    assert_equal(3, dog.bones.length)
  end
  
  def test_eat_bone_returns_correct_bone
    dog = Dog.new('white', 'poodle')
    dog.give_bone(@s_bone)
    dog.give_bone(@m_bone)
    eaten_bone = dog.bones.last
    assert_equal(eaten_bone, dog.eat_bone)
  end
  
  def test_eat_bone_removes_from_list
    dog = Dog.new('white', 'poodle')
    dog.give_bone(@s_bone)
    dog.give_bone(@m_bone)
    dog.give_bone(@l_bone)
    dog.eat_bone
    # assert_equal(2, dog.bones.length)
    refute_includes(dog.bones, @l_bone)
  end

  def test_bone_count
    dog = Dog.new('white', 'poodle')
    dog.give_bone(@s_bone)
    dog.give_bone(@m_bone)
    assert_equal(2, dog.bone_count)
  end
end