(function() {
  'use strict';

  angular
      .module('angularProject')
      .service('soccerTeams', soccerTeams);

  /** @ngInject */
  function soccerTeams() {

    var teams = [
      {
        "teamName": "AFC Bournemouth",
        "teamIndex": 0,
        "_id": "56e4d7a31367819a490cf513",
        "cash": "7.2M",
        "latitude": 28.723666,
        "longitude": -33.350263,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 72,
                "name": "Perez Crosby",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 71,
                "name": "Lamb Hicks",
                "age": 35,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 94,
                "name": "Catherine Hoffman",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 70,
                "name": "Mays Leblanc",
                "age": 18,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 92,
                "name": "Charity Moreno",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 99,
                "name": "Mckay Sawyer",
                "age": 33,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 86,
                "name": "Aida Chan",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 64,
                "name": "Mabel Cooper",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 64,
                "name": "Dalton Mills",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 69,
                "name": "Adkins Poole",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 60,
                "name": "Rogers Franks",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 70,
                "name": "Sheryl Benson",
                "age": 18,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 93,
                "name": "Aguilar Adams",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 77,
                "name": "Jackie Jenkins",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 97,
                "name": "Elma Alexander",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 82,
                "name": "Jo Mcdowell",
                "age": 18,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 68,
                "name": "Nancy Owen",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 88,
                "name": "Weaver Pennington",
                "age": 18,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 92,
                "name": "Barber Page",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 90,
                "name": "Macdonald Salinas",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Robinson Madden",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 70,
                "name": "Santos Stephens",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "Arsenal FC",
        "teamIndex": 1,
        "_id": "56e4d7a35bc019986729d1da",
        "cash": "56.1M",
        "latitude": 20.407833,
        "longitude": -69.394648,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating":87,
                "name": "Petr Cech",
                "age": 33,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 77,
                "name": "David Ospina",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 85,
                "name": "Laurent Koscielny",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 83,
                "name": "Hector Bellerin",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 82,
                "name": "Per Mertesacker",
                "age": 30,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "Nacho Monreal",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Kieran Gibbs",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Mathieu Debuchy",
                "age": 30,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 78,
                "name": "Gabriel",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 90,
                "name": "Mesut Ozil",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 86,
                "name": "Santi Cazorla",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 83,
                "name": "Aaron Ramsey",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Theo Walcott",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "Jack Wilshere",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Alex Oxlade-Chamberlain",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Francis Coquelin",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 76,
                "name": "Joel Campbell",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 72,
                "name": "Serge Gnabry",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 88,
                "name": "Alexis Sanchez",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 82,
                "name": "Olivier Giroud",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "Danny Welbeck",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "Aston Villa",
        "teamIndex": 2,
        "_id": "56e4d7a368d3c49e383c985d",
        "cash": "16M",
        "latitude": -20.592812,
        "longitude": -167.301813,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 76,
                "name": "Ayers Huffman",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 72,
                "name": "Aisha Schultz",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 77,
                "name": "Keri Dominguez",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 97,
                "name": "Lacey Clements",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 86,
                "name": "Cherry Pittman",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 78,
                "name": "Cotton Flynn",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 68,
                "name": "Jocelyn Manning",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 66,
                "name": "Hull Mcclain",
                "age": 35,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 66,
                "name": "Levy Gardner",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 85,
                "name": "Reeves Myers",
                "age": 35,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 86,
                "name": "Vonda Dyer",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 77,
                "name": "Amy Clayton",
                "age": 34,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 93,
                "name": "Marion Craft",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 74,
                "name": "Bowers Villarreal",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 75,
                "name": "Deanna Hodges",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 79,
                "name": "Britt Barker",
                "age": 35,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 64,
                "name": "Maxwell Smith",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 99,
                "name": "Molina Williamson",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "Chelsea FC",
        "teamIndex": 3,
        "_id": "56e4d7a3a68804b4c0606764",
        "cash": "74.4M",
        "latitude": 6.877786,
        "longitude": 155.743643,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 86,
                "name": "Thibaut Courtouis",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Asmir Begovic",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 84,
                "name": "John Terry",
                "age": 33,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 83,
                "name": "Gary Cahill",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 82,
                "name": "Cesar Azpilicueta",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 82,
                "name": "Branislav Ivanovic",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Kurt Zouma",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 75,
                "name": "Abdul Rahman Baba",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 75,
                "name": "Papi Djilobodji",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 88,
                "name": "Eden Hazard",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 87,
                "name": "Cesc Fabregas",
                "age": 30,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 84,
                "name": "Oscar",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 84,
                "name": "Nemanja Matic",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 83,
                "name": "Willian",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 77,
                "name": "John Obi Mikel",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 69,
                "name": "Ruben Loftus Cheek",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 87,
                "name": "Diego Costa",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 83,
                "name": "Pedro",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "Loic Remy",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Alexandro Pato",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 76,
                "name": "Christian Atsu",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 74,
                "name": "Bertrand Traore",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "Crystal Palace",
        "teamIndex": 4,
        "_id": "56e4d7a33f428598c0bf8bcc",
        "cash": "9.2M",
        "latitude": 9.378926,
        "longitude": -16.270633,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 95,
                "name": "Lynch Pierce",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 91,
                "name": "Mitchell Zimmerman",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 69,
                "name": "Stokes Gay",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 64,
                "name": "Debra Johnson",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 89,
                "name": "Marcia Woods",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Carrillo Conway",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 74,
                "name": "Weeks Kennedy",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Mindy Strickland",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 67,
                "name": "Stein Pratt",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 88,
                "name": "Glenna Bauer",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 73,
                "name": "Norma Skinner",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 71,
                "name": "Stella Mccoy",
                "age": 30,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 96,
                "name": "Hatfield Harrell",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 95,
                "name": "Hayes Pickett",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Salinas Wells",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 88,
                "name": "Morrison Durham",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 99,
                "name": "Freeman Mercado",
                "age": 33,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 99,
                "name": "Odonnell Fuller",
                "age": 18,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 71,
                "name": "Summer Gonzalez",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 70,
                "name": "Sofia Branch",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 93,
                "name": "Oneill Reed",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 96,
                "name": "Lucia Espinoza",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "Everton FC",
        "teamIndex": 5,
        "_id": "56e4d7a39324cfad4f043c13",
        "cash": "30.6M",
        "latitude": 52.215275,
        "longitude": 82.72577,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 91,
                "name": "Olivia Short",
                "age": 35,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 73,
                "name": "Madge Holloway",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 73,
                "name": "Claudette Baldwin",
                "age": 35,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 87,
                "name": "Gonzalez Sampson",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 93,
                "name": "Molly Owens",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 66,
                "name": "Roxanne Melton",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 90,
                "name": "Marlene Blevins",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 84,
                "name": "Dixon Mcmillan",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Young Acevedo",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 90,
                "name": "Pamela George",
                "age": 18,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 60,
                "name": "Long Marshall",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 99,
                "name": "Mattie Jordan",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 96,
                "name": "Shannon Crawford",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 98,
                "name": "Bowen Salazar",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 64,
                "name": "Mallory Patel",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 92,
                "name": "Vaughan Blackburn",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 66,
                "name": "Stephens Hart",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 77,
                "name": "Pam Vazquez",
                "age": 35,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 94,
                "name": "Annie Ayers",
                "age": 30,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 86,
                "name": "Angel Lowery",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 87,
                "name": "Harrison Mosley",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 92,
                "name": "Alejandra Porter",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "Leicester City",
        "teamIndex": 6,
        "_id": "56e4d7a3db231f957471fba3",
        "cash": "17.6M",
        "latitude": -74.648622,
        "longitude": 115.024593,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 77,
                "name": "Kasper Schmeichel",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 72,
                "name": "Mark Schwarzer",
                "age": 42,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 80,
                "name": "Robert Huth",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 78,
                "name": "Christian Fuchs",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 78,
                "name": "Yohan Benalouane",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 73,
                "name": "Wes Morgan",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 74,
                "name": "Danny Simpson",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 74,
                "name": "Ritchie De Laet",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 70,
                "name": "Marcin Wasilewski",
                "age": 35,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 69,
                "name": "Jeffrey Schlupp",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 85,
                "name": "Riyad Mahrez",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Gokhan Inler",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "N'golo Kante",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 76,
                "name": "Nathan Dyer",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 74,
                "name": "Danny Drinkwater",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 75,
                "name": "Marc Albrighton",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 69,
                "name": "Daniel Amartey",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 83,
                "name": "Jamie Vardy",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 78,
                "name": "Shinki Okazaki",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 78,
                "name": "Leonardo Ulloa",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 73,
                "name": "Andrej Kramaric",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "Liverpool FC",
        "teamIndex": 7,
        "_id": "56e4d7a3c66085e988a8847d",
        "cash": "57.9M",
        "latitude": 43.682212,
        "longitude": 133.892157,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 78,
                "name": "Simon Mignolet",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 73,
                "name": "Adam Bogdan",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 64,
                "name": "Danny Ward",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 82,
                "name": "Martin Skrtel",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Mamadou Sakho",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Nathaniel Clyne",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Dejan Lovren",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 77,
                "name": "Alberto Moreno",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 73,
                "name": "Kolo Toure",
                "age": 34,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 77,
                "name": "Steven Caulker",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 78,
                "name": "Jose Enrique",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 73,
                "name": "Jon Flanagan",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 86,
                "name": "Phillippe Coutinho",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Adam Lallana",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "James Milner",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 78,
                "name": "Lucas Leiva",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Joe Allen",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 82,
                "name": "Emre Can",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 71,
                "name": "Joao Teixeira",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 74,
                "name": "Jordan Ibe",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 82,
                "name": "Roberto Firmino",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 83,
                "name": "Daniel Sturridge",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Christian Benteke",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 78,
                "name": "Divock Origi",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 77,
                "name": "Danny Ings",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "Manchester City",
        "teamIndex": 8,
        "_id": "56e4d7a34247be6822505706",
        "cash": "78.8M",
        "latitude": -58.45543,
        "longitude": 170.058062,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 84,
                "name": "Joe Hart",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Willy Caballero",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 65,
                "name": "Richard Wright",
                "age": 37,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 85,
                "name": "Vincent Kompany",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 84,
                "name": "Nicolas Otamendi",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 82,
                "name": "Pablo Zabaleta",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Martin DeMichelis",
                "age": 35,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "Bacary Sagna",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Gael Clichy",
                "age": 30,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 78,
                "name": "Eliaquim Mangala",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 77,
                "name": "Aleksander Kolarov",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 89,
                "name": "David Silva",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 88,
                "name": "Kevin De Bruyne",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating":86,
                "name": "Yaya Toure",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 84,
                "name": "Raheem Sterling",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 83,
                "name": "Samir Nasri",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "Jesus Navas",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Fernandinho",
                "age": 30,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 78,
                "name": "Fernando",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 74,
                "name": "Fabian Delph",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 91,
                "name": "Sergio Aguero",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Wilfried Bony",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 74,
                "name": "Kelechi Iheanacho",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "Manchester United",
        "teamIndex": 9,
        "_id": "56e4d7a36e204b274e377ef3",
        "cash": "73.3M",
        "latitude": 89.755624,
        "longitude": -39.375212,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 8,
            "gk": 9,
            "def": 7,
            "mid": 8,
            "att": 8
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 87,
                "name": "David De Gea",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 76,
                "name": "Sergio Romero",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 63,
                "name": "Sam Johnstone",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 82,
                "name": "Chris Smalling",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Marcus Rojo",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Matteo Darmian",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Daley Blind",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "Phil Jones",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "Luke Shaw",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 73,
                "name": "Guillermo Varela",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 73,
                "name": "Paddy McNair",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 70,
                "name": "Timothy Fosu-Mensah",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 84,
                "name": "Juan Mata",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 82,
                "name": "Morgan Scheiderlin",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 83,
                "name": "Bastian Schweinsteiger",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Ander Herrera",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Michael Carrick",
                "age": 34,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Antonio Valencia",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 78,
                "name": "Jesse Lingard",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "Ashley Young",
                "age": 30,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 78,
                "name": "Maruoane Fellaini",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 77,
                "name": "Adnan Januzaj",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 85,
                "name": "Wayne Rooney",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 82,
                "name": "Anthony Martial",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Memphis Depay",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 76,
                "name": "Marcus Rashford",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 72,
                "name": "James Wilson",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "Newcastle United",
        "teamIndex": 10,
        "_id": "56e4d7a38140e0e07c5d5dea",
        "cash": "28.3M",
        "latitude": 72.501603,
        "longitude": 179.505004,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 79,
                "name": "Leonard Santos",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 66,
                "name": "Phillips Frank",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 89,
                "name": "Jodi Tucker",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 93,
                "name": "Lillian Huber",
                "age": 30,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 69,
                "name": "Bertha Bradley",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 88,
                "name": "Marquita Schwartz",
                "age": 34,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 88,
                "name": "Gross Cameron",
                "age": 33,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 63,
                "name": "Millie Molina",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 90,
                "name": "Christian Melendez",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 92,
                "name": "Haley Zamora",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 95,
                "name": "Shauna Randolph",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 63,
                "name": "Miles Maxwell",
                "age": 34,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 61,
                "name": "Miller Martinez",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 72,
                "name": "Natasha Solomon",
                "age": 34,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 71,
                "name": "Humphrey Crane",
                "age": 34,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 75,
                "name": "Yesenia Richard",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 71,
                "name": "Stefanie Burris",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 69,
                "name": "Dorsey Prince",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "Norwich City",
        "teamIndex": 11,
        "_id": "56e4d7a3f011d2f3f2331b79",
        "cash": "10.5M",
        "latitude": 61.024331,
        "longitude": -96.403206,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 88,
                "name": "Ethel Orr",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 91,
                "name": "Webb Greer",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 73,
                "name": "Good Stephenson",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 76,
                "name": "West Carpenter",
                "age": 18,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 91,
                "name": "Beulah Larsen",
                "age": 34,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 71,
                "name": "Gray Holder",
                "age": 30,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 63,
                "name": "Terrie Mccullough",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 91,
                "name": "Flores Robertson",
                "age": 34,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 69,
                "name": "Kemp Spence",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 65,
                "name": "Adrian Whitney",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 70,
                "name": "Jeannie Holcomb",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 74,
                "name": "Buckner David",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 63,
                "name": "Lowery Horne",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 66,
                "name": "Gay Wooten",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 90,
                "name": "Dolly Fox",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 93,
                "name": "Ebony Navarro",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 74,
                "name": "Katherine Bond",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 82,
                "name": "Jasmine Mayo",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 86,
                "name": "Christensen Dodson",
                "age": 34,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "Southampton",
        "teamIndex": 12,
        "_id": "56e4d7a33c9e690abf8ffada",
        "cash": "18.7M",
        "latitude": -54.002521,
        "longitude": -133.738142,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 84,
                "name": "Case Stone",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "Hampton Spencer",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 74,
                "name": "York Vincent",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 85,
                "name": "Tricia Oliver",
                "age": 35,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 82,
                "name": "Kathrine Barnett",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 92,
                "name": "Jenkins Montgomery",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 94,
                "name": "Herminia Garza",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 90,
                "name": "Juarez Hood",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 71,
                "name": "Figueroa Carr",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 89,
                "name": "Kayla Brady",
                "age": 30,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 84,
                "name": "Lilly Moses",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 64,
                "name": "Barlow Campbell",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 96,
                "name": "Emilia Lawson",
                "age": 34,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 65,
                "name": "Milagros Moody",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "Levine Fernandez",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 73,
                "name": "Ferrell Perkins",
                "age": 35,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 61,
                "name": "Sharpe Robles",
                "age": 33,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 87,
                "name": "Cherie Saunders",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 66,
                "name": "Leanne Valdez",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Howard Greene",
                "age": 18,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "Stoke City",
        "teamIndex": 13,
        "_id": "56e4d7a394ce626941494238",
        "cash": "17.4M",
        "latitude": 24.173732,
        "longitude": 56.331864,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 72,
                "name": "Glass Sheppard",
                "age": 33,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 78,
                "name": "Tracie Mcgowan",
                "age": 18,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 98,
                "name": "Bonita Harding",
                "age": 33,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 61,
                "name": "Santiago Mcbride",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 96,
                "name": "Melanie Brown",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 73,
                "name": "Ford Sparks",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 99,
                "name": "Ofelia Sweet",
                "age": 30,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 88,
                "name": "Becker Walsh",
                "age": 33,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 74,
                "name": "Dillard Tate",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 75,
                "name": "Salas Hurley",
                "age": 35,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 85,
                "name": "Allie Finch",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 72,
                "name": "Whitley Alvarez",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 88,
                "name": "Todd Sharp",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 85,
                "name": "Leah Rosario",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 67,
                "name": "Adele Dotson",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 84,
                "name": "Curry Gallegos",
                "age": 18,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 73,
                "name": "Buchanan Henry",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 86,
                "name": "Simmons Miles",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 91,
                "name": "Patrica Powers",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 90,
                "name": "Patrice Roy",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "Sunderland",
        "teamIndex": 14,
        "_id": "56e4d7a36e0b78de9f90eef6",
        "cash": "13.3M",
        "latitude": -50.8438,
        "longitude": 10.132488,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 85,
                "name": "Anita Pacheco",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 98,
                "name": "Alissa Mcconnell",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 97,
                "name": "Imogene Dunn",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 63,
                "name": "Middleton Talley",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 66,
                "name": "Alexis Hobbs",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 85,
                "name": "Cecile Gould",
                "age": 34,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Carlson Delgado",
                "age": 33,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "Guzman Maldonado",
                "age": 30,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 66,
                "name": "Lucinda Thornton",
                "age": 33,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 71,
                "name": "Mcmahon Guerra",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 85,
                "name": "Sherrie Tyler",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Lora Gill",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 99,
                "name": "Georgette Clay",
                "age": 30,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 99,
                "name": "Webster Norris",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 76,
                "name": "Goff Guerrero",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 79,
                "name": "Lucas Wilder",
                "age": 35,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 84,
                "name": "Emily Bailey",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 68,
                "name": "Bullock Rojas",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 75,
                "name": "Maryanne Good",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "Swansea City",
        "teamIndex": 15,
        "_id": "56e4d7a30ce87edc7a66b3bf",
        "cash": "18.2M",
        "latitude": 8.494901,
        "longitude": 145.270963,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 68,
                "name": "Fernandez Foster",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 94,
                "name": "Manning Stafford",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 85,
                "name": "Jenifer Sloan",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 70,
                "name": "Iva Mcclure",
                "age": 35,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "Lelia Oneal",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 68,
                "name": "Corina Johnston",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 62,
                "name": "Luisa Cook",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 75,
                "name": "Mueller Shields",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 75,
                "name": "Key Travis",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 79,
                "name": "Kellie Cabrera",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 98,
                "name": "Noble Watts",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 67,
                "name": "Rosie Bell",
                "age": 33,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 73,
                "name": "Mamie Peterson",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 62,
                "name": "Judith Cannon",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 67,
                "name": "Melinda Austin",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 65,
                "name": "Tara Brooks",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 68,
                "name": "Grace Cross",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 93,
                "name": "Lauren Duncan",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 89,
                "name": "Ola Duffy",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Dollie Rosales",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "Tottenham Hotspur",
        "teamIndex": 16,
        "_id": "56e4d7a313a8301e175bf77d",
        "cash": "40.7M",
        "latitude": 27.800257,
        "longitude": 145.954056,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 85,
                "name": "Hugo Lloris",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "Michael Vorm",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 63,
                "name": "Luke McGee",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 83,
                "name": "Jan Vertonghen",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 82,
                "name": "Tobey Alderweireld",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Kieran Trippier",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 78,
                "name": "Eric Dier",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Kyle Walker",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 76,
                "name": "Danny Rose",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 75,
                "name": "Federico Fazio",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 85,
                "name": "Christian Eriksen",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Erik Lamela",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "Dele Alli",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Min Heung Son",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Nacer Chadli",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 76,
                "name": "Andros Townsend",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 75,
                "name": "Nabil Bentaleb",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 79,
                "name": "Moussa Dembele",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 72,
                "name": "Tom Carroll",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 85,
                "name": "Harry Kane",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 78,
                "name": "Emannuel Adebayor",
                "age": 33,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 69,
                "name": "Clinton N'Jie",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "Watford FC",
        "teamIndex": 17,
        "_id": "56e4d7a3cb0857ba51eb5f1f",
        "cash": "13.9M",
        "latitude": 55.83552,
        "longitude": -53.044033,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 86,
                "name": "Kelley Herrera",
                "age": 18,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 82,
                "name": "Patton Kline",
                "age": 30,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 85,
                "name": "Norman Sherman",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "Chavez Pate",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 66,
                "name": "Byers Woodward",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 94,
                "name": "Jennings Rollins",
                "age": 34,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 74,
                "name": "Tracy Clarke",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 66,
                "name": "Rosa Drake",
                "age": 35,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 64,
                "name": "Cooley Rivera",
                "age": 34,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 74,
                "name": "Letha Fleming",
                "age": 34,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 99,
                "name": "Melisa Mccormick",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 62,
                "name": "Robert Francis",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 70,
                "name": "Maddox Petersen",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 82,
                "name": "Simpson Bass",
                "age": 33,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 73,
                "name": "Sophia Love",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 72,
                "name": "Watson Ingram",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 69,
                "name": "Susana Jennings",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Mccormick Potts",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 90,
                "name": "Jodie Weeks",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 99,
                "name": "Krystal Thompson",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 67,
                "name": "Hurst Boyd",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "West Bromwich Albion",
        "teamIndex": 18,
        "_id": "56e4d7a39a74e6437505af69",
        "cash": "15.9M",
        "latitude": -55.974274,
        "longitude": 46.507604,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 66,
                "name": "Angelina Mitchell",
                "age": 18,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 92,
                "name": "Rojas Mcintyre",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 70,
                "name": "Ladonna Hopkins",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 94,
                "name": "Pate Stewart",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 84,
                "name": "Eva Bates",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 81,
                "name": "Witt Morin",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 83,
                "name": "Ward Mckenzie",
                "age": 20,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 93,
                "name": "Guthrie Lowe",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 60,
                "name": "Wanda Downs",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 90,
                "name": "Janice Calderon",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 92,
                "name": "Sharon Rodriquez",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 76,
                "name": "William Becker",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 80,
                "name": "Alfreda Ramsey",
                "age": 22,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 91,
                "name": "Stuart Horn",
                "age": 33,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 78,
                "name": "Hays Tillman",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 76,
                "name": "Spears Cochran",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 94,
                "name": "Madeline Perez",
                "age": 34,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 64,
                "name": "Shaw Alvarado",
                "age": 18,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 72,
                "name": "Hicks Ferrell",
                "age": 33,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      },
      {
        "teamName": "West Ham United",
        "teamIndex": 19,
        "_id": "56e4d7a3b610c41a05e495aa",
        "cash": "20.2M",
        "latitude": 57.127224,
        "longitude": 135.912389,
        "logo": "",
        "league": [
          {
            "p": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "f": 0,
            "a": 0,
            "gd": 0,
            "pt": 0
          }
        ],
        "ratings": [
          {
            "overall": 0,
            "gk": 0,
            "def": 0,
            "mid": 0,
            "att": 0
          }
        ],
        "squad": [
          {
            "gk": [
              {
                "rating": 66,
                "name": "Maryann Wong",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 82,
                "name": "Blevins Guy",
                "age": 30,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 88,
                "name": "Hogan Byers",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "def": [
              {
                "rating": 64,
                "name": "Dunn Callahan",
                "age": 31,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 65,
                "name": "Bauer Hopper",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 86,
                "name": "Elsie Beasley",
                "age": 32,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 68,
                "name": "Hinton Daniels",
                "age": 28,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 71,
                "name": "Fran Curtis",
                "age": 26,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 84,
                "name": "Mandy Mcleod",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 88,
                "name": "Vera Kaufman",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 75,
                "name": "Savage James",
                "age": 33,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "mid": [
              {
                "rating": 74,
                "name": "Minerva Burnett",
                "age": 18,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 93,
                "name": "Mccray Richmond",
                "age": 19,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 99,
                "name": "Patty Gallagher",
                "age": 18,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 63,
                "name": "Theresa Golden",
                "age": 24,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 97,
                "name": "Martinez Brock",
                "age": 30,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 91,
                "name": "Warner Martin",
                "age": 25,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 97,
                "name": "Riggs Daugherty",
                "age": 21,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          },
          {
            "att": [
              {
                "rating": 68,
                "name": "Pearlie Simmons",
                "age": 23,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 65,
                "name": "Taylor Washington",
                "age": 35,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 66,
                "name": "Iris Mclaughlin",
                "age": 27,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              },
              {
                "rating": 85,
                "name": "Kennedy Rowe",
                "age": 29,
                "gs": 0,
                "g": 0,
                "a": 0,
                "r": []
              }
            ]
          }
        ]
      }
    ];

    this.returnTeam = returnTeam;

    function returnTeam() {
      return teams;
    }
  }

})();