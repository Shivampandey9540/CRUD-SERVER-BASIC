import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Item extends Model {
  public id!: number;
  public name!: string;
}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'items',
    sequelize,
  }
);

export default Item;
