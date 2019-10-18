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