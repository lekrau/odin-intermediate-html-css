"use strict";

const input = document.querySelector("#choose");
const chars = document.querySelector("span");

input.addEventListener("input", () => {
    chars.textContent = input.value.length;
});