class AddKidIdToCommunicationNotebook < ActiveRecord::Migration[6.0]
  def change
    add_column :communication_notebooks, :kid_id, :integer
  end
end
