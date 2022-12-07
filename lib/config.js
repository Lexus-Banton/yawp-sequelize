require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || null,
    database: process.env.POSTGRES_DB_NAME || 'yawp_development',
    host: process.env.POSTGRES_DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  test: {
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || null,
    database: process.env.POSTGRES_DB_NAME || 'yawp_test',
    host: process.env.POSTGRES_DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    logging: false,
  },
  /**
   * Looking here because `npm run db:reset` isn't working from Heroku? db:reset
   * attempts to do some operations that the Postgres credentials in Heroku
   * aren't allowed to do, and this operation will never succeed in
   * Heroku/production.
   */
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    /**
     * Typically we don't want to be disregarding SSL checks, especially in our
     * production environments. Our Heroku postgres instances are using
     * self-signed certificates, or we don't have the certificate authority
     * trusted.
     *
     * This disables the certificate _trusting_ even though the certificate is
     * still used. Such connections are "secure" only in that communications are
     * encrypted, but we have no way of knowing if a malicious party gave us a
     * bogus certificate to use (which the malicious party can then decrypt).
     */
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
