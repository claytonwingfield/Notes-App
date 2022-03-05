"use strict";
//Header
const headerText = document.querySelector(".header");
//Note
const note0 = document.getElementById("note0");
const note1 = document.getElementById("note1");
const note2 = document.getElementById("note2");
const note3 = document.getElementById("note3");
const note4 = document.getElementById("note4");
const note5 = document.getElementById("note5");
const note6 = document.getElementById("note6");
const note7 = document.getElementById("note7");
const note8 = document.getElementById("note8");
const note9 = document.getElementById("note9");
const note10 = document.getElementById("note10");
const note11 = document.getElementById("note11");
//Save Button
const btnSave0 = document.getElementById("btn-save0");
const btnSave1 = document.getElementById("btn-save1");
const btnSave2 = document.getElementById("btn-save2");
const btnSave3 = document.getElementById("btn-save3");
const btnSave4 = document.getElementById("btn-save4");
const btnSave5 = document.getElementById("btn-save5");
const btnSave6 = document.getElementById("btn-save6");
const btnSave7 = document.getElementById("btn-save7");
const btnSave8 = document.getElementById("btn-save8");
const btnSave9 = document.getElementById("btn-save9");
const btnSave10 = document.getElementById("btn-save10");
const btnSave11 = document.getElementById("btn-save11");
//TextArea
const textArea0 = document.getElementById("textarea0");
const textArea1 = document.getElementById("textarea1");
const textArea2 = document.getElementById("textarea2");
const textArea3 = document.getElementById("textarea3");
const textArea4 = document.getElementById("textarea4");
const textArea5 = document.getElementById("textarea5");
const textArea6 = document.getElementById("textarea6");
const textArea7 = document.getElementById("textarea7");
const textArea8 = document.getElementById("textarea8");
const textArea9 = document.getElementById("textarea9");
const textArea10 = document.getElementById("textarea10");
const textArea11 = document.getElementById("textarea11");
document.body.style.backgroundColor = "white";

let btn0Color;
let myNotes = [];

//Getting DOM Elements

let savingValue = function () {
  if (!textArea0.value) {
    alert("Enter A Note");
  } else {
    note1.classList.remove("hidden");
    myNotes.push(textArea0.value);
    console.log(myNotes);
  }
};
let savingValue1 = function () {
  if (!textArea1.value) {
    alert("Enter A Note");
  } else {
    note2.classList.remove("hidden");
    myNotes.push(textArea1.value);
    console.log(myNotes);
  }
};
let savingValue2 = function () {
  if (!textArea2.value) {
    alert("Enter A Note");
  } else {
    note3.classList.remove("hidden");
    myNotes.push(textArea2.value);
    console.log(myNotes);
  }
};
let savingValue3 = function () {
  if (!textArea3.value) {
    alert("Enter A Note");
  } else {
    note4.classList.remove("hidden");
    myNotes.push(textArea3.value);
    console.log(myNotes);
  }
};
let savingValue4 = function () {
  if (!textArea4.value) {
    alert("Enter A Note");
  } else {
    note5.classList.remove("hidden");
    myNotes.push(textArea4.value);
    console.log(myNotes);
  }
};
let savingValue5 = function () {
  if (!textArea5.value) {
    alert("Enter A Note");
  } else {
    note6.classList.remove("hidden");
    myNotes.push(textArea5.value);
    console.log(myNotes);
  }
};
let savingValue6 = function () {
  if (!textArea6.value) {
    alert("Enter A Note");
  } else {
    note7.classList.remove("hidden");
    myNotes.push(textArea6.value);
    console.log(myNotes);
  }
};
let savingValue7 = function () {
  if (!textArea7.value) {
    alert("Enter A Note");
  } else {
    note8.classList.remove("hidden");
    myNotes.push(textArea7.value);
    console.log(myNotes);
  }
};
let savingValue8 = function () {
  if (!textArea8.value) {
    alert("Enter A Note");
  } else {
    note9.classList.remove("hidden");
    myNotes.push(textArea8.value);
    console.log(myNotes);
  }
};
let savingValue9 = function () {
  if (!textArea9.value) {
    alert("Enter A Note");
  } else {
    note10.classList.remove("hidden");
    myNotes.push(textArea9.value);
    console.log(myNotes);
  }
};
let savingValue10 = function () {
  if (!textArea10.value) {
    alert("Enter A Note");
  } else {
    note11.classList.remove("hidden");
    myNotes.push(textArea10.value);
    console.log(myNotes);
  }
};
let savingValue11 = function () {
  if (!textArea11.value) {
    alert("Enter A Note");
  } else {
    myNotes.push(textArea11.value);
    console.log(myNotes);
    alert("Storage Full");
  }
};

let save0 = btnSave0.addEventListener("click", savingValue);
let save1 = btnSave1.addEventListener("click", savingValue1);
let save2 = btnSave2.addEventListener("click", savingValue2);
let save3 = btnSave3.addEventListener("click", savingValue3);
let save4 = btnSave4.addEventListener("click", savingValue4);
let save5 = btnSave5.addEventListener("click", savingValue5);
let save6 = btnSave6.addEventListener("click", savingValue6);
let save7 = btnSave7.addEventListener("click", savingValue7);
let save8 = btnSave8.addEventListener("click", savingValue8);
let save9 = btnSave9.addEventListener("click", savingValue9);
let save10 = btnSave10.addEventListener("click", savingValue10);
let save11 = btnSave11.addEventListener("click", savingValue11);
