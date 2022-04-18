const request = require('supertest');
const app = require('../app');

describe('Conectar na rota de teste', () => {
  it('deve se conectar na api e receber uma resposta em json com success igual a true', async () => {
    const res = await request(app).get('/test').send();
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toEqual(true);
  });
});
