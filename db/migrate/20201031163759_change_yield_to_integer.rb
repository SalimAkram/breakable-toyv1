class ChangeYieldToInteger < ActiveRecord::Migration[5.2]
  def up
     change_column :brew_methods, :yield, :integer, using: 'yield::integer'
  end

  def down
    change_column :brew_methods, :yield, :string
  end
end
