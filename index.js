const skullBox = document.getElementsByClassName("skullBox");
const skullDisplay = document.getElementById("skullDisplay");
const skullTitle = document.getElementById("skullTitle");
const skullDesc = document.getElementById("skullDesc");
const skullMulti = document.getElementById("skullMulti");
const skullDetails = document.getElementById("details");

for (var i = 0; i < skullBox.length; i++) {
  skullBox[i].addEventListener("mouseenter", () => {
    mouseOverSkull(event.target.innerHTML);
  });
  skullBox[i].addEventListener("click", () => {
    clickOnSkull(event.target.innerHTML, event.target);
  });
}

const skullMetadata = [
  {
    name: "Black Eye",
    desc: "Shields don't recharge unless you melee enemies.",
    multiplier: "x1.5"
  },
  {
    name: "Blind",
    desc: "The HUD and the first person arms and weapon are hidden.",
    multiplier: "x2.5"
  },
  {
    name: "Catch",
    desc: "Enemies are grenade happy!",
    multiplier: "x2.0"
  },
  {
    name: "Famine",
    desc: "Weapons drop much less ammo.",
    multiplier: "x2.0"
  },
  {
    name: "Fog",
    desc: "Motion sensor is disabled.",
    multiplier: "x1.5"
  },
  {
    name: "Iron",
    desc: "Restart the mission on death.",
    multiplier: "x3.0"
  },
  {
    name: "Mythic",
    desc: "Enemies have increased health.",
    multiplier: "x2.0"
  },
  {
    name: "Thunderstorm",
    desc: "Major upgrade to the capabilities of enemies.",
    multiplier: "x1.5"
  },
  {
    name: "Tilt",
    desc: "Enemy resistences and weaknesses are increased.",
    multiplier: "x2.0"
  },
  {
    name: "Tough Luck",
    desc: "Enemies always go berserk, always dive out of the way, never flee.",
    multiplier: "x1.5"
  },
  {
    name: "Cowbell",
    desc: "Acceleration from explosions is increased. We need more!",
    multiplier: "x1.0"
  },
  {
    name: "Grunt Birthday Party",
    desc: "Headshot a Grunt - HAPPY BOOM TIME!",
    multiplier: "x1.0"
  },
  {
    name: "IWHBYD",
    desc: "Rare combat dialogue becomes more common",
    multiplier: "x1.0"
  }
];

function mouseOverSkull(skullImage) {
  const skullFile = skullImage.replace('<img src="content/SkullImages/', "");
  const skullName = skullFile.replace('.png">', "").trim();
  console.log(skullName);
  const skullInfo = skullMetadata.filter(
    skull =>
      skull.name.trim().replace(/\s/g, "") === skullName.replace("Active", "")
  );
  console.log(skullInfo);
  skullTitle.innerText = skullInfo[0].name;
  skullDesc.innerText = skullInfo[0].desc;
  skullMulti.innerText = `Skull Multiplier: ${skullInfo[0].multiplier}`;

  skullDisplay.innerHTML = skullImage;
  skullDetails.style.display = "block";
}

function clickOnSkull(skullImage, skullItem) {
  const activeSkull = skullImage.replace('.png">', 'Active.png">');
  console.log(activeSkull);
  console.log(skullItem);
  skullItem.innerHTML = activeSkull;
  skullDisplay.innerHTML = activeSkull;
}
