class Roasts < ActiveRecord::Migration[5.2]
  def change
    create_table :roasts do |t|
      t.string :name, null: false
      t.string :brand, null: false
      t.string :region
      t.string :notes
      t.string :process
      t.string :producer
      t.string :altitude
      t.string :url, null: false
      t.integer :price, null: false
      t.integer :rating, null: false
      t.boolean :fair_trade
      t.boolean :ethical_business_practices
            
      t.timestamps null: false
    end
  end
end
