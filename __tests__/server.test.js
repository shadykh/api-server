'use strict';


require('dotenv').config();

const { server } = require('../src/server.js');

const supergoose = require('@code-fellows/supergoose');

const request = supergoose(server);


describe('server💻 anime👻', () => {

  let id;


  it('should create ✔️ a new anime👻 using POST', async () => {

    let anime = {
      name: 'Sword Art Online',
      character: 'Kazuto Kirigaya',
    };

    const response = await request.post('/api/favorite/anime').send(anime);

    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('Sword Art Online');
    expect(response.body.character).toEqual('Kazuto Kirigaya');
    expect(response.body.hairColor).toEqual('White');
    expect(response.body._id.length).toBeGreaterThan(0);

    id = response.body._id;
  });

  it('should read 📝 a list of anime👻 using GET', async () => {


    const response = await request.get('/api/favorite/anime');

    expect(response.status).toEqual(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should update ✔️ an anime👻 using PUT', async () => {

    let updateAnime = {
      name: 'Naruto',
      character: 'Itachi Uchiha',
      hairColor: 'Black',
    };

    const response = await request.put(`/api/favorite/anime/${id}`)
      .send(updateAnime);

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Naruto');
    expect(response.body.character).toEqual('Itachi Uchiha');
    expect(response.body.hairColor).toEqual('Black');
  });

  it('should destroy ❌ an anime👻 using DELETE', async () => {

    const response = await request.put(`/api/favorite/anime/${id}`);

    expect(response.status).toEqual(200);
  });


  
});


describe('server 💻 games⚔️', () => {


  let id;

  it('should create ✔️ a new game⚔️ using POST', async () => {

    let game = {
      name: 'Command & Conquer: Red Alert 3',
      genre: 'strategy',
    };

    const response = await request.post('/api/favorite/games').send(game);

    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('Command & Conquer: Red Alert 3');
    expect(response.body.genre).toEqual('strategy');
    expect(response.body.portal).toEqual('PC');
    expect(response.body._id.length).toBeGreaterThan(0);

    id = response.body._id;
  });

  it('should read 📝 a list of games⚔️ using GET', async () => {

    const response = await request.get('/api/favorite/games');

    expect(response.status).toEqual(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should update ✔️ an game⚔️ using PUT', async () => {

    let updateGame = {
      name: 'Grand Theft Auto IV',
      genre: 'action',
      portal: 'PS5',
    };

    const response = await request.put(`/api/favorite/games/${id}`)
      .send(updateGame);

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Grand Theft Auto IV');
    expect(response.body.genre).toEqual('action');
    expect(response.body.portal).toEqual('PS5');
  });

  it('should destroy ❌ a game⚔️ using DELETE', async () => {

    const response = await request.put(`/api/favorite/games/${id}`);

    expect(response.status).toEqual(200);
  });


  
});

describe('server 💻 ', ()=>{

  it('should get ⚠️404 status⚠️', async ()=>{
    const response = await request.get('/whereami');
    expect(response.status).toBe(404);
  });
  
});