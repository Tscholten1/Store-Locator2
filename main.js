// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

mapboxgl.accessToken = 'pk.eyJ1IjoidHNjaG9sdGVuIiwiYSI6ImNrMHY3N2xsZjB3MHQzaHF6bWdmMzg4dzIifQ.uZB-2Im_qorX5XF_gm6ckQ';

// This adds the map to the page
var map = new mapboxgl.Map({
    // container id specified in the HTML
    container: 'map',
    // style URL
    style: 'mapbox://styles/mapbox/light-v9',
    // initial position in [lon, lat] format
    center: [-88.312156, 41.758342],
    // initial zoom
    zoom: 14
});

var stores = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
            -88.314760,
            41.758342
          ]
            },
            "properties": {
                "phoneFormatted": "(331) 256-6683",
                "phone": "2022347336",
                "address": "29 W New York St",
                "city": "Aurora",
                "country": "United States",
                "crossStreet": "at 15 th St NW",
                "postalCode": "60506",
                "state": "IL"
            }
      },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
            32.60954,
            0.298721
          ]
            },
            "properties": {
                "phoneFormatted": "(256) 786-996858",
                "phone": "(256) 786-996858",
                "address": "Tank Hill Park",
                "city": "Kampala",
                "country": "Uganda",
                "crossStreet": "",
                "postalCode": "",
                "state": "Uganda"
            }
      },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
            34.180760,
            1.072392
          ]
            },
            "properties": {
                "phoneFormatted": "(256) 775-227132",
                "phone": "(256) 775-227132",
                "address": "39-41 Republic Street",
                "city": "Mbale",
                "country": "Uganda",
                "crossStreet": "",
                "postalCode": "",
                "state": "Uganda"
            }
      },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
            32.601871,
            0.341261
          ]
            },
            "properties": {
                "phoneFormatted": "(256) 39.2174907",
                "phone": "2023379338",
                "address": "Naggula Drive (The Sugary)",
                "city": "Kampala",
                "country": "Uganda",
                "crossStreet": "",
                "postalCode": "",
                "state": "Uganda"
            }
      },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
            32.588102,
            0.339137
          ]
            },
            "properties": {
                "phoneFormatted": "() ",
                "phone": "",
                "address": "Kisimenti, 23B Cooper Road",
                "city": "Kampala",
                "country": "Uganda",
                "crossStreet": "",
                "postalCode": "",
                "state": "Uganda"
            }
      },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
            -76.933492720127,
            38.99225245786
          ]
            },
            "properties": {
                "address": "8204 Baltimore Ave",
                "city": "College Park",
                "country": "United States",
                "postalCode": "20740",
                "state": "MD"
            }
      },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
            -77.097083330154,
            38.980979
          ]
            },
            "properties": {
                "phoneFormatted": "(301) 654-7336",
                "phone": "3016547336",
                "address": "4831 Bethesda Ave",
                "cc": "US",
                "city": "Bethesda",
                "country": "United States",
                "postalCode": "20814",
                "state": "MD"
            }
      },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
            -77.359425054188,
            38.958058116661
          ]
            },
            "properties": {
                "phoneFormatted": "(571) 203-0082",
                "phone": "5712030082",
                "address": "11935 Democracy Dr",
                "city": "Reston",
                "country": "United States",
                "crossStreet": "btw Explorer & Library",
                "postalCode": "20190",
                "state": "VA"
            }
      },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
            -77.10853099823,
            38.880100922392
          ]
            },
            "properties": {
                "phoneFormatted": "(703) 522-2016",
                "phone": "7035222016",
                "address": "4075 Wilson Blvd",
                "city": "Arlington",
                "country": "United States",
                "crossStreet": "at N Randolph St.",
                "postalCode": "22203",
                "state": "VA"
            }
      },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
            -75.28784,
            40.008008
          ]
            },
            "properties": {
                "phoneFormatted": "(610) 642-9400",
                "phone": "6106429400",
                "address": "68 Coulter Ave",
                "city": "Ardmore",
                "country": "United States",
                "postalCode": "19003",
                "state": "PA"
            }
      },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
            -75.20121216774,
            39.954030175164
          ]
            },
            "properties": {
                "phoneFormatted": "(215) 386-1365",
                "phone": "2153861365",
                "address": "3925 Walnut St",
                "city": "Philadelphia",
                "country": "United States",
                "postalCode": "19104",
                "state": "PA"
            }
      },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
            -77.043959498405,
            38.903883387232
          ]
            },
            "properties": {
                "phoneFormatted": "(202) 331-3355",
                "phone": "2023313355",
                "address": "1901 L St. NW",
                "city": "Washington DC",
                "country": "United States",
                "crossStreet": "at 19th St",
                "postalCode": "20036",
                "state": "D.C."
            }
      }
    ]
};

map.on('load', function (e) {
    // Add the data to your map as a layer
    map.addSource('places', {
        type: 'geojson',
        data: stores
    });

    buildLocationList(stores);
});

function buildLocationList(data) {
    // Iterate through the list of stores
    for (i = 0; i < data.features.length; i++) {
        var currentFeature = data.features[i];

        // Shorten data.feature.properties to just `prop` so we're not
        // writing this long form over and over again.
        var prop = currentFeature.properties;

        // Select the listing container in the HTML and append a div
        // with the class 'item' for each store
        var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('div'));
        listing.className = 'item';
        listing.id = 'listing' + i;

        // Create a new link with the class 'title' for each store
        // and fill it with the store address
        var link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.dataPosition = i;
        link.innerHTML = prop.address;
        // Add an event listener for the links in the sidebar listing
        link.addEventListener('click', function (e) {
            // Update the currentFeature to the store associated with the clicked link
            var clickedListing = data.features[this.dataPosition];
            // 1. Fly to the point associated with the clicked link
            flyToStore(clickedListing);
            // 2. Close all other popups and display popup for clicked store
            createPopUp(clickedListing);
            // 3. Highlight listing in sidebar (and remove highlight for all other listings)
            var activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');
        });

        // Create a new div with the class 'details' for each store
        // and fill it with the city and phone number
        var details = listing.appendChild(document.createElement('div'));
        details.innerHTML = prop.city;
        if (prop.phone) {
            details.innerHTML += ' &middot; ' + prop.phoneFormatted;
        }
    }
}

//Function to fly to the correct store
function flyToStore(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
    });
}

//Function to display popup features
function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) popUps[0].remove();

    var popup = new mapboxgl.Popup({
            closeOnClick: false
        })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('<h3>Sweetgreen</h3>' + '<h4>' + currentFeature.properties.address + '</h4>')
        .addTo(map);
}

//// Add an event listener for when a user clicks on the map

stores.features.forEach(function (marker) {
    // Create a div element for the marker
    var el = document.createElement('div');
    // Add a class called 'marker' to each div
    el.className = 'marker';
    // By default the image for your custom marker will be anchored
    // by its center. Adjust the position accordingly
    // Create the custom markers, set their position, and add to map
    new mapboxgl.Marker(el, {
            offset: [0, -23]
        })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    el.addEventListener('click', function (e) {
        var activeItem = document.getElementsByClassName('active');
        // 1. Fly to the point
        flyToStore(marker);
        // 2. Close all other popups and display popup for clicked store
        createPopUp(marker);
        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        e.stopPropagation();
        if (activeItem[0]) {
            activeItem[0].classList.remove('active');
        }

        var listing = document.getElementById('listing-' + i);
        console.log(listing);
        listing.classList.add('active');
    });
});
