const Brightness = document.querySelector("#brightness");
const Image = document.querySelector(".image");
const Contrast = document.querySelector("#contrast");
const Width = document.querySelector("#width");
const Height = document.querySelector("#height");
const Color = document.querySelector("#color");

// document bu html / querySelector() bu  JavaScriptda DOM (Document Object Model) elementlarini tanlash uchun ishlatiladigan metod.

let BrightnessLevel = 100;
let ContrastLevel = 100;

// addEventListener() nima  JavaScriptda DOM elementlariga hodisalarni biriktirish uchun ishlatiladigan metod. Bu metod yordamida siz bir yoki bir nechta hodisa turiga javob beruvchi funksiyalarni elementlarga bog'lashingiz mumkin.
//event: Tinglanadigan hodisa turi (masalan, 'click', 'mouseover', 'keyup').
// function: Hodisa yuz berganda bajariladigan funksiya.
// Hodisa turlari
// Mouse hodisalari: 'click', 'dblclick', 'mouseover', 'mouseout', 'mousemove', 'mousedown', 'mouseup'.
// Keyboard hodisalari: 'keydown', 'keypress', 'keyup'.
// Form hodisalari: 'submit', 'change', 'focus', 'blur'.
// Window hodisalari: 'resize', 'scroll', 'load', 'unload'.

Brightness.addEventListener("input", () => {
  BrightnessLevel = Brightness.value;
  Image.style = `filter: brightness(${BrightnessLevel * 5}%) contrast(${
    ContrastLevel * 5
  }%)`;
  Brightness.previousElementSibling.innerHTML = `Brightness: ${
    BrightnessLevel * 5
  }%`;
});

Contrast.addEventListener("input", () => {
  ContrastLevel = Contrast.value;
  Image.style = `filter: contrast(${ContrastLevel * 5}%) brightness(${
    BrightnessLevel * 5
  }%)`;
  Contrast.previousElementSibling.innerHTML = `Contrast: ${ContrastLevel * 5}%`;
});


Height.addEventListener("change", () =>{
    Image.style.height = Height.value + "px";
});

Width.addEventListener("change", () => {
  Image.style.width = Width.value + "px";
});


Color.addEventListener("input", () =>{
 document.body.style.backgroundColor =`rgb(112,207,${Color.value})`;
 console.log(Color.value);
});