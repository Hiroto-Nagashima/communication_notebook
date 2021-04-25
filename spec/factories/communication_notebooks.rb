FactoryBot.define do
  factory :communication_notebook do
    dinner: { "夕食" },
    breakfast: { "朝食" },
    memo: { "メモ" },,
    bodyTemperature: { "体温" },,
    mood: { 0 },
    date: { "日付" },
    bath: { "有" }
  end
end
