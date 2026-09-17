const expressApp = require('./src/app');
const env = require('./src/config/env');
const seedAdmin = require('./src/startup/seedAdmin');

const app = expressApp.app || expressApp;

async function start() {
  if (typeof seedAdmin === 'function') {
    await seedAdmin();
  } else if (typeof seedAdmin.seedAdmin === 'function') {
    await seedAdmin.seedAdmin();
  }

  app.listen(env.port, () => {
    console.log(`Laboratorio API CRUD ejecutándose en http://localhost:${env.port}`);
  });
}

start();