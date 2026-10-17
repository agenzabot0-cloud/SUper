let Username = prompt("what should nine call you?");
alert("Hello " + Username + "!");

let Provider = prompt("who gave this to you? (who was your provider?)");

if (Provider === "MorlineBounties") {
  alert("great! You were most likely a beta tester then, we will ask for you to verify that status.");
  let Password = prompt("Beta password?");
  if (Password === "123908") {
    alert("thank you for verifying your status!");
    alert(`also, thank you  ${Username}  for beta testing!`);
    let IsbetaTester = "true";
  } else {
    alert("I am sorry, but that is not the password. You will be redirected to NormalMode.");
    alert("please also never try BetaCommands.");
    let IsbetaTester = "false";
  };
} else {
  alert("I am sorry, but that is not a valid provider.");
};

console.warn("generating system files..........");
alert("generating system, please wait until percentage is 100%.");
// please dont accuse of vibecoded, I use comments inorder to organize my code btw
let Progress = "1%";
// section 2
let Seed
Progress = "2%";
alert(Progress);
// section 3
let MobGen
Progress = "3%";
alert(Progress);
// section 4
let X
let Y
let Z
Progress = "4%";
alert(Progress);
// section 5
Seed = Math.floor(Math.random() * 9999999);
console.log("Seed set to " + Seed + ".");
Progress = "5%";
alert(Progress);
// section 6
X = 0
Y = 9
Z = 0
console.log("X, Y, and Z files are valid.");
Progress = "6%";
alert(Progress);
// section 7
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
console.log("Imported Three.Js");
Progress = "7%";
alert(Progress);
// section 8
this._threejs = new THREE.WebGLRenderer(); // thank you @SimonDev for the tutorial
this._threejs.shadowMap.enabled = true
this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;
this._threejs.setPixelRatio(window.devicePixelRatio);
this._threejs.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(this._threejs.domElement);

window.addEventListerner('resize', () => {
  this._OnWindowResize();
}
