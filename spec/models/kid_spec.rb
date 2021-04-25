require 'rails_helper'

RSpec.describe Kid, type: :model do
  describe '正常系の機能' do
    context '保存する' do
      it '名前、年齢、保育園名、メールアドレスがあれば成功' do
        kid = Kid.new(
          name: "前田たけし",
          age: 1,
          daycare_name: "埼玉保育園",
          email: "12345@gmail.com",
          password: 1234567
        )
        expect(kid).to be_valid
        kid.save
      end
    end
  end
end
