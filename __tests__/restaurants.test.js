const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

// Dummy user for testing
const mockUser = {
  firstName: 'Test',
  lastName: 'User',
  email: 'test@example.com',
  password: '12345',
};

const registerAndLogin = async (userProps = {}) => {
  const password = userProps.password ?? mockUser.password;

  // Create an "agent" that gives us the ability
  // to store cookies between requests in a test
  const agent = request.agent(app);

  // Create a user to sign in with
  const user = await db.User.create({ ...mockUser, ...userProps });

  // ...then sign in
  const { email } = user;
  await agent.post('/api/v1/users/sessions').send({ email, password });
  return [agent, user];
};

describe('restaurant routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
    try {
      await db.Restaurant.bulkCreate([
        {
          name: 'Andina Restaurant',
          cuisine: 'Peruvian',
          cost: 3,
          image:
            'https://media-cdn.tripadvisor.com/media/photo-o/07/f6/b4/aa/lunch.jpg',
          address: '1314 NW Glisan St Ste A, Portland, OR 97209-2717',
          open: '9:00',
          close: '5:00',
          description:
            'Andina draws inspiration from the native culinary traditions of Peru, as well as from the contemporary cooking by some of Peru’s leading chefs. Owner Doris Rodriguez de Platt, collaborates with Andina’s kitchen team to develop a menu that celebrates her family’s Andean roots, interweaving the ideas and techniques of both Criollo and Novo-Andean cuisines. The kitchen sources native and local ingredients to create dishes at once traditionally rooted and personally inspired. Founded in 2003, Andina emerged as one of the region’s leading Peruvian restaurants and continues to generate wide appeal within the food communities in and around Portland, and much further afield',
          website: 'http://www.andinarestaurant.com/',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Bamboo Sushi',
          cuisine: 'Japanese',
          cost: 5,
          image:
            'https://media-cdn.tripadvisor.com/media/photo-o/08/10/77/19/bamboo-sushi.jpg',
          address: '304 SE 28th Ave, Portland, OR 97214-1808',
          open: '9:00',
          close: '5:00',
          description:
            'At Bamboo Sushi, we make every decision with the highest regard for this world and the people in it. From transparency in how we source our food to reducing our carbon footprint to enriching the communities we live in; our mission is to change the way people eat, inspiring a shift within the restaurant industry and beyond. Everything you eat has an impact — It’s time to know yours.',
          website: 'http://bamboosushi.com/',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  });
  afterAll(async () => {
    await db.sequelize.close();
  });

  it('#GET /api/v1/restaurants should return a list of restaurants', async () => {
    const resp = await request(app).get('/api/v1/restaurants');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(2);
  });

  it('#GET /restaurant/:id should return the restaurant detail with nested reviews', async () => {
    const resp = await request(app).get('/api/v1/restaurants/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      address: '1314 NW Glisan St Ste A, Portland, OR 97209-2717',
      close: '5:00',
      cost: 3,
      createdAt: expect.any(String),
      cuisine: 'Peruvian',
      description:
        'Andina draws inspiration from the native culinary traditions of Peru, as well as from the contemporary cooking by some of Peru’s leading chefs. Owner Doris Rodriguez de Platt, collaborates with Andina’s kitchen team to develop a menu that celebrates her family’s Andean roots, interweaving the ideas and techniques of both Criollo and Novo-Andean cuisines. The kitchen sources native and local ingredients to create dishes at once traditionally rooted and personally inspired. Founded in 2003, Andina emerged as one of the region’s leading Peruvian restaurants and continues to generate wide appeal within the food communities in and around Portland, and much further afield',
      id: 1,
      image:
        'https://media-cdn.tripadvisor.com/media/photo-o/07/f6/b4/aa/lunch.jpg',
      name: 'Andina Restaurant',
      open: '9:00',
      updatedAt: expect.any(String),
      website: 'http://www.andinarestaurant.com/',
      Reviews: [],
    });
  });
  it('#POST /restaurants/:id/reviews should create a new review if user logged in', async () => {
    const [agent, user] = await registerAndLogin();
    const resp = await agent
      .post('/api/v1/restaurants/1/reviews')
      .send({ stars: 5, detail: 'Amazing!' });
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: user.id,
      detail: 'Amazing!',
      restaurantId: 1,
      stars: 5,
      userId: 1,
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });
  it('#POST /restaurants/:id/reviews should return a 401 if not authenticated', async () => {
    const resp = await request(app)
      .post('/api/v1/restaurants/1/reviews')
      .send({ stars: 5, detail: 'Amazing!' });
    expect(resp.status).toBe(401);
  });
});
