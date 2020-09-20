var armours = {
'farm_suit': {'name': 'Farm Suit', 'rarity': "Common",'stats_added': {defence: 100, health: 0}, 'description': 'Full Set Bonus: Bonus Speed Increases your ✦\u2009Speed by +20 near Farming Minions or farming islands. <br/> Full Set Bonus: Farmer Aura Regrow an extra crop on farming islands every 3 seconds. <br\>Farming Islands include the Farm, The Barn, and Mushroom Desert.'},
'mushroom_armor': {'name': 'Mushroom Armor', 'rarity': "Common",'stats_added': {defence: 15, health: 55}, 'description': 'Full Set Bonus: Night Affinity Grants the wearer with permanent Night Vision while worn, and during the night, the stats of the armor pieces are tripled.'},
'angler_armor': {'name': 'Angler Armor', 'rarity': "Common",'stats_added': {defence: 100, health: 0}, 'description': 'Full Set Bonus: Depth Champion Take -30% damage from Sea Creatures. Increases their spawn chance by 4%.<br/>Full Set Bonus: Darkness Within Gain 10❤ per Fishing Level.'},
'pumpkin_armor': {'name': 'Pumpkin Armor', 'rarity': "Common",'stats_added': {health: 40, defence: 40}, 'description': 'Full Set Bonus: Pumpkin Buff Reduces all taken damage by +10% and deal +10% damage'},
'cactus_armor': {'name': 'Cactus Armor', 'rarity': "Common",'stats_added': {health: 35, defence: 65}, 'description': 'Full Set Bonus: Deflect Rebound 33.0% of the damage you take back at your enemy.'},
'leaflet_armor': {'name': 'Leaflet Armor', 'rarity': "Common",'stats_added': {health: 100, defence: 0}, 'description': 'Full Set Bonus: Energy of the Forest While in a forest zone, you regain 5.0 ❤\u2009Health every second.'},
'lapis_armor_set': {'name': 'Lapis Armor Set', 'rarity': "Uncommon",'stats_added': {health: 60, defence: 120}, 'description': "Full Set Bonus: Health Increases the wearer's maximum ❤\u2009Health by 60.<br/>Each piece of this armor grants +50% bonus experience when mining ores."},
'miners_outfit': {'name': 'Miners Outfit', 'rarity': "Uncommon",'stats_added': {defence: 100, health: 0}, 'description': 'Full Set Bonus: Haste Grants the wearer with permanent Haste II while worn.'},
'golem_armor': {'name': 'Golem Armor', 'rarity': "Rare",'stats_added': {health: 205, defence: 250}, 'description': 'Full Set Bonus: Absorption Grants the wearer ❤\u2009Absorption 3 for 20 seconds when they kill an enemy. (Equivalent to +60 hp)'},
'miner_armor': {'name': 'Miner Armor', 'rarity': "Rare",'stats_added': {defence: 20, health: 0, max_defence_while_in_mines: 275}, 'description': 'Full Set Bonus: Regeneration Regenerates 5% of your max ❤\u2009Health every second if you have been out of combat for 8 seconds.<br/>Each piece of this armor dramatically increases your defense bonus when inside of a mine.'},
'hardened_diamond_armor': {'name': 'Hardened Diamond Armor', 'rarity': "Rare", 'stats_added': {defence: 330, health: 0}, 'description': '---'},
'fairy_armor': {'name': 'Fairy Armor', 'rarity': "Rare",'stats_added': {health: 4, defence: 4, 'speed': 40, 'intelligence': -4}, 'description': "Full Set Bonus: Fairy's Outfit Gain 1❤ per Fairy Soul found.<br/>Additionally, a sound is played while the player is near a Fairy Soul they haven't discovered yet."},
'farm_armor': {'name': 'Farm Armor', 'rarity': "Rare",'stats_added': {health: 80, defence: 200}, 'description': 'Full Set Bonus: Bonus Speed Increases your ✦\u2009Speed by +25% while worn near Farming Minions or in the Farm, The Barn, and Mushroom Desert.'},
'armor_of_growth': {'name': 'Armor Of Growth', 'rarity': "Rare",'stats_added': {health: 280, defence: 145}, 'description': 'Item Ability: Growth (not full set bonus) Heals you for 1.0% ❤\u2009Health after killing a monster, and also increases the ❤\u2009Health bonus for each piece of armor by 1, maximum 100 (so 400 for full set). 4 seconds cooldown.'},
'monster_hunter_armor': {'name': 'Monster Hunter Armor', 'rarity': "Rare",'stats_added': {health: 220, defence: 235, 'intelligence': 50, 'speed': 5}, 'description': 'A “secret” set; in addition, to a set bonus, each piece also has its own item ability. Made Up of Skeleton Helmet, Guardian Chestplate, Creeper Pants and Spider Boots or Tarantula Boots. Secret Full Set Bonus: Monster Hunter Take -30% damage when being attacked by Monsters, and deal +30% damage when attacking Monsters.'},
'perfect_armor': {'name': 'Perfect Armor', 'rarity': "Rare",'stats_added': {defence: 660, health: 0}, 'description': '---'},
'armor_of_the_pack': {'name': 'Armor Of The Pack', 'rarity': "Epic",'stats_added': {health: 300, defence: 280}, 'description': 'Full Set Bonus: Armor of the Pack Gain +35 ❁\u2009Strength and +80 ❈\u2009Defense for each Armor of the Pack wearers within 30 blocks. Max of 3 players. <br/> This armor set also gains <span class="defence">225 Defence</span> and 20 True Defence against animals'},
'armor_of_magma': {'name': 'Armor Of Magma', 'rarity': "Epic",'stats_added': {health: 270, defence: 85}, 'description': 'Full Set Bonus: Absorb Every 10 Magma Cubes killed gives the wearer +1 ❤\u2009Health and ✎\u2009Intelligence while wearing the set. Max 200 each.'},
'emerald_armor': {'name': 'Emerald Armor', 'rarity': "Epic",'stats_added': {defence: 270, health: 0}, 'description': 'Full Set Bonus: Tank Increases the wearers maximum ❤\u2009Health and ❈\u2009Defense by 1 for every 3,000 Emeralds in your collection. Max 350 each.'},
'ember_armor': {'name': 'Ember Armor', 'rarity': "Epic",'stats_added': {health: 200, defence: 180, 'intelligence': 25}, 'description': 'Full Set Bonus: Nether Lord Obsidian will be created below you when walking on Lava. It also increases the chance of Nether monsters dropping an item by 20%. Wearing this full set will also prevent you from taking Lava and Fire Damage.'},
'crystal_armor': {'name': 'Crystal Armor', 'rarity': "Epic",'stats_added': {defence: 100, health: 0, 'intelligence': 345}, 'description': 'Full Set Bonus: Refraction The stats of this armor change from 0 to 200% depending on the current light level.'},
'zombie_armor': {'name': 'Zombie Armor', 'rarity': "Epic",'stats_added': {health: 480, defence: 100}, 'description': 'Full Set Bonus: Projectile Absorption Heals the wearer for 10 ❤\u2009HP per second for 5 seconds when hit by a projectile.'},
'blaze_armor': {'name': 'Blaze Armor', 'rarity': "Epic",'stats_added': {defence: 410, health: 0, 'speed': 8, 'strength': 40}, 'description': 'Full Set Bonus: Blazing Aura Damages mobs within 5 blocks for 3% of their max ❤\u2009Health per second. Max damage/s increased by +100 per 5,000 rods (5000 max damage cap). Also grants permanent Fire and Lava immunity.'},
'frozen_blaze_armor': {'name': 'Frozen Blaze Armor', 'rarity': "Epic",'stats_added': {defence: 530, health: 0, 'strength': 160, 'speed': 8}, 'description': 'Full Set Bonus: Blazing Aura Damages mobs in a 5 block range for 300 base damage + 3% of their max ❤\u2009Health per second and applies Slowness 1 for 4 seconds. Max damage/s increased by +100 per 5,000 rods (5000 max damage cap). Also grants permanent Fire and Lava immunity.'},
'cheap_tuxedo': {'name': 'Cheap Tuxedo', 'rarity': "Epic",'stats_added': {health: 0, defence: 0, 'crit-damage': 100, 'intelligence': 100}, 'description': 'Full Set Bonus: Dashing Max health set to 75❤. Deals +50% damage!'},
'ender_armor': {'name': 'Ender Armor', 'rarity': "Epic",'stats_added': {health: 90, defence: 170}, 'description': "Piece Bonus:each of the armor piece's stats are doubled while in The End island. this includes reforges, enchants, and hot potato books."},
'speedster_armor': {'name': 'Speedster Armor', 'rarity': "Epic",'stats_added': {defence: 350, 'speed': 60, health: 0}, 'description': 'Full Set Bonus: Bonus Speed Increases ✦\u2009Speed by +20%.'},
'sponge_armor': {'name': 'Sponge Armor', 'rarity': "Epic",'stats_added': {defence: 385, health: 0}, 'description': 'Full Set Bonus: Absorb Doubles your ❈\u2009Defense while in water'},
'mastiff_armor': {'name': 'Mastiff Armor', 'rarity': "Epic",'stats_added': {health: 2000, defence: -40000, 'intelligence': 150}, 'description': 'Full Set Bonus: Absolute Unit - +50 ❤\u2009HP per 1% ☠\u2009Crit Damage. Regain 2% of max ❤\u2009HP when hit (1s cooldown). Receive -20% damage from wolves. Your crit damage is 50% less effective.'},
'tarantula_armor': {'name': 'Tarantula Armor', 'rarity': "Epic",'stats_added': {health: 350, defence: 300, 'intelligence': 250, 'speed': 5}, 'description': 'Full Set Bonus: Octodexterity Every 4th strike, deal double damage and apply Venom reducing healing by 40% for 4 seconds. <br/>Piece Bonus: Spider Bulwark Kill Spiders to gain defense against them. Each piece has their separate defense bonus.<br/>Helmet Bonus: Radioactive-gain 1% Crit Damage per 10 Strength <br/>Chestplate Bonus: Antitoxin-gain immunity to healing reduction <br/>Boots Item Ability-Double Jump- be able to double jump! Mana Cost:40'},
'revenant_armor': {'name': 'Revenant Armor', 'rarity': "Epic",'stats_added': {defence: 150, health: 400}, 'description': 'Full Set Bonus: Trolling The Reaper Healing Wands heal +50%. Gain +100 ❈\u2009Def against Zombies. <br/>Piece Bonus: Zombie Bulwark Kill Zombies to accumulate defense against them.'},
'spooky_armor': {'name': 'Spooky Armor', 'rarity': "Epic",'stats_added': {defence: 135, health: 0}, 'description': 'Piece Bonus:Each armor piece grants a +5% chance to get Candy from mobs during the Spooky Festival. <br/>Full Set Bonus: Candy Man Grants an additional +5% chance to find rare Candy.'},
'snow_suit': {'name': 'Snow Suit', 'rarity': "Epic",'stats_added': {health: 310, defence: 125}, 'description': "Full Set Bonus: Cold Thumb Allows the wearer to shoot unlimited snowballs (without consuming them) from Frosty the Snow Cannon / Blaster. <br/>Each armor piece grants +5% chance to get an extra gift for every present you earn during the event.<br/>All stats of this piece are doubled in Jerry's Workshop!"},
'bat_person_armor': {'name': 'Bat Person Armor', 'rarity': "Legendary",'stats_added': {defence: 85, health: 0}, 'description': 'Piece Bonus:Each armor piece grants x2 item stats during the night or x3 during the Spooky Festival! Additionally, it gives a +5% chance to get Candy from mobs during the event.<br/>Full Set Bonus: Bat Power Activate! Upgrades your Grappling Hook and turns you into a true vigilante! Grants an additional +5% chance to find rare Candy.'},
'divers_armor': {'name': 'Divers Armor', 'rarity': "Legendary",'stats_added': {health: 300, defence: 600}, 'description': 'Full Set Bonus: One with the Fish While touching the water you move incredibly fast and can breathe permanently.'},
'fancy_tuxedo': {'name': 'Fancy Tuxedo', 'rarity': "Legendary",'stats_added': {health: 0, defence: 0, 'intelligence': 300, 'crit-damage': 150}, 'description': 'Full Set Bonus: Dashing Max health set to 150❤. Deals +100% damage!'},
'elegant_tuxedo': {'name': 'Elegant Tuxedo', 'rarity': "Legendary",'stats_added': {health: 0, defence: 0, 'intelligence': 500, 'crit-damage': 200}, 'description': 'Full Set Bonus: Dashing Max health set to 250❤. Deals +150% damage!'},
'young_dragon_armor': {'name': 'Young Dragon Armor', 'rarity': "Legendary",'stats_added': {health: 350, defence: 500, 'speed': 80}, 'description': 'Full Set Bonus: Young Blood Gain +70% Walk Speed when you are above 50% HP. +100 Walk Speed Cap.'},
'old_dragon_armor': {'name': 'Old Dragon Armor', 'rarity': "Legendary",'stats_added': {health: 450, defence: 490}, 'description': 'Full Set Bonus: Old Blood Increases the strength of Growth, Protection, Feather Falling, Sugar Rush, and True Protection Enchantments while worn.'},
'wise_dragon_armor': {'name': 'Wise Dragon Armor', 'rarity': "Legendary",'stats_added': {health: 350, defence: 500, 'intelligence': 350}, 'description': 'Full Set Bonus: Wise Blood All abilities cost 2/3 of the Mana cost.'},
'protector_dragon_armor': {'name': 'Protector Dragon Armor', 'rarity': "Legendary",'stats_added': {health: 350, defence: 600}, 'description': 'Full Set Bonus: Protective Blood Increases the defense of each armor piece by +1% Defense for every percent of missing HP.'},
'strong_dragon_armor': {'name': 'Strong Dragon Armor', 'rarity': "Legendary",'stats_added': {health: 350, defence: 500, 'strength': 100, 'Full Set Bonus: Strong Blood Improves the Aspect of the End: <br/>+75 Base Damage<br/>Ability improved: Teleport distance +2, Duration +3 seconds, +5❁\u2009Strength on cast.': 0}, 'description': 'Full Set Bonus: Strong Blood Improves the Aspect of the End: <br/>+75 Base Damage<br/>Ability improved: Teleport distance +2, Duration +3 seconds, +5❁\u2009Strength on cast.'},
'unstable_dragon_armor': {'name': 'Unstable Dragon Armor', 'rarity': "Legendary",'stats_added': {health: 350, defence: 500, 'crit-chance': 20, 'crit-damage': 60, 'intelligence': 25}, 'description': 'Full Set Bonus: Unstable Blood Sometimes strikes nearby mobs with lightning, and rarely strikes nearby players.'},
'superior_dragon_armor': {'name': 'Superior Dragon Armor', 'rarity': "Legendary",'stats_added': {health: 450, defence: 600, 'strength': 40, 'crit-chance': 8, 'crit-damage': 40, 'speed': 12, 'intelligence': 100}, 'description': 'Full Set Bonus: Superior Blood All your stats are increased by 5% and Aspect of the Dragons ability deals 50% more damage.'},
'holy_dragon_armor': {'name': 'Holy Dragon Armor', 'rarity': "Legendary",'stats_added': {health: 545, defence: 500}, 'description': 'Full Set Bonus: Holy Blood Increases the natural health regeneration of you and all players in a 6 block radius by 3x.'}};

