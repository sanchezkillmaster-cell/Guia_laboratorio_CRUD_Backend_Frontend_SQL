const app = require('./src/app');
const env = require('./src/config/env');
const seedAdmin = require('./src/startup/seedAdmin');

async function start() {
  try {
    if (typeof seedAdmin === 'function') {
      await seedAdmin();
    } else if (seedAdmin && typeof seedAdmin.seedAdmin === 'function') {
      await seedAdmin.seedAdmin();
    }
  } catch (err) {
    console.error('Error en seedAdmin:', err.message);
  }

  app.listen(env.port, () => {
    console.log(`Laboratorio API CRUD ejecutándose en http://localhost:${env.port}`);
  });
}

start();