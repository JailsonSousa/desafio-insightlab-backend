module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  entities: ['./dist/modules/**/infra/typeorm/entities/*.{js,ts}'],
  migrations: ['./dist/migrations/*.{js,ts}'],
  cli: {
    migrationsDir: './src/migrations',
  },
};