function generateAllArmours() {
  var index = 0;
  for (var armourSet in armours) {
    createButton(armours[armourSet]["name"], index, armours[armourSet]["rarity"].toLowerCase()); // creates a button with the following information
    index++;
  }
}

function createButton(name, number, rarity) {
  var button = $("<button><h3>" + name + "</h3></button>").attr({
    'onclick': 'displayContent(this)',
    'class':  'armour-button ' + rarity,
    'id': "armour-button-" + number
  }).appendTo("#armours-scroll");
}

function displayContent(self) {
  var clicked_armour_cute_name = self.children[0]; // name presented to the user
  var clicked_armour_id = clicked_armour_cute_name.innerHTML.toLowerCase().replace(/ /g, "_"); // name referred to in dictionary
  var info = armours[clicked_armour_id];
  document.getElementById("armour-title").innerHTML = clicked_armour_cute_name.innerHTML;
  document.getElementById("armour-rarity").innerHTML = info["rarity"];
  document.getElementById("armour-rarity").className = info["rarity"].toLowerCase();

  // deals with styling for each stat provided by the armour set.
  var added_stats_categories = Object.keys(info["stats_added"]);
  var added_stats_string = "";
  var added_stats_string_secondary = "";
  for (i = 0; i < added_stats_categories.length; i++) {
    var stat = added_stats_categories[i];
    if (info["stats_added"][stat] != 0) {
      if (stat.includes("defence")) { current_colour = "defence"; }
      else if (stat.includes("health")) { current_colour = "health"; }
      else if (stat.includes("intelligence")) { current_colour = "intelligence"; }
      else if (stat.includes("crit")) { current_colour = "crit"; }
      else if (stat.includes("strength")) { current_colour = "strength"; }
      else if (stat.includes("speed")) { current_colour = "speed"; }
      else { current_colour = ""; }

      if (stat.includes("max")) {
        var cute_name = stat.charAt(0).toUpperCase() + stat.slice(1);
        cute_name = cute_name.replace(/_/g, " ").replace(/-/g, " ");

        added_stats_string_secondary += " <span class='" + current_colour + "'>" + cute_name + ": " + info["stats_added"][added_stats_categories[i]] + "</span>,";
      }
      else {
        var cute_name = stat.charAt(0).toUpperCase() + stat.slice(1);
        cute_name = cute_name.replace(/_/g, " ").replace(/-/g, " ");
        added_stats_string += " <span class='" + current_colour + "'>" + cute_name + ": " + info["stats_added"][added_stats_categories[i]] + "</span>,";
      }
    }
  }
  added_stats_string = added_stats_string.slice(0, -1); // removes the last comma in the string
  added_stats_string_secondary = added_stats_string_secondary.slice(0, -1); // removes the last comma in the string
  document.getElementById("stats-added").innerHTML = added_stats_string + "<br/>" + added_stats_string_secondary;

  document.getElementById("armour-description").innerHTML = info["description"].replace(/Full Set Bonus/g, "<span class='full-set-bonus'>Full Set Bonus</span>");

  var health = info["stats_added"]["health"] + 100 ;
  var defence = info["stats_added"]["defence"]
  document.getElementById("effective-hp").innerHTML = Math.round(health * ((defence / 100) + 1));

  document.getElementById("armour-image").src = "assets/images/armour_images/" + clicked_armour_id + ".png";
  document.getElementById("armour-image").alt = clicked_armour_cute_name.innerHTML;
}
