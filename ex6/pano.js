var rooms = {
  'reception': {
    name: 'Reception',
    originHeading: 170,
    links: [
    { heading: 45,
      description: 'Cafe',
      pano: 'cafe_south'
    },
    { heading: -170,
      description: 'Blue Room',
      pano: 'blue'
    },
    { heading: -100,
      description: 'crosswalk',
      pano: 'crosswalk'
    }]
  },
  'cafe_south': {
    name: 'Cafe (South End)',
    originHeading: -45,
    links: [
    { heading: 0,
      description: 'Cafe',
      pano: 'cafe_north'
    },
    { heading: -125,
      description: 'Reception',
      pano: 'reception'
    }]
  },
  'cafe_north': {
    name: 'Cafe (North End)',
    originHeading: 180,
    links: [
    { heading: 180,
      description: 'Cafe',
      pano: 'cafe_south'
    }]
  },
   'blue': {
     name: 'Blue Room',
     originHeading: 10,
     links: [
     { heading: -10,
       description: 'Reception',
       pano: 'reception'
     }, {
       heading: 130,
       description: 'Barrier Reef',
       pano: 'barrier_reef'
     }]
  },
   'crosswalk': {
     name: 'Crosswalk',
     originHeading: 260,
     links: [
     { heading: -10,
       description: 'Reception',
       pano: 'reception'
     }, {
       heading: 130,
       description: 'Barrier Reef',
       pano: 'barrier_reef'
     }]
  },
   'barrier_reef': {
    name: 'Barrier Reef',
    originHeading: -50,
    links: [
    { heading: -50,
      description: "Blue Room",
      pano: 'blue'
    }]
  }
}

