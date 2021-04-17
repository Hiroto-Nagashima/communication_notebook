# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Kid.create!(
  name: '鈴木太郎',
  age: 2,
  email: "12345@xxxxx.com",
  password: "1111111",
  daycare_name: "東京保育園"
)

Kid.create!(
  name: '高橋次郎',
  age: 1,
  email: "6789@xxxxx.com",
  password: "2222222",
  daycare_name: "大阪保育園"
)
