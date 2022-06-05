module.exports = (sequelize, DataTypes) => {
  const Livro = sequelize.define(
    'Livro',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantidadePaginas: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'quantidade_paginas'
      },
      autor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      anoLancamento: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'ano_lancamento'
      },
      estoque: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'livros',
      timestamp: false, //n vamos trabalhar com "criado em" e "atualizado em"
    }
  );

  return Livro;
};
