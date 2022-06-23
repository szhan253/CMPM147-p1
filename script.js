const fillers = {
    player: ["My dude", "Mary", "Adventurer", "Traveller", "James", "Lucky player", "Daniel", "Mark", "Betty", "Kimberly", "$player and $player", "$player, $player, and $player", "Brian", "Sharon", "Nicole"],
    scary: ["Ghost", "Jocker", "Dragon", "Fwooper", "Leucrotta", "Nundu", "Werewolf", "Swooping Evil", "Yeti", "Acromantula", "$scary and $scary"],
    number: ["one", "two", "three","four", "five", "six", "seven", "$number to $number"],
    action: ["push", "step on", "grab", "throw", "catch", "turn"],
    objects: ["a button", "a box", "a switch", "a cube", "a battery"],
    color: ["blue", "green", "gray", "pink", "yellow", "rainbow", "black", "white", "red", "apricot", "periwinkle", "golden", "orange", "pearl yellow", "purple", "pearl sapphire blue", "cobalt blue", "cosmic latte", "$color and $color"],
    shapes: ["circle", "oval", "cross", "heart", "star", "square", "cube", "triangle", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "rhombus", "reuleaux triangle"],
    tools: ["coins", "cards", "hammers", "screwdrivers", "mallets", "axe","saw", "scissors", "chisel", "pliers", "drill", "tape measure", "$tools or $tools"],
    
  };
  
  const template = `$player, welcome to the playground!

  The playground's gate is locked at midnight. There are many $scary all over the midnight playground. You need to cooperate with your friend, $player, to solve some puzzles provided all over the playground to get out of here in $number hours. You might need to $action $objects together or use the $color $shapes keys or $tools you got before to solve the puzzle. After on puzzle is solved, there are going to be some $color $shapes keys or $tools for you to collect. 

  
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
