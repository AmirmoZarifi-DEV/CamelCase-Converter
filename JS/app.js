"use strict ";
const textarea = document.querySelector("textarea");
const result = document.querySelector(".result");

document.querySelector("button").addEventListener("click", function () {
  const text = textarea.value;
  const lowerCaseText = text.toLowerCase();
  const splitedText = lowerCaseText.split("\n");
  let trimedSplitedText = [];
  let replacedArray = [];
  let UppercaseText = [];
  for (const trim of splitedText) {
    trimedSplitedText.push(trim.trim());
  }
  for (const cap of trimedSplitedText) {
    let words = cap.split("");
    let index = cap.indexOf("_") + 1;
    words[index] = words[index].toUpperCase();
    UppercaseText.push(words.join(""));
  }
  for (const index of UppercaseText) {
    replacedArray.push(index.replace("_", ""));
  }

  for (let i = 0; i < replacedArray.length; i++) {
    console.log(`${replacedArray[i].padEnd(20)}${"✅".repeat([i + 1])}`);
  }
  result.textContent = replacedArray;
});
