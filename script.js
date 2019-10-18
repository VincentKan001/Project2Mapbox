// define frequently used constants
const API_URL = 'https://api.foursquare.com/v2';
const CLIENT_ID = 'Q2RSSYGEK5A52WDCZLAQ1TEML510P3XPGUC1JLY2H3UT31NW';
const CLIENT_SECRET = "AZKZJIRQOC3HUXHN5SJJXV3ZT0JCTPZ0SZ5NTBWGJO5OWWLT";

/* global axios */
/* global $ */
/* global mapboxgl*/
/* global MapboxGeocoder*/
/* global MapboxDirections*/


/* global variables */
let map;
let all_markers = [];

function testFourSquare()
{
    axios.get(API_URL + "/venues/explore", {
        params: {
            "client_id":CLIENT_ID,  
            "client_secret":CLIENT_SECRET,
            "v":'20193009', // v for is the version
            "limit":10, // limit is how many results returned
            "ll":'1.2933,103.7831', // latitude/longtitude
            "query":'coffee' // what we are searching for
       }
    }).then(function(response){
      console.log(response.data.response.groups[0].items);  
    })
}

//to put map on html 
function setupMap()
{
    mapboxgl.accessToken = "pk.eyJ1IjoidmluY2VudGthbiIsImEiOiJjazE3aTJhdzUwOHE2M3FtemJ1eHU2NXByIn0.QdvNqEBV2P657xWrqU8UMw";
    
    map = new mapboxgl.Map({
    container: 'map', // naming my map 
    style:'mapbox://styles/mapbox/streets-v11', // how the map looks on html
    center:[103.8198, 1.3521], // center of map set at singapore 
    zoom:10 // how zoomed we are 
    });
    
    //add search function
    map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    }),'top-left');