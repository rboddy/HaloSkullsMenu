const skullBox = document.getElementsByClassName("skullBox");
const skullDisplay = document.getElementById("skullDisplay");

for (var i = 0; i < skullBox.length; i++) {
  skullBox[i].addEventListener("mouseenter", () => {
    mouseOverSkull(event.target.innerHTML);
  });
}

const skullMetadata = {
  BlackEye: {
    name: "Black Eye",
    desc: "Shields don't recharge unless you melee enemies.",
    multiplier: "x1.5"
  },
  Blind: {
    name: "Blind",
    desc: "The HUD and the first person arms and weapon are hidden.",
    multiplier: "x2.5"
  },
  Catch: {
    name: "Catch",
    desc: "Enemies are grenade happy!",
    multiplier: "x2.0"
  },
  Famine: {
    name: "Famine",
    desc: "Weapons drop much less ammo.",
    multiplier: "x2.0"
  },
  Fog: {
    name: "Fog",
    desc: "Motion sensor is disabled.",
    multiplier: "x1.5"
  },
  Iron: {
    name: "Iron",
    desc: "Restart the mission on death.",
    multiplier: "x3.0"
  },
  Mythic: {
    name: "Mythic",
    desc: "Enemies have increased health.",
    multiplier: "x2.0"
  },
  Thunderstorm: {
    name: "Thunderstorm",
    desc: "Major upgrade to the capabilities of enemies.",
    multiplier: "x1.5"
  },
  Tilt: {
    name: "Tilt",
    desc: "Enemy resistences and weaknesses are increased.",
    multiplier: "x2.0"
  },
  ToughLuck: {
    name: "Touch Luck",
    desc: "Enemies always go berserk, always dive out of the way, never flee.",
    multiplier: "x1.5"
  },
  Cowbell: {
    name: "Cowbell",
    desc: "Acceleration from explosions is increased. We need more!",
    multiplier: "1.0x"
  },
  GruntBirthdayParty: {
    name: "Grunt Birthday Party",
    desc: "Headshot a Grunt - HAPPY BOOM TIME!",
    multiplier: "1.0x"
  },
  IWHBYD: {
    name: "IWHBYD",
    desc: "Rare combat dialogue becomes more common",
    multiplier: "1.0x"
  }
};

function mouseOverSkull(skullImage) {
  const skullFile = skullImage.replace('<img src="content/SkullImages/', "");
  const skullName = skullFile.replace('.png">', "");
  console.log(skullName);
  skullDisplay.innerHTML = skullImage;
}
