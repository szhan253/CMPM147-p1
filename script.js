const fillers = {
    player: ["My dude", "Bro", "Adventurer", "Traveller", "Fellow", "Citizen", "Ashen One", "Dragonborn", "Cool person", "Tarnished", "$adventurer and $adventurer", "$adventurer, $adventurer, and $adventurer", "Geoff"],
    scary: ["Fra", "Tro", "Gre", "Pan", "Ast", "Ara"],
    number: ["gria", "ston", "gott","-on-the-lee", "ora", "Ara", "uwu"],
    action: ["kindly", "meek", "brave", "wise", "sacred", "cherished", "honored", "forgotten", "apathetic", "mystic", "orca"],
    objects: ["axe", "staff", "book", "cloak", "shield", "club", "sword", "magic gloves", "galvel", "fists", "mace", "potato"],
    color: [],
    shapes: ["gleaming", "valuable", "esteemed", "rare", "exalted", "scintillating", "kinda gross but still usefull", "complete garbage"],
    tools: ["coins", "chalices", "ingots", "hides", "victory points", "gems","scrolls", "bananas", "noodles", "goblins", "CS Majors", "college credits"],
    
  };
  
  const template = `$player, welcome to the playground!

  The playground’s gate is locked at midnight. There are many $scary all over the midnight playground. You need to cooperate with your friend, 
  $player, to solve some puzzles provided all over the playground to get out of here in $number hours. You might need to $action two $objects 
  together or use the $keys, shapes, or $tools you got before to solve the puzzle. After on puzzle is solved, there are going to be some $keys, 
  $shapes, or $tools for you to collect. 
  
  Time starts running! Good luck!
  
  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;

    let grammar = tracery.createGrammar(spellbook);
    console.log(grammar.flatten('#origin#'))
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
