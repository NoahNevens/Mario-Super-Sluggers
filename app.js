let data = [
    {
        name: "Mario",
        pitching: 6,
        batting: 7,
        fielding: 6,
        running: 7, 
        toggle: false,
        chemistry: ["Yoshi", "Luigi", "Peach", "Blue Pianta", "Red Pianta", "Yellow Pianta", "Daisy", "Blue Noki", "Red Noki", "Green Noki", "Yoshi", "Red Yoshi", "Blue Yoshi", "Pink Yoshi", "L.B. Yoshi", "Yellow Yoshi"]
    },
    {
        name: "Luigi",
        pitching: 6,
        batting: 6,
        fielding: 7,
        running: 7,
        toggle: false,
        chemistry: ["Mario", "Daisy"]
    },
    {
        name: "Peach",
        pitching: 9,
        batting: 4,
        fielding: 8,
        running: 5,
        toggle: false,
        chemistry: ["Daisy", "Toadsworth", "Toad", "Blue Toad", "Yellow Toad", "Green Toad", "Purple Toad", "Toadette", "Mario"]
    },
    {
        name: "Daisy",
        pitching: 7,
        batting: 6,
        fielding: 8,
        running: 5,
        toggle: false,
        chemistry: ["Mario", "Luigi", "Peach", "Birdo"]
    },
    {
        name: "Yoshi",
        pitching: 4,
        batting: 4,
        fielding: 6,
        running: 9,
        toggle: false,
        chemistry: ["Mario", "Baby Daisy", "Baby Peach", "Baby Mario", "Baby Luigi", "Baby DK", "Birdo"]
    },
    {
        name: "Birdo",
        pitching: 4,
        batting: 8,
        fielding: 7,
        running: 5,
        toggle: false,
        chemistry: ["Toadette", "Daisy", "Yoshi", "Red Yoshi", "Blue Yoshi", "Pink Yoshi", "L.B. Yoshi", "Yellow Yoshi", "Shy Guy", "B. Shy Guy", "Y. Shy Guy", "Gr. Shy Guy", "Gray Shy Guy", "Petey Piranha"]
    },
    {
        name: "Wario",
        pitching: 5,
        batting: 8,
        fielding: 3,
        running: 4,
        toggle: false,
        chemistry: ["Waluigi"]
    },
    {
        name: "Waluigi",
        pitching: 8,
        batting: 4,
        fielding: 8,
        running: 5,
        toggle: false,
        chemistry: ["Wario"]
    },
    {
        name: "Donkey Kong",
        pitching: 6,
        batting: 9,
        fielding: 3,
        running: 2,
        toggle: false,
        chemistry: ["Diddy Kong", "Tiny Kong", "Funky Kong", "Dixie Kong"]
    },
    {
        name: "Diddy Kong",
        pitching: 5,
        batting: 4,
        fielding: 8,
        running: 6,
        toggle: false,
        chemistry: ["Donkey Kong", "Tiny Kong", "Funky Kong", "Dixie Kong"]
    },
    {
        name: "Bowser",
        pitching: 5,
        batting: 10,
        fielding: 3,
        running: 3,
        toggle: false,
        chemistry: ["Dry Bones", "Green Koopa", "R. Paratroopa", "Hammer Bro", "Bowser Jr."]
    },
    {
        name: "Bowser Jr.",
        pitching: 5,
        batting: 7,
        fielding: 4,
        running: 7,
        toggle: false,
        chemistry: ["Green Koopa", "Hammer Bro", "Bowser", "Magikoopa", "R. Magikoopa", "Gr. Magikoopa", "Y. Magikoopa"]
    },
    {
        name: "Baby Mario",
        pitching: 5,
        batting: 3,
        fielding: 4,
        running: 8,
        toggle: false,
        chemistry: ["Baby Peach", "Baby Daisy", "Yoshi", "Red Yoshi", "Blue Yoshi", "Pink Yoshi", "L.B. Yoshi", "Yellow Yoshi", "Baby Luigi", "Baby DK"]
    },
    {
        name: "Baby Luigi",
        pitching: 5,
        batting: 2,
        fielding: 5,
        running: 8,
        toggle: false,
        chemistry: ["Baby Peach", "Baby Daisy", "Yoshi", "Red Yoshi", "Blue Yoshi", "Pink Yoshi", "L.B. Yoshi", "Yellow Yoshi", "Baby Mario", "Baby DK"]
    },
    {
        name: "Baby Peach",
        pitching: 8,
        batting: 2,
        fielding: 5,
        running: 6,
        toggle: false,
        chemistry: ["Baby Mario", "Baby Daisy", "Yoshi", "Red Yoshi", "Toad", "Blue Yoshi", "Pink Yoshi", "L.B. Yoshi", "Yellow Yoshi", "Baby Luigi", "Baby DK", "Toadette", "Toadsworth"]
    },
    {
        name: "Baby Daisy",
        pitching: 6,
        batting: 4,
        fielding: 5,
        running: 6,
        toggle: false,
        chemistry: ["Baby Peach", "Baby Mario", "Yoshi", "Red Yoshi", "Blue Yoshi", "Pink Yoshi", "L.B. Yoshi", "Yellow Yoshi", "Baby Luigi", "Baby DK"]
    },
    {
        name: "Baby DK",
        pitching: 3,
        batting: 6,
        fielding: 8,
        running: 4,
        toggle: false,
        chemistry: ["Baby Peach", "Baby Daisy", "Yoshi", "Red Yoshi", "Blue Yoshi", "Pink Yoshi", "L.B. Yoshi", "Yellow Yoshi", "Baby Luigi", "Baby Mario", "Dixie Kong", "Tiny Kong", "Funky Kong"]
    },
    {
        name: "Toad",
        pitching: 5,
        batting: 5,
        fielding: 3,
        running: 7,
        toggle: false,
        chemistry: ["Toadsworth", "Peach", "Blue Pianta", "Red Pianta", "Yellow Pianta", "Toadette", "Baby Peach"]
    },
    {
        name: "Toadette",
        pitching: 5,
        batting: 3,
        fielding: 4,
        running: 8,
        toggle: false,
        chemistry: ["Toad", "Blue Toad", "Green Toad", "Yellow Toad", "Purple Toad", "Toadsworth", "Peach", "Blue Noki", "Red Noki", "Green Noki", "Birdo", "Baby Peach"]
    },
    {
        name: "Toadsworth",
        pitching: 7,
        batting: 3,
        fielding: 7,
        running: 3,
        toggle: false,
        chemistry: ["Toad", "Blue Toad", "Green Toad", "Yellow Toad", "Purple Toad", "Toadette", "Peach", "Blue Pianta", "Red Pianta", "Yellow Pianta", "Baby Peach"]
    },
    {
        name: "Blue Pianta",
        pitching: 5,
        batting: 8,
        fielding: 4,
        running: 2,
        toggle: false,
        chemistry: ["Toad", "Blue Toad", "Green Toad", "Yellow Toad", "Purple Toad", "Toadsworth", "Blue Noki", "Red Noki", "Green Noki", "Mario"]
    },
    {
        name: "Blue Noki",
        pitching: 5,
        batting: 4,
        fielding: 4,
        running: 7,
        toggle: false,
        chemistry: ["Blue Pianta", "Red Pianta", "Yellow Pianta", "Mario", "Toadette"]
    },
    {
        name: "Dixie Kong",
        pitching: 3,
        batting: 3,
        fielding: 8,
        running: 7,
        toggle: false,
        chemistry: ["Baby DK", "Tiny Kong", "Funky Kong", "Diddy Kong", "Donkey Kong"]
    },
    {
        name: "Funky Kong",
        pitching: 4,
        batting: 8,
        fielding: 6,
        running: 3,
        toggle: false,
        chemistry: ["Baby DK", "Tiny Kong", "Dixie Kong", "Diddy Kong", "Donkey Kong"]
    },
    {
        name: "Tiny Kong",
        pitching: 5,
        batting: 5,
        fielding: 7,
        running: 5,
        toggle: false,
        chemistry: ["Baby DK", "Dixie Kong", "Funky Kong", "Diddy Kong", "Donkey Kong"]
    },
    {
        name: "King K. Rool",
        pitching: 6,
        batting: 10,
        fielding: 2,
        running: 1,
        toggle: false,
        chemistry: ["King Boo", "Kritter", "Blue Kritter", "Red Kritter", "Brown Kritter"]
    },
    {
        name: "Kritter",
        pitching: 4,
        batting: 7,
        fielding: 7,
        running: 3,
        toggle: false,
        chemistry: ["King K. Rool"]
    },
    {
        name: "Goomba",
        pitching: 6,
        batting: 3,
        fielding: 6,
        running: 4,
        toggle: false,
        chemistry: ["Monty Mole", "Paragoomba", "Green Koopa"]
    },
    {
        name: "Paragoomba",
        pitching: 6,
        batting: 3,
        fielding: 7,
        running: 5,
        toggle: false,
        chemistry: ["Goomba", "Monty Mole", "R. Paratroopa"]
    },
    {
        name: "Green Koopa",
        pitching: 3,
        batting: 6,
        fielding: 4,
        running: 6,
        toggle: false,
        chemistry: ["Goomba", "Dry Bones", "R. Paratroopa", "Bowser Jr.", "Bowser"]
    },
    {
        name: "R. Paratroopa",
        pitching: 4,
        batting: 4,
        fielding: 7,
        running: 5,
        toggle: false,
        chemistry: ["Paragoomba", "Green Koopa", "Bowser"]
    },
    {
        name: "Magikoopa",
        pitching: 8,
        batting: 2,
        fielding: 8,
        running: 2,
        toggle: false,
        chemistry: ["Boo", "Hammer Bro", "Bowser Jr."]
    },
    {
        name: "Hammer Bro",
        pitching: 4,
        batting: 7,
        fielding: 6,
        running: 3,
        toggle: false,
        chemistry: ["Bowser", "Bowser Jr.", "Magikoopa", "R. Magikoopa", "Gr. Magikoopa", "Y. Magikoopa"]
    },
    {
        name: "Dry Bones",
        pitching: 4,
        batting: 7,
        fielding: 4,
        running: 5,
        toggle: false,
        chemistry: ["Bowser", "Green Koopa"]
    },
    {
        name: "Boo",
        pitching: 9,
        batting: 3,
        fielding: 3,
        running: 5,
        toggle: false,
        chemistry: ["Shy Guy", "B. Shy Guy", "Y. Shy Guy", "Gr. Shy Guy", "Gray Shy Guy", "Blooper", "King Boo", "Magikoopa", "R. Magikoopa", "Gr. Magikoopa", "Y. Magikoopa"]
    },
    {
        name: "King Boo",
        pitching: 7,
        batting: 7,
        fielding: 3,
        running: 4,
        toggle: false,
        chemistry: ["Wiggler", "King K. Rool", "Boo", "Petey Piranha"]
    },
    {
        name: "Petey Piranha",
        pitching: 4,
        batting: 10,
        fielding: 5,
        running: 2,
        toggle: false,
        chemistry: ["Birdo", "Wiggler", "Blooper", "King Boo"]
    },
    {
        name: "Wiggler",
        pitching: 3,
        batting: 7,
        fielding: 4,
        running: 7,
        toggle: false,
        chemistry: ["Petey Piranha", "King Boo", "Blooper"]
    },
    {
        name: "Shy Guy",
        pitching: 4,
        batting: 5,
        fielding: 7,
        running: 4,
        toggle: false,
        chemistry: ["Birdo", "Monty Mole", "Boo"]
    },
    {
        name: "Monty Mole",
        pitching: 4,
        batting: 4,
        fielding: 5,
        running: 7,
        toggle: false,
        chemistry: ["Shy Guy", "B. Shy Guy", "Y. Shy Guy", "Gr. Shy Guy", "Gray Shy Guy", "Goomba", "Paragoomba"]
    },
    {
        name: "Blooper",
        pitching: 6,
        batting: 4,
        fielding: 5,
        running: 6,
        toggle: false,
        chemistry: ["Wiggler", "Petey Piranha", "Boo"]
    },
    {
        name: "Red Yoshi",
        pitching: 3,
        batting: 4,
        fielding: 4,
        running: 8,
        toggle: false,
        chemistry: ["Mario", "Daisy", "Baby Daisy", "Baby Peach", "Baby Mario", "Baby Luigi", "Baby DK", "Birdo"]
    },
    {
        name: "Blue Yoshi",
        pitching: 4,
        batting: 2,
        fielding: 6,
        running: 8,
        toggle: false,
        chemistry: ["Mario", "Daisy", "Baby Daisy", "Baby Peach", "Baby Mario", "Baby Luigi", "Baby DK", "Birdo"]
    },
    {
        name: "Yellow Yoshi",
        pitching: 3,
        batting: 4,
        fielding: 6,
        running: 7,
        toggle: false,
        chemistry: ["Mario", "Daisy", "Baby Daisy", "Baby Peach", "Baby Mario", "Baby Luigi", "Baby DK", "Birdo"]
    },
    {
        name: "L.B. Yoshi",
        pitching: 3,
        batting: 3,
        fielding: 6,
        running: 8,
        toggle: false,
        chemistry: ["Mario", "Daisy", "Baby Daisy", "Baby Peach", "Baby Mario", "Baby Luigi", "Baby DK", "Birdo"]
    },
    {
        name: "Pink Yoshi",
        pitching: 2,
        batting: 3,
        fielding: 6,
        running: 9,
        toggle: false,
        chemistry: ["Mario", "Daisy", "Baby Daisy", "Baby Peach", "Baby Mario", "Baby Luigi", "Baby DK", "Birdo"]
    },
    {
        name: "Blue Toad",
        pitching: 4,
        batting: 6,
        fielding: 3,
        running: 7,
        toggle: false,
        chemistry: ["Toadsworth", "Peach", "Blue Pianta", "Red Pianta", "Yellow Pianta", "Toadette", "Baby Peach"]
    },
    {
        name: "Yellow Toad",
        pitching: 3,
        batting: 6,
        fielding: 4,
        running: 7,
        toggle: false,
        chemistry: ["Toadsworth", "Peach", "Blue Pianta", "Red Pianta", "Yellow Pianta", "Toadette", "Baby Peach"]
    },
    {
        name: "Green Toad",
        pitching: 4,
        batting: 5,
        fielding: 4,
        running: 7,
        toggle: false,
        chemistry: ["Toadsworth", "Peach", "Blue Pianta", "Red Pianta", "Yellow Pianta", "Toadette", "Baby Peach"]
    },
    {
        name: "Purple Toad",
        pitching: 5,
        batting: 6,
        fielding: 2,
        running: 7,
        toggle: false,
        chemistry: ["Toadsworth", "Peach", "Blue Pianta", "Red Pianta", "Yellow Pianta", "Toadette", "Baby Peach"]
    },
    {
        name: "Red Pianta",
        pitching: 4,
        batting: 8,
        fielding: 4,
        running: 2,
        toggle: false,
        chemistry: ["Toad", "Blue Toad", "Green Toad", "Yellow Toad", "Purple Toad", "Toadsworth", "Blue Noki", "Red Noki", "Green Noki", "Mario"]  
    },
    {
        name: "Yellow Pianta",
        pitching: 4,
        batting: 8,
        fielding: 4,
        running: 2,
        toggle: false,
        chemistry: ["Toad", "Blue Toad", "Green Toad", "Yellow Toad", "Purple Toad", "Toadsworth", "Blue Noki", "Red Noki", "Green Noki", "Mario"]
    },
    {
        name: "Red Noki",
        pitching: 4,
        batting: 4,
        fielding: 5,
        running: 7,
        toggle: false,
        chemistry: ["Blue Pianta", "Red Pianta", "Yellow Pianta", "Mario", "Toadette"]
    },
    {
        name: "Green Noki",
        pitching: 4,
        batting: 5,
        fielding: 4,
        running: 7,
        toggle: false,
        chemistry: ["Blue Pianta", "Red Pianta", "Yellow Pianta", "Mario", "Toadette"] 
    },
    {
        name: "Blue Kritter",
        pitching: 5,
        batting: 6,
        fielding: 7,
        running: 3,
        toggle: false,
        chemistry: ["King K. Rool"] 
    },
    {
        name: "Red Kritter",
        pitching: 3,
        batting: 8,
        fielding: 7,
        running: 3,
        toggle: false,
        chemistry: ["King K. Rool"]  
    },
    {
        name: "Brown Kritter",
        pitching: 3,
        batting: 7,
        fielding: 7,
        running: 4,
        toggle: false,
        chemistry: ["King K. Rool"] 
    },
    {
        name: "Red Koopa",
        pitching: 4,
        batting: 6,
        fielding: 3,
        running: 6,
        toggle: false,
        chemistry: [] 
    },
    {
        name: "G. Paratroopa",
        pitching: 3,
        batting: 6,
        fielding: 7,
        running: 6,
        toggle: false,
        chemistry: []  
    },
    {
        name: "R. Magikoopa",
        pitching: 8,
        batting: 3,
        fielding: 8,
        running: 1,
        toggle: false,
        chemistry: ["Boo", "Hammer Bro", "Bowser Jr."]
    },
    {
        name: "Gr. Magikoopa",
        pitching: 7,
        batting: 2,
        fielding: 8,
        running: 2,
        toggle: false,
        chemistry: ["Boo", "Hammer Bro", "Bowser Jr."]  
    },
    {
        name: "Y. Magikoopa",
        pitching: 7,
        batting: 3,
        fielding: 8,
        running: 2,
        toggle: false,
        chemistry: ["Boo", "Hammer Bro", "Bowser Jr."]  
    },
    {
        name: "Fire Bro",
        pitching: 3,
        batting: 8,
        fielding: 6,
        running: 3,
        toggle: false,
        chemistry: []  
    },
    {
        name: "Boom. Bro",
        pitching: 5,
        batting: 7,
        fielding: 5,
        running: 3,
        toggle: false,
        chemistry: [] 
    },
    {
        name: "Gr. Dry Bones",
        pitching: 3,
        batting: 7,
        fielding: 4,
        running: 6,
        toggle: false,
        chemistry: []  
    },
    {
        name: "Dark Bones",
        pitching: 5,
        batting: 7,
        fielding: 4,
        running: 5,
        toggle: false,
        chemistry: []
    },
    {
        name: "B. Dry Bones",
        pitching: 3,
        batting: 7,
        fielding: 5,
        running: 5,
        toggle: false,
        chemistry: []
    },
    {
        name: "B. Shy Guy",
        pitching: 5,
        batting: 4,
        fielding: 7,
        running: 4,
        toggle: false,
        chemistry: ["Birdo", "Monty Mole", "Boo"]
    },
    {
        name: "Y. Shy Guy",
        pitching: 4,
        batting: 4,
        fielding: 7,
        running: 5,
        toggle: false,
        chemistry: ["Birdo", "Monty Mole", "Boo"]  
    },
    {
        name: "Gr. Shy Guy",
        pitching: 3,
        batting: 5,
        fielding: 7,
        running: 5,
        toggle: false,
        chemistry: ["Birdo", "Monty Mole", "Boo"]  
    },
    {
        name: "Gray Shy Guy",
        pitching: 4,
        batting: 4,
        fielding: 8,
        running: 4,
        toggle: false,
        chemistry: ["Birdo", "Monty Mole", "Boo"]
    },
    {
        name: "Mii",
        pitching: 6,
        batting: 6,
        fielding: 6,
        running: 6,
        toggle: false,
        chemistry: []
    }
]

