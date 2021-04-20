class AddBathToCommunicationNotebook < ActiveRecord::Migration[6.0]
  def change
    add_column :communication_notebooks, :bath, :string
  end
end
