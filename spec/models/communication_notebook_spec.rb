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
    it '体温が空欄の場合保存に失敗するか' do
      communication_notebook = CommunicationNotebook.new
      expect(communication_notebook). not_to be_valid
      expect(communication_notebook.errors.messages[:bodyTemperature]).to include("can't be blank")
    end
    it '機嫌が空欄の場合保存に失敗するか' do
      communication_notebook = CommunicationNotebook.new
      expect(communication_notebook). not_to be_valid
      expect(communication_notebook.errors.messages[:mood]).to include("can't be blank")
    end
    it '入浴が空欄の場合保存に失敗するか' do
      communication_notebook = CommunicationNotebook.new
      expect(communication_notebook). not_to be_valid
      expect(communication_notebook.errors.messages[:bath]).to include("can't be blank")
    end
    it '夕食が空欄の場合保存に失敗するか' do
      communication_notebook = CommunicationNotebook.new
      expect(communication_notebook). not_to be_valid
      expect(communication_notebook.errors.messages[:dinner]).to include("can't be blank")
    end
    it '朝食が空欄の場合保存に失敗するか' do
      communication_notebook = CommunicationNotebook.new
      expect(communication_notebook). not_to be_valid
      expect(communication_notebook.errors.messages[:breakfast]).to include("can't be blank")
    end
    it 'メモが空欄の場合保存に失敗するか' do
      communication_notebook = CommunicationNotebook.new
      expect(communication_notebook). not_to be_valid
      expect(communication_notebook.errors.messages[:memo]).to include("can't be blank")
    end
    it '日付が空欄の場合保存に失敗するか' do
      communication_notebook = CommunicationNotebook.new
      expect(communication_notebook). not_to be_valid
      expect(communication_notebook.errors.messages[:date]).to include("can't be blank")
    end
  end

end
