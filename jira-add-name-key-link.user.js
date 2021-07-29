// ==UserScript==
// @namespace    https://openuserjs.org/users/floodmeadows
// @name         Jira add name key link
// @description  Adds a copyable link to issue details, for pasting into messages etc.
// @copyright    2021, floodmeadows (https://openuserjs.org/users/floodmeadows)
// @license      MIT
// @version      0.1.0
// @include      https://jira.*.uk/browse/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  addLink();
})();

function addLink() {
  const issueKey = document.getElementById("key-val").childNodes[0].nodeValue;
  const issueName = document.getElementById("summary-val").childNodes[0].nodeValue;
  const newElement = document.createElement("div");
  const h = '<a href="' + document.URL + '">\'' + issueName + '\' (' + issueKey + ')</a>';
  newElement.innerHTML = h;
  const target = document.getElementById('summary-val');
  target.parentNode.appendChild(newElement);
}
