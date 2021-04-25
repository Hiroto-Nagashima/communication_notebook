require 'rails_helper'

RSpec.describe CommunicationNotebook, type: :model do
  describe '正常系の機能' do
    context '保存する' do
      it '空欄がなければ保存成功' do
        communication_notebook = CommunicationNotebook.new(
          dinner: "ハンバーグ",
          breakfast: "ヨーグルト",
          memo: "とても元気です",
          bodyTemperature:"36.5",
          mood: 1,
          date: "2021-4-25",
          bath: "有"
        )
        expect(communication_notebook).to be_valid
        communication_notebook.save
      end
    end
  end

  describe '入力値の有無' do
    it '名前が空欄の場合保存に失敗するか' do
      kid = Kid.new
      expect(kid). not_to be_valid
      expect(kid.errors.messages[:name]).to include("can't be blank")
    end

    it 'メールアドレスが空欄の場合保存に失敗するか' do
      kid = Kid.new
      expect(kid). not_to be_valid
      expect(kid.errors.messages[:email]).to include("can't be blank")
    end

    it '年齢が空欄の場合保存に失敗するか' do
      kid = Kid.new
      expect(kid). not_to be_valid
      expect(kid.errors.messages[:age]).to include("can't be blank")
    end

    it '保育園の名前が空欄の場合保存に失敗するか' do
      kid = Kid.new
      expect(kid). not_to be_valid
      expect(kid.errors.messages[:daycare_name]).to include("can't be blank")
    end

    it 'パスワードが空欄の場合保存に失敗するか' do
      kid = Kid.new
      expect(kid). not_to be_valid
      expect(kid.errors.messages[:password]).to include("can't be blank")
    end

    it '入力がない場合保存できない' do
      kid = Kid.new
      expect(kid). not_to be_valid
      expect(kid.save).to be_falsey
    end

  end
  describe '入力文字数の長さ' do
    it 'パスワードが6文字より少ないとエラーになるか' do
      kid = Kid.new(
        name: "前田たけし",
        age: 1,
        daycare_name: "埼玉保育園",
        email: "12345@gmail.com",
        password: 12345
      )
      kid.valid?
      expect(kid.errors.messages[:password]).to include("is too short (minimum is 6 characters)")
    end
  end
end
