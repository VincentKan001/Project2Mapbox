{"filter":false,"title":"script.js","tooltip":"/script.js","undoManager":{"mark":2,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":15,"column":0},"action":"insert","lines":["// define frequently used constants","const API_URL = 'https://api.foursquare.com/v2';","const CLIENT_ID = 'Q2RSSYGEK5A52WDCZLAQ1TEML510P3XPGUC1JLY2H3UT31NW';","const CLIENT_SECRET = \"AZKZJIRQOC3HUXHN5SJJXV3ZT0JCTPZ0SZ5NTBWGJO5OWWLT\";","","/* global axios */","/* global $ */","/* global mapboxgl*/","/* global MapboxGeocoder*/","/* global MapboxDirections*/","","","/* global variables */","let map;","let all_markers = [];",""],"id":1}],[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":16,"column":0},"end":{"row":30,"column":1},"action":"insert","lines":["function testFourSquare()","{","    axios.get(API_URL + \"/venues/explore\", {","        params: {","            \"client_id\":CLIENT_ID,  ","            \"client_secret\":CLIENT_SECRET,","            \"v\":'20193009', // v for is the version","            \"limit\":10, // limit is how many results returned","            \"ll\":'1.2933,103.7831', // latitude/longtitude","            \"query\":'coffee' // what we are searching for","       }","    }).then(function(response){","      console.log(response.data.response.groups[0].items);  ","    })","}"],"id":3}]]},"ace":{"folds":[],"scrolltop":98,"scrollleft":0,"selection":{"start":{"row":30,"column":1},"end":{"row":30,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":5,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1571385047770,"hash":"11eff920b00a6bb1d26c4a0c5ffc8c7a561a25c0"}