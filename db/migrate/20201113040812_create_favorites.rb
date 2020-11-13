class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.belongs_to :roast, null: false
      t.belongs_to :user, null: false
      t.string  :review

      t.timestamps null: false
    end
  end
end
