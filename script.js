const button = document.querySelector("#color-picker");
const display = document.querySelector("#display");

const pickColor = async () => {
  const eyeDropper = new EyeDropper();
  const { sRGBHex } = await eyeDropper.open();
  display.innerHTML = sRGBHex;
};

button.addEventListener("click", pickColor);

const copyButton = document.getElementById("copy");
copyButton.onclick = () => {
  const x = display.innerHTML;
  navigator.clipboard.writeText(x);
};
