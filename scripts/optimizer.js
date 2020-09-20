var bizzare = {"str": [1, 2, 2, 3, 5, 7], "health": [1, 1, 1, 1, 1, 2], "crit_dmg": [-1, -2, -2, -3, -5, -7], "intel": [6, 8, 10, 14, 20, 30]};
var ominous = {"str": [1, 1, 1, 2, 3, 4], "defence": [1, 1, 1, 2, 3, 4], "health": [1, 1, 2, 3, 4, 5], "crit_dmg": [1, 1, 1, 1, 1, 1], "intel": [0, 1, 2, 3, 4, 5]};
var simple = {"str": [1, 1, 1, 1, 1, 1], "defence": [1, 1, 1, 1, 1, 1], "speed": [1, 1, 1, 1, 1, 1], "health": [1, 1, 1, 1, 1, 1], "crit_dmg": [1, 1, 1, 1, 1, 1], "intel": [1, 1, 1, 1, 1, 1]};
var strange = {"str": [2, 1, -1, 3, 0, 4], "defence": [0, 3, 2, -1, 1, 1], "speed": [1, 0, 1, 0, 3, 3], "health": [0, 2, 1, 7, -1, 0], "crit_dmg": [1, 2, 0, 1, 7, 9], "intel": [1, -1, 2, 0, 8, 11], "attack_speed": [-1, 2, 0, 4, 0, 5]};
var pleasant = {"defence": [4, 5, 7, 10, 15, 20]};
var shiny = {"health": [4, 5, 7, 10, 15, 20], "intel": [1, 2, 2, 3, 5, 7]};
var vivid = {"speed": [1, 2, 3, 4, 5, 6], "health": [1, 2, 3, 4, 5, 6]};
var pretty = {"speed": [0, 0, 0, 1, 1, 2], "health": [1, 1, 2, 2, 3, 4], "intel": [3, 4, 6, 9, 13, 18], "attack_speed": [0, 0, 1, 1, 1, 1]};
var itchy = {"str": [1, 1, 1, 2, 3, 4], "crit_dmg": [3, 4, 5, 7, 10, 15], "attack_speed": [0, 0, 1, 1, 1, 1]};
var keen = {"defence": [1, 2, 3, 4, 5, 7], "health": [2, 3, 4, 5, 6, 8], "intel": [1, 2, 3, 4, 5, 7]};
var unpleasant = {"crit_chance": [1, 1, 1, 2, 2, 3]};
var superior = {"str": [2, 3, 4, 5, 7, 10], "crit_dmg": [2, 2, 2, 3, 3, 5]};
var forceful = {"str": [4, 5, 7, 10, 15, 20]};
var hurtful = {"crit_dmg": [4, 5, 7, 10, 15, 20]};
var strong = {"str": [1, 2, 3, 5, 8, 12], "defence": [0, 0, 1, 2, 3, 4], "crit_dmg": [1, 2, 3, 5, 8, 12]};
var demonic = {"str": [1, 2, 2, 3, 5, 7], "intel": [5, 7, 9, 12, 17, 24]};
var zealous = {"str": [1, 2, 2, 3, 5, 7], "speed": [0, 0, 1, 1, 1, 2], "crit_dmg": [1, 2, 2, 3, 5, 7], "intel": [1, 2, 3, 5, 7, 10]};
var godly = {"str": [1, 2, 3, 5, 7, 10], "crit_dmg": [2, 2, 3, 4, 6, 8], "intel": [1, 1, 1, 2, 4, 6]};
var silky = {"crit_dmg": [5, 6, 8, 10, 15, 20]};
var bloody = {"attack_speed": [1, 1, 1, 2, 2, 2], "speed": [1, 1, 1, 1, 1, 1], "str": [1, 1, 1, 2, 3, 4], "crit_dmg": [3, 4, 5, 6, 9, 14]};
var shaded = {"str": [2, 3, 4, 5, 6, 8], "crit_dmg": [3, 4, 5, 6, 9, 14], "crit_chance": [0, 0, 0, 0, 1, 1]};

var boxes = ["bizzare", "ominous", "simple", "strange", "pleasant", "shiny", "vivid", "pretty", "itchy", "keen", "unpleasant", "superior", "forceful", "hurtful", "strong", "demonic", "zealous", "godly", "bloody", "silky", "shaded"];  // different reforges that are avalible

var rarity_index = {"mythic": 5, "legendary": 4, "epic": 3, "rare": 2, "uncommon": 1, "common": 0};
var stat_convert = {"str": "Strength", "health": "Health", "crit_dmg": "Crit Damage", "crit_chance": "Crit Chance", "defence": "Defence", "attack_speed": "Attack Speed", "intel": "Intelligence", "speed": "Walk Speed"};

var rangeOfTalismans = {};
// start of adaption of w3schools Drag and Drop API
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if (ev.target.className.includes("container")) {
    ev.target.appendChild(document.getElementById(data));
  }
  else if (ev.target.id == "not-reforged") {
    ev.target.appendChild(document.getElementById(data));
  }
  else {
    ev.target.parentElement.appendChild(document.getElementById(data));
  }

  setTimeout(function(){ countAddedStats();}, 50);
}
// end of w3schools copied code

