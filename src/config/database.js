module.exports = {
  production: {
    url:
      process.env.DATABASE_URL ||
      'postgres://postgres:postgres@localhost:5432/postgres',
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    url:
      process.env.DATABASE_URL ||
      'postgres://postgres:postgres@localhost:5432/shop_test',
    dialect: 'postgres',
    dialectOptions: {},
  },
  development: {
    url:
      process.env.DATABASE_URL ||
      'postgres://postgres:postgres@localhost:5432/shop_development',
    dialect: 'postgres',
    dialectOptions: {},
  },
};
