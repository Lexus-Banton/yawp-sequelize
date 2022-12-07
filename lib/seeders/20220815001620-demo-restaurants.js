/* eslint-disable quotes */
'use strict';

module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('Restaurants', [
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
        createdAt: new Date(),
        updatedAt: new Date(),
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
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Blossoming Lotus Portland',
        cuisine: 'Fusion',
        cost: 2,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/12/6b/db/1d/rated-top-vegan-restaurant.jpg',
        address: '1713 NE 15th Ave, Portland, OR 97212-4402',
        open: '9:00',
        close: '5:00',
        description:
          'Blossoming Lotus serves organic, freshly made, vegan world cuisine with delicious cooked and live food options. We are open for lunch, dinner, and weekend brunch.',
        website: 'http://www.blpdx.com/',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cabezon Restaurant',
        cuisine: 'Seafood',
        cost: 3,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/06/91/78/df/cabezon-restaurant.jpg',
        address: '5200 NE Sacramento St, Portland, OR 97213-2666',
        open: '9:00',
        close: '5:00',
        description: null,
        website: 'http://cabezonrestaurant.com/',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Caffe Mingo',
        cuisine: 'Italian',
        cost: 2,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/10/58/e9/82/photo0jpg.jpg',
        address: '807 NW 21st Ave, Portland, OR 97209-1408',
        open: '9:00',
        close: '5:00',
        description:
          "Caffe Mingo is an Italian restaurant serving Portland for almost 30 years. We offer you the freshest, highest-quality produce, meats, fish and seafood in season all sourced from the PNW. Our newly opened Mercato, next-door to the restaurant serves take-out food, lunch on our covered heated patio, espresso bar, Mingo pantry items and speciality grocery. Mercato's hour of operation: 9AM - 7PM Tues-Sun. Food Menu starts at 11AM - 7PM",
        website: 'http://www.caffemingonw.com/',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cheryl's on12th",
        cuisine: 'American',
        cost: 2,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/03/d2/c4/81/cheryl-s-on-12th.jpg',
        address: '1135 SW Washington St, Portland, OR 97205-2313',
        open: '9:00',
        close: '5:00',
        description:
          "Pioneered by Cheryl & Ed Casey, Cheryl's on 12th is a New American restaurant & cafe situated in the heart of downtown Portland. Its beautiful floor to ceiling windows, quaint charm and delicious cuisine make it a hot spot for foodies all around. Cheryl's features cuisine for breakfast, brunch, lunch and dinner. Breakfast is served daily until 4:00PM M - S, and all day Sunday! Get here early to guarantee your seat and complimentary light, fluffy beignets. You don't want to miss weekend brunch with exciting specials, cocktails and a rare atmosphere full of service, family and friends.",
        website: 'http://www.cherylson12th.com/',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Elephants Delicatessen',
        cuisine: 'American',
        cost: 2,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-m/1280/13/df/87/9c/three-cheers-to-being.jpg',
        address: '115 NW 22nd Ave, Portland, OR 97210-3503',
        open: '9:00',
        close: '5:00',
        description:
          "Reminiscent of an old-world épicerie or European market, Elephants Delicatessen at NW 22nd is Portland’s treasured destination for specialty foods and warm hospitality. We're open for limited dine-in and takeout--including curbside pickup. You can also order online for contactless delivery. Thanks for your support!",
        website: 'http://www.elephantsdeli.com/locations/nw-22nd/',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Island Cafe',
        cuisine: 'American',
        cost: 2,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/0f/c6/d4/a4/soft-tacos-fish-tasty.jpg',
        address: '250 NE Tomahawk Island Dr, Portland, OR 97217-7938',
        open: '9:00',
        close: '5:00',
        description:
          "On Hayden Island, there's something wonderful besides bridges and boats floating in the water: the Island Cafe. Our vibrant decor and lively team will quickly transport you from Portland to paradise. And our open dining room overlooks the marina and is filled with the aromas of fried fish and fresh burgers. For those looking to unwind, our selection of fruit-based cocktails and microbrews should hit the spot nicely. When April 18th rolls around, our city knows that their favorite spot on the river is open again for the season. It doesn’t matter if you’re traveling by land or by sea, Island Cafe is where you want to be.",
        website: 'http://islandcafepdx.com/',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ken's Artisan Bakery",
        cuisine: 'Cafe',
        cost: 2,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/05/00/57/03/ken-s-artisan-bakery.jpg',
        address: '338 NW 21st Ave, Portland, OR 97209-1102',
        open: '9:00',
        close: '5:00',
        description: null,
        website: 'http://kensartisan.com/#/bakery',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lechon',
        cuisine: 'Latin',
        cost: 2,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/08/f7/d9/1a/logo.jpg',
        address: '113 SW Naito Pkwy, Portland, OR 97204-3512',
        open: '9:00',
        close: '5:00',
        description: null,
        website: 'http://lechonpdx.com/',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mediterranean Exploration Company',
        cuisine: 'Mediterranean',
        cost: 2,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/f2/e5/0c/dinner.jpg',
        address: '333 NW 13th Ave, Portland, OR 97209-3144',
        open: '9:00',
        close: '5:00',
        description:
          "A restaurant serving innovative cuisine from the eastern Mediterranean and beyond. Drawing from extensive research and travels to the Mediterranean, the menu features exceptional plates that are culturally diverse yet cohesive, paying tribute to the exploration of people across the Mediterranean throughout history. In an open and vibrant atmosphere with an industrial-meets-refined décor in Portland's Pearl District, M.E.C. encourages family-style dining and features a playful beverage program with nods to the flavors of the Mediterranean.",
        website: 'http://www.mediterraneanexplorationcompany.com/',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Milo's City Cafe",
        cuisine: 'American',
        cost: 2,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/0e/6b/a3/9c/mimosa-yum.jpg',
        address: '1325 NE Broadway St, Portland, OR 97232-1235',
        open: '9:00',
        close: '5:00',
        description: null,
        website: 'http://www.miloscitycafe.com/Pages/default.aspx',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mother's Bistro & Bar",
        cuisine: 'International',
        cost: 4,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-m/1280/17/ba/ed/b1/main-dining-room.jpg',
        address: '121 SW 3rd Ave Between Pine & Ash St, Portland, OR 97204',
        open: '9:00',
        close: '5:00',
        description:
          'Mother’s Bistro & Bar serves home cooking from mother’s around the world specializing in slow-cooked dishes that take hours to prepare like pot roast, chicken and dumplings, home made biscuits, pierogi and more. Each month we also feature the cuisine of a different mother, tell her a story, and future some of her special dishes.',
        website: 'http://www.mothersbistro.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mucca Osteria',
        cuisine: 'Italian',
        cost: 3,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-m/1280/13/af/df/89/duck.jpg',
        address: '1022 SW Morrison St, Portland, OR 97205-2626',
        open: '9:00',
        close: '5:00',
        description:
          'Chef-owner Simone Savaiano carefully selects ingredients to create authentic, Italian cuisine in an intimate downtown Portland restaurant.',
        website: 'http://www.muccaosteria.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Paley's Place",
        cuisine: 'American',
        cost: 4,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/0e/f7/b5/ee/dinner-at-paley-s-place.jpg',
        address: '1204 NW 21st Ave, Portland, OR 97209-1609',
        open: '9:00',
        close: '5:00',
        description: null,
        website: 'http://www.paleysplace.net/#about',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Petite Provence',
        cuisine: 'French',
        cost: 2,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/0e/7d/00/52/photo0jpg.jpg',
        address: '1824 NE Alberta St, Portland, OR 97211-5804',
        open: '9:00',
        close: '5:00',
        description:
          'Located in the heart of the Alberta Arts District, we are proud to offer epic breakfast, lunch, and brunch, along with tasty libations with local flair in this happening neighborhood. Come in to see us today!',
        website: 'http://www.provencepdx.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Piazza Italia',
        cuisine: 'Italian',
        cost: 4,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/0b/59/c5/5b/inside-piazza-italia.jpg',
        address: '1129 NW Johnson St, Portland, OR 97209-3062',
        open: '9:00',
        close: '5:00',
        description: null,
        website: 'http://www.piazzaportland.com/',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pine State Biscuits',
        cuisine: 'American',
        cost: 2,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/02/bf/6c/6a/pine-state-biscuits.jpg',
        address: '2204 NE Alberta St, Portland, OR 97211-5885',
        open: '9:00',
        close: '5:00',
        description: null,
        website: 'http://www.pinestatebiscuits.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pip's Original",
        cuisine: 'American',
        cost: 1,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/05/dd/53/67/an-assortment-of-donuts.jpg',
        address: '4759 NE Fremont St Ste C, Portland, OR 97213-1767',
        open: '9:00',
        close: '5:00',
        description: null,
        website: 'http://www.PipsOriginal.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Por Que No',
        cuisine: 'Mexican',
        cost: 1,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/06/07/82/9b/por-que-no.jpg',
        address: '4635 SE Hawthorne Blvd, Portland, OR 97215-3168',
        open: '9:00',
        close: '5:00',
        description: null,
        website: 'http://www.porquenotacos.com/',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Q Restaurant & Bar',
        cuisine: 'American',
        cost: 2,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/0d/6b/25/fe/q-restaurant-bar.jpg',
        address: '828 SW 2nd Ave, Portland, OR 97204-3012',
        open: '9:00',
        close: '5:00',
        description:
          'Q Restaurant & Bar is a family-owned restaurant in downtown Portland, Oregon. Established in 2016, we created a uniquely beautiful space to share our love of great food, fine wines, and the belief that dining itself is an enriching experience.',
        website: 'http://q-portland.com/',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Salt & Straw',
        cuisine: 'American',
        cost: 2,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/0d/d6/a1/06/chocolate-gooey-brownie.jpg',
        address: '838 NW 23rd Ave, Portland, OR 97210-3004',
        open: '9:00',
        close: '5:00',
        description:
          'Small-batch, chef-driven ice cream made by hand with local ingredients since 2011. We hope you love it!',
        website: 'https://saltandstraw.com/pages/nw-23',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Salt & Straw',
        cuisine: 'American',
        cost: 3,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/0d/d6/a0/d0/double-scoop.jpg',
        address: '3345 SE Division St, Portland, OR 97202-1456',
        open: '9:00',
        close: '5:00',
        description:
          'Small-batch, chef-driven ice cream made by hand with local ingredients since 2011. We hope you love it!',
        website: 'https://saltandstraw.com/pages/division',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Salt & Straw',
        cuisine: 'American',
        cost: 1,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/0b/72/d1/9a/caption.jpg',
        address: '2035 NE Alberta St, Portland, OR 97211-5847',
        open: '9:00',
        close: '5:00',
        description:
          'Small-batch, chef-driven ice cream made by hand with local ingredients since 2011. We hope you love it!',
        website: 'https://saltandstraw.com/pages/alberta',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Screen Door Eastside',
        cuisine: 'American',
        cost: 2,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/11/c1/c8/83/screen-door-restaurant.jpg',
        address: '2337 E Burnside St, Portland, OR 97214-1655',
        open: '9:00',
        close: '5:00',
        description:
          'Screen Door presents a revival of regional American cuisine, a survey of the south, from South Carolina Lowcountry cuisine to soul food and Cajun one-pot cookery to the refined Creole and French preparations found in New Orleans. We celebrate Southern cuisine from the quintessential hearty fare to the everyday foods gathered fresh from the garden. At Screen Door we serve natural, local and organic produce and meats everyday. Central to our concept is weaving the rich bounty of local fresh produce found here in the Pacific Northwest into our menu.',
        website: 'http://www.screendoorrestaurant.com/',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Southpark Seafood',
        cuisine: 'Bar',
        cost: 3,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/1c/b4/2d/68/seafood-tower.jpg',
        address: '901 SW Salmon Street, Portland, OR 97205',
        open: '9:00',
        close: '5:00',
        description:
          "Southpark Seafood serves sustainable seafood and comfort classics with take-out and delivery. Enjoy Happy Hour from 3-5pm daily. Try a make @ home meal-kit to bring Chef's expertise into your kitchen! As a proud partner of the Monterey Bay Aquarium’s Seafood Watch® program, Southpark Seafood only serves seafood that has been fished or farmed in ways that minimize their environmental impact. For 22 years, this definitive Portland restaurant has been a local favorite. With the city’s largest selection of oysters, we dare you to find a better place for a dozen on the half shell.",
        website:
          'https://southparkseafood.com/?utm_source=ExtNet&utm_medium=Yext',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'The Grilled Cheese Grill',
        cuisine: 'American',
        cost: 1,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/0f/8e/9c/43/photo2jpg.jpg',
        address: '1027 NE Alberta St, Portland, OR 97211-4533',
        open: '9:00',
        close: '5:00',
        description: null,
        website: 'http://www.grilledcheesegrill.com/',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'The Observatory',
        cuisine: 'American',
        cost: 3,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/0c/6d/d4/d8/very-friendly-staff-the.jpg',
        address: '8115 SE Stark St, Portland, OR 97215-2345',
        open: '9:00',
        close: '5:00',
        description: null,
        website: 'http://www.theobservatorypdx.com/',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'The Waffle Window',
        cuisine: 'Cafe',
        cost: 1,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/04/18/a7/5c/waffle-window.jpg',
        address: '3610 SE Hawthorne Blvd, Portland, OR 97214-5144',
        open: '9:00',
        close: '5:00',
        description:
          'We are: Portland style Liege sugar waffles handmade for you using local and seasonal ingredients and set in a fun and whimsical atmosphere.From a bacon brie and basil waffle to a huckleberry jam with lemon panna cotta waffle, you just never know what you might find!',
        website: 'http://wafflewindow.com/',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tin Shed Garden Cafe',
        cuisine: 'American',
        cost: 3,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/10/a7/15/67/photo1jpg.jpg',
        address: '1438 NE Alberta St, Portland, OR 97211-5044',
        open: '9:00',
        close: '5:00',
        description:
          'Our mission is to serve responsibly-sourced, tasty food while maintaining meaningful connections with our guests, staff and the community.',
        website: 'http://tinshedgardencafe.com/',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