function countAddedStats() {  // calculates the stats added by each talisman in each box
  var talisman_stats = [0, 0, 0, 0, 0, 0, 0, 0];
  var stat_order = ["str", "defence", "speed", "health", "crit_chance", "crit_dmg", "intel", "attack_speed"]; // order that talisman_stats is in

  for (type = 0; type < boxes.length; type++) {  // loop to run through every reforge type
    reforge_name = boxes[type];

    var talismans_in_box = $(`.${reforge_name} img`);  // getting all images in the selected box
    for (talisman_index = 0; talisman_index < talismans_in_box.length; talisman_index++) {  // loop to run for every talisman in the selected box
      var reforge_type = talismans_in_box[talisman_index].className; // gets reforge of the item

      var index = rarity_index[reforge_type.split(" ")[0]]; // the index that the reforge stat is at

      for (stat = 0; stat < 8; stat++) {
        if (eval(reforge_name)[stat_order[stat]] != undefined) {
          talisman_stats[stat] += eval(reforge_name)[stat_order[stat]][index];  // adds the points supplied by the reforge to the specific stat
        }
      }
    }
  }

  // displays the stats to the user
  document.getElementById("strength").innerHTML = "Strength: " + talisman_stats[0];
  document.getElementById("crit-dmg").innerHTML = "Crit Damage: " + talisman_stats[5];
  document.getElementById("crit-chance").innerHTML = "Crit Chance: " + talisman_stats[4];
  document.getElementById("attack-speed").innerHTML = "Attack Speed: " + talisman_stats[7];

  document.getElementById("health").innerHTML = "Health: " + talisman_stats[3];
  document.getElementById("defence").innerHTML = "Defence: " + talisman_stats[1];

  document.getElementById("intel").innerHTML = "Intelligence: " + talisman_stats[6];
  document.getElementById("walk-speed").innerHTML = "Walk Speed: " + talisman_stats[2];
}

function searchPlayer() {  // searches for a specific player supplied by the user
  var playerName = document.getElementById("playerName").value;  // gets the user entered name

  var playerProfileRequest = new XMLHttpRequest();  // create request to API
  playerProfileRequest.open('GET', 'https://api.slothpixel.me/api/skyblock/profiles/' + playerName, true);
  playerProfileRequest.onload = function() {
    var data = JSON.parse(this.response);  // get data back from query
    if (data["error"] != null) {
      // entered name doesn't have a skyblock profile
      alert(playerName + " does not have a skyblock profile\nPlease check that you have inputted it correctly");
    }
    else {
      // continue processing data
      var profileID = Object.keys(data); // gets all the profile ids

      var selectBox = document.getElementById("profile-select");
      for (option = selectBox.length - 1; option >= 1; option--) {
        selectBox.remove(option); // remove existing options besides the blank one
      }
      for (i = 0; i < profileID.length; i++) {
        let newOption = new Option(data[profileID[i]]['cute_name'], playerName + ' ' + profileID[i]);
        selectBox.add(newOption, undefined);  // adds option to the drop down
      }

      document.getElementById("profile-select").disabled = false;
      document.getElementById("profile-select").style.background = "green";
      setTimeout(function() {
        document.getElementById("profile-select").style.background = "white";
      }, 1000);
    }
  }
  playerProfileRequest.send();  // run request
}

function userEntryChange() {
  document.getElementById("profile-select").disabled = true;
  document.getElementById("profile-select").selectedIndex = 0;
}

function displayTalismans() {  // displays talismans to the user in each respective box
  var items = document.getElementById("profile-select").value.split(" ");
  if (items.length == 2) {  // tests if the option selected isn't blank
    var request = new XMLHttpRequest();  // create API Request
    request.open('GET', 'https://api.slothpixel.me/api/skyblock/profile/' + items[0] + '/' + items[1], true);

    request.onload = function () {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response);
      var members = Object.keys(data['members']);

      // loop to iterate through members to find the user supplied
      for (i = 0; i < members.length; i++) {
        if (data['members'][members[i]]['player']['username'] == items[0]) {
          uuid = data['members'][members[i]]['player']['uuid']; // gets the uuid of the player
          break;
        }
      }

      var talismans = data['members'][uuid]['talisman_bag'];  // gets all the talismans in the users talisman bag
      if (talismans != null) {  // tests if the user's api settings are enabled

        // deleteing all existing images
        var images = document.getElementsByClassName("drag-img");
        var l = images.length;
        for (var i = 0; i < l; i++) {
            images[0].parentNode.removeChild(images[0]);
        }

        var index = 0;
        talismans.forEach(item => {
          try {
            var rarity = item.lore[item.lore.length - 1];  // gets the rarity of talisman

            if (rarity.includes("MYTHIC")) {
              rarity = "mythic";
            }
            else if (rarity.includes("LEGENDARY")) {
              rarity = "legendary";
            }
            else if (rarity.includes("EPIC")) {
              rarity = "epic";
            }
            else if (rarity.includes("RARE")) {
              rarity = "rare";
            }
            else if (rarity.includes("UNCOMMON")) {
              rarity = "uncommon";
            }
            else if (rarity.includes("COMMON")) {
              rarity = "common";
            }

            var current_reforge = "." + item.attributes.modifier; // gets the reforge selected from the API

            var image_id = item.attributes.id.toLowerCase();  // gets the image_id
            createImage(index, rarity, current_reforge, image_id); // create image in the selected reforge box
            index++;
          }
          catch(e) {}
        });
        document.getElementById("auto-gen0").scrollIntoView({alignToTop: true, behavior: 'smooth'});  // scrolls to the first added talisman
        setTimeout(function(){ countAddedStats();}, 50);
      }
      else {
        alert("This profile does not have Inventory Settings Enabled \n" +
        "Go into skyblock menu > Settings > API Settings and turn Inventory On");  // if the user doesn't have inventory enabled
        document.getElementById("profile-select").selectedIndex = 0;
      }
    }
    request.send();
  }
}

