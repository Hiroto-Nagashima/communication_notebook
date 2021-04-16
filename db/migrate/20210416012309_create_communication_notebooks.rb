class CreateCommunicationNotebooks < ActiveRecord::Migration[6.0]
  def change
    create_table :communication_notebooks do |t|
      t.integer :bodyTemperature
      t.boolean :hasBathed
      t.integer :mood
      t.text :breakfast
      t.text :dinner
      t.text :memo

      t.timestamps
    end
  end
end
