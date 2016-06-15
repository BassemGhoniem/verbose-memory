class CreateTodolists < ActiveRecord::Migration
  def change
    create_table :todolists do |t|
      t.string :list_name
      t.date :list_du_date

      t.timestamps null: false
    end
  end
end
