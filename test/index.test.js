const supertest = require('supertest')
const  {app}    = require('../src/routes/route')

test('/ API Testing', async () => {
    const response = await supertest(app).get('/')
    expect(response.text).toEqual('Hello NodeJs !')
})

test('/_env  Testing', async () => {
    const response = await supertest(app).get('/_env')
    expect(JSON.parse( response.text ).npm_package_name).toEqual('hello-nodejs')
    let stage = JSON.parse( response.text ).STAGE
    expect(stage == 'alpha' || stage == 'beta' || stage == 'gama' || stage == 'prod').toEqual(true)
})


