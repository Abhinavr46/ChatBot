function getBotResponse(input) {
  //rock paper scissors
  if (input == "rock") {
    return "paper";
  } else if (input == "paper") {
    return "scissors";
  } else if (input == "scissors") {
    return "rock";
  }

  // Simple responses
  if (input == "hello") {
    return "Hello there!";
  } else if (input == "who are you?") {
    return "Im Jarvis...Just A Rather Very Intelligent System (J.A.R.V.I.S.) was originally Tony Stark's natural-language user interface computer system. The AI invented by Tony Stark in " + "Stark Industries".link("https://www.w3schools.com");
  } else if (input == "hi") {
    return "Hi there...";
  }  else if (input == "tell me something about cogno.ai") {
    return "Cogno AI's intelligent support, sales, and customer engagement solutions allow businesses to set up world class customer experiences rapidly at scale. Know more about " + "Cogno ai".link("https://www.getcogno.ai/");
  } else if (input == "goodbye") {
    return "Talk to you later! ♥";
  } else if (input == "i Love ai") {
    return "Awww...♥ I Love Humans too ;)";
  }else {
    return "Try asking something else " + ";)";
  }
}