function generateAutomatedTalismans() {
  var talismans = [["legendary", "bat_artifact"], ["legendary", "campfire_talisman_21"], ["epic", "candy_artifact"], ["epic", "wedding_ring_7"], ["epic", "experience_artifact"], ["epic", "cheetah_talisman"], ["rare", "wolf_ring"], ["rare", "intimidation_artifact"], ["rare", "day_crystal"], ["rare", "feather_artifact"], ["rare", "frozen_chicken"], ["rare", "haste_ring"], ["rare", "night_crystal"], ["rare", "fish_affinity_talisman"], ["rare", "sea_creature_artifact"], ["rare", "red_claw_ring"], ["rare", "spider_ring"], ["rare", "pigs_foot"], ["rare", "artifact_potion_affinity"], ["uncommon", "lava_talisman"], ["uncommon", "new_year_cake_bag"], ["uncommon", "speed_ring"], ["uncommon", "gravity_talisman"], ["uncommon", "healing_ring"], ["uncommon","wood_talisman"], ["uncommon", "farmer_orb"], ["uncommon", "magnetic_talisman"], ["uncommon", "wolf_paw"], ["uncommon", "zombie_ring"], ["common", "farming_talisman"], ["common", "party_hat_crab"], ["common", "fire_talisman"], ["common", "vaccine_talisman"], ["common", "coin_talisman"], ["common", "potato_talisman"], ["common", "healing_talisman"], ["common", "skeleton_talisman"], ["common", "mine_talisman"], ["rare", "scarf_studies"]]; // list of talismans that are common to have.

  var reforge = ".untouched";  // the box that it should be put into

  for (i = 0; i < talismans.length; i++) {
    var imageClass = talismans[i][0];  // gets the class of the talisman
    var image_id = talismans[i][1];  // gets the id of the image
    createImage(i, imageClass, reforge, image_id);  // creates image
  }
  for (box = 0; box < boxes.length; box++) {
    var stats = Object.keys(eval(boxes[box]));
    var reforgeStatBoosts = "";
    for (stat_index = 0; stat_index < stats.length; stat_index++) {
      var current_stat = stats[stat_index];
      // adds reforge stats for each accessory
      reforgeStatBoosts += stat_convert[stats[stat_index]] + ": <span class='common'>" + eval(boxes[box])[current_stat][0] + "</span> <span class='uncommon'>" + eval(boxes[box])[current_stat][1] + "</span> <span class='rare'>" + eval(boxes[box])[current_stat][2] + "</span> <span class='epic'>" + eval(boxes[box])[current_stat][3] + "</span> <span class='legendary'>" + eval(boxes[box])[current_stat][4] + "</span> <span class='mythic'>" + eval(boxes[box])[current_stat][5] + "</span><br/>";
    }
    document.getElementById(boxes[box] + "-added-stats").innerHTML = reforgeStatBoosts;
  }
}

function createImage(index, imageClass, reforge, image_id) {
  var cute_name = image_id.replace(/_/g, " ");
    var img = $('<img />').attr({
                'id': 'auto-gen' + index,
                'title': cute_name,
                'onerror': "this.onerror=null; this.src='assets/images/talisman_images/image_not_found.png'",
                'src': 'assets/images/talisman_images/' + image_id + '.png',
                'class': imageClass + ' drag-img',
                'ondragstart': 'drag(event)',
                'draggable': 'true'
              }).appendTo(reforge);
    }

function reorganiseReforges() {
  // taken from jfriend00 --> https://stackoverflow.com/a/10186368
  var sort_by_name = function(a, b) {
    return b.children.length - a.children.length;
  }
  var list = $("#reforges > .container").get();
  list.sort(sort_by_name);
  for (var i = 0; i < list.length; i++) {
    list[i].parentNode.appendChild(list[i]);
  }
}
