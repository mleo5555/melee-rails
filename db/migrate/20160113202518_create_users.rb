class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :gamertag, null:false
      t.string :password, null:false
      t.string :email, null:false
      t.string :about
      t.string :region
      t.string :main

      t.timestamps null: false
    end
  end
end
