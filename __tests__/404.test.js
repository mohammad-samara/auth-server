'use strict';
const { server } = require('../src/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

// 404 err
describe('sever', () => {
  it('should respond with 404 on an invalid route', () => {
    return mockRequest.get('/invalid').then((results) => {
      expect(results.status).toBe(404);
    });
  });

  // 404 err
  it('should respond with 404 on an invalid method', () => {
    return mockRequest.patch('/signin').then((results) => {
      expect(results.status).toBe(404);
    });
  });
});