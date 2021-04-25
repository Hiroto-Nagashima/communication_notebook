FactoryBot.define do
  factory :communication_notebook do
    dinner           { "夕食" }
    breakfast        { "朝食" }
    memo             { "メモ" }
    bodyTemperature  { "体温" }
    mood             { 0 }
    date             "2021-4-25"
    bath             { "有" }
    kid_id           { 1 }
  end
end