var currentTeam = 0;
var playerCount = [0, 0, 0, 0, 0, 0, 0, 0];
var pitchingTotal = [0, 0, 0, 0, 0, 0, 0, 0];
var battingTotal = [0, 0, 0, 0, 0, 0, 0, 0];
var fieldingTotal = [0, 0, 0, 0, 0, 0, 0, 0];
var runningTotal = [0, 0, 0, 0, 0, 0, 0, 0];
var totalTotal = [0, 0, 0, 0, 0, 0, 0, 0];
var lists = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight"];
var totals = ["#total1", "#total2", "#total3", "#total4", "#total5", "#total6", "#total7", "#total8"];

var chemScore = [0, 0, 0, 0, 0, 0, 0, 0];
var teamPlayers = [[], [], [], [], [], [], [], []];

$("#team1Button").on("click", function(event) {
    event.preventDefault();
    $(".teamDrafts").hide();
    $("#team1Draft").show();
    currentTeam = 1;
})

$("#team2Button").on("click", function(event) {
    event.preventDefault();
    $(".teamDrafts").hide();
    $("#team2Draft").show();
    currentTeam = 2;
})

$("#team3Button").on("click", function(event) {
    event.preventDefault();
    $(".teamDrafts").hide();
    $("#team3Draft").show();
    currentTeam = 3;
})

