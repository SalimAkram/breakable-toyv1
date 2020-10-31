class ChangeRatioToString < ActiveRecord::Migration[5.2]
  def up
     change_column :brew_methods, :ratio, :string
  end

  def down
    change_column :brew_methods, :ratio, :integer, using: 'ratio::integer'  
  end
end
