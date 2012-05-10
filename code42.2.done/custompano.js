  function getCustomPanorama(pano,zoom,tileX,tileY) {
 
    var center;
 
    switch(pano) {
 
	  case entryPanoId:
		//centerHeading: -20,
		//return {
		//  centerHeading: -20
		//  }
		break;     
	  case 'reception':
        center = new google.maps.LatLng(44.939946,-93.167842);
        return {
          location: {
            pano: 'reception',
            description: "Google Sydney - Reception",
            latLng: center
          },
          links: [
            ],
          // The text for the copyright control.
          copyright: 'Imagery (c) 2010 Google',
          // The definition of the tiles for this panorama.
          tiles: {
            tileSize: new google.maps.Size(4323, 1712),
            worldSize: new google.maps.Size(4323, 1712),
            // The heading at the origin of the panorama tile set.
            centerHeading: 80,
            getTileUrl: getCustomPanoramaTileUrl
          }
        };
        break;
	  case 'daytonPlaza':
        center = new google.maps.LatLng(44.939456,-93.168062);
        return {
          location: {
            pano: 'daytonPlaza',
            description: "Campus Center - Dayton Plaza",
            latLng: center
          },
          links: [
            ],
          // The text for the copyright control.
          copyright: 'Imagery (c) 2010 Google',
          // The definition of the tiles for this panorama.
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
            // The heading at the origin of the panorama tile set.
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        };
        break;
      default:
        return null;
    }
  }
   
  function createCustomLinks() {
 
    if (entryPanoId) {
      var links = panorama.getLinks();
      var panoId = panorama.getPano();
 
      switch(panoId) {
 
        case entryPanoId:
          // Adding a link in the view from the entrance of the building to
          // reception.
          links.push({
            'heading': 150,
            'description' : 'Code 42',
            'pano' : 'reception'
          });
          break;
        case 'reception':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 0,
            'description' : 'Exit',
            'pano' : entryPanoId
          });
          links.push({
            'heading': 190,
            'description' : 'Dayton Plaza',
            'pano' : 'daytonPlaza'
          });
          break;
        case 'daytonPlaza':
          links.push({
            'heading': 20,
            'description' : 'Cross Walk',
            'pano' : 'reception'
          });
          break;
        default:
          return;
      }
    }
  }