$("#team4Button").on("click", function(event) {
    event.preventDefault();
    $(".teamDrafts").hide();
    $("#team4Draft").show();
    currentTeam = 4;
})

$("#team5Button").on("click", function(event) {
    event.preventDefault();
    $(".teamDrafts").hide();
    $("#team5Draft").show();
    currentTeam = 5;
})

$("#team6Button").on("click", function(event) {
    event.preventDefault();
    $(".teamDrafts").hide();
    $("#team6Draft").show();
    currentTeam = 6;
})

$("#team7Button").on("click", function(event) {
    event.preventDefault();  
    $(".teamDrafts").hide();
    $("#team7Draft").show();
    currentTeam = 7;
})

$("#team8Button").on("click", function(event) {
    event.preventDefault();
    $(".teamDrafts").hide();
    $("#team8Draft").show();
    currentTeam = 8;
})

$(".player").on("click", function(event) {
    event.preventDefault();
    var index = $(".player").index(this);
    if (data[index].toggle === false) {
        $(lists[currentTeam - 1]).append(data[index].name + "<br>");
        teamPlayers[currentTeam - 1].push(index);
        playerCount[currentTeam - 1]++;
        $(this).css("opacity", "0.25");
        $(totals[currentTeam - 1]).empty();
        pitchingTotal[currentTeam - 1] = pitchingTotal[currentTeam - 1] + data[index].pitching;
        battingTotal[currentTeam - 1] = battingTotal[currentTeam - 1] + data[index].batting;
        fieldingTotal[currentTeam - 1] = fieldingTotal[currentTeam - 1] + data[index].fielding;
        runningTotal[currentTeam - 1] = runningTotal[currentTeam - 1] + data[index].running;
        chemScore[currentTeam - 1] = chemCalc(teamPlayers[currentTeam - 1]);
        totalTotal[currentTeam - 1] = totalTotal[currentTeam - 1] + data[index].pitching + data[index].batting + data[index].fielding + data[index].running;
        $(totals[currentTeam - 1]).append("Players: " + playerCount[currentTeam - 1] + "<br>" + "Pitching: " + pitchingTotal[currentTeam - 1] + "<br>" + "Batting: " + battingTotal[currentTeam - 1] + "<br>" + "Fielding: " + fieldingTotal[currentTeam - 1] + "<br>" + "Running: " + runningTotal[currentTeam - 1] + "<br>" + "Composite: " + totalTotal[currentTeam - 1] + "<br>" + "Chemistry Score: " + chemScore[currentTeam - 1]);
        data[index].toggle = true;
    } 
})

var chemCalc = function(team) {
    var final = 0;
    for (var i = 0; i < team.length; i++) {
        for (var j = 0; j < team.length; j++) {
            if (data[team[i]].chemistry.includes(data[team[j]].name)) {
                final++;
            }
        }
    }
    return final / 2;
}
