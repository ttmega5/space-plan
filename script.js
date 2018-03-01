// credit roanm
window.onload = function() {
  addFG();
  // values
  var planet1 = document.getElementById("planet1");
  var planet1moon = document.getElementById("planet1Moon");
  var view = document.getElementById("view");
  var sideView = document.getElementById("sideView");
  var bottomView = document.getElementById("bottomView");
  var planet1Locked = true;
  var planet1Captured = -1;
  var planet1Name = "Furry Grass"
  var fga = 0;
  var selectedPlanet = "none";
  var body = document.getElementById("body");
  // planet1 hover
  planet1.onmouseover = function(){
    if (planet1Locked == true) {
      write("" + planet1Name + ". (LOCKED)");
    }else {
      write("" + planet1Name + ". (CAPTURED)");
    };
  };
  // planet1 moon
  planet1moon.onmouseover = function(){
    clearE("view");
    if (planet1Locked == true) {
      write("You need to capture " + planet1Name + " first");
    }else {
      write("Moon! Upgrade speed");
    };
  };
  // planet1 clicked
  planet1.onclick = function() {
    if (planet1Locked == true) {
      clearE("view")
      planet1Captured += 1
      write("Capturing " + planet1Captured + "/10");
      if (planet1Captured == 10) {
        planet1Locked = false
        clearE("view")
        write("Captured");
      };
    }else {
      clearE("view")
      clearE("sideView")
      write("" + planet1Name + " has been captured. Shop on the side.");
      writeB("" + planet1Name + " has no available furry slaves at the moment <br/>");
    };
  };
  // clear normal view
  body.onmouseover = function(){
    clearE("view");
  }
  // clear side view
  body.onclick = function(){
    clearE("sideView")
  };
  // write on the left side view
  function write(text) {
    view.innerHTML += text;
  };
  // write on the right side view
  function writeB(text) {
    sideView.innerHTML += text;
  };
  // clear an element
  function clearE(element) {
    document.getElementById(element).innerHTML = ""
  };
  // add moon
  function addFG() {
    setTimeout(function(){
      if (selectedPlanet == "none") {
        bottomView.innerHTML = "no planet (for the slaves to capture) is selected! <div id='button' onclick='slaveView()'>Change this!</div>";
      }
      addFG(); 
    }, 1000-fga*10);
  }
};// end