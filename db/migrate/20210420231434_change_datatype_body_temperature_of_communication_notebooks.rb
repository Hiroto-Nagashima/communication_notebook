class ChangeDatatypeBodyTemperatureOfCommunicationNotebooks < ActiveRecord::Migration[6.0]
  def change
    change_column :communication_notebooks, :bodyTemperature, :string
  end
end
