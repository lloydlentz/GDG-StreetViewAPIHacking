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
  'plaza': {
    name: 'Bateman Plaza',
    originHeading: 0,
    links: [
    { heading: 20,
      description: 'Crosswalk',
      pano: 'crosswalk'
    },
    { heading: -125,
      description: 'Reception',
      pano: 'reception'
    }]
  },
   'crosswalk': {
     name: 'Crosswalk',
     originHeading: 260,
     links: [
     { heading: 0,
       description: 'Reception',
       pano: 'reception'
     }, {
       heading: 185,
       description: 'Bateman Plaza',
       pano: 'plaza'
     }]
  },
}

