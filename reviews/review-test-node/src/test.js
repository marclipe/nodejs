import assert from "assert";
import { getUser } from './service.js'
import nock from 'nock'

describe('API User', function() {
  this.beforeAll(() => {
    const response = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    }

    nock("https://jsonplaceholder.typicode.com")
      .get("/todos/1")
      .reply(200, response);
  })


  it("Must search for format correct", async () => {
    const expected = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false  
      },
    ];
    const result = await getUser();
    assert.deepEqual(result, expected);
  });
})