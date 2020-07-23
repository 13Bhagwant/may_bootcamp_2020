require "./student.rb"
require "minitest/autorun"

class StudentTest < Minitest::Test
  # You must pass in first_name, last_name and score when creating a student object

  def test_requiring_name_and_score
    assert_raises(ArgumentError) { Student.new }
    assert(Student.new("Brett", "Crowe ", 100).is_a? Student)
  end

  # The full_name method actually returns the concatenated first_name and last_name.
  def test_full_name
    student = Student.new("Brett", "Crowe ", 100)
    assert student.full_name
  end

  # The grade method returns the correct grade. Make sure you have two tests for this one, for instance, a score of 30 should give an F and a score of 95 should give an A
  def test_grade_A
    student = Student.new("Brett", "Crowe", 95)
    assert_equal('A', student.grade)
  end

  def test_grade_F
    student = Student.new("Not", "Brett", 30)
    assert_equal('F', student.grade)
  end

  def test_grade
    assert_equal "F", Student.new("Jane", "Dow", 30).grade
    assert_equal "A", Student.new("Jane", "Dow", 95).grade
  end
end