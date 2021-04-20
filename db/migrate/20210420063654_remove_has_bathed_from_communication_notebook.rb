class RemoveHasBathedFromCommunicationNotebook < ActiveRecord::Migration[6.0]
  def change
    remove_column :communication_notebooks, :hasBathed, :boolean
  end
end
