class AddDateToCommunicationNotebook < ActiveRecord::Migration[6.0]
  def change
    add_column :communication_notebooks, :date, :date
  end
end
