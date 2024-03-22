/*
ETO INSTRUCTION GUYS
1. GO TO https://ticketmaster.zendesk.com/agent
2. Press F12
3. Find Console and click nyo eto, meron dapat insertion point na lalabas dyan where you can type stuffs.
4. Copy all of this script, lahat mismo kahit etong tinype ko iignore lang din naman nyan then paste.
5. You can now press ALT + z for All Messenger Tix, ALT + x for DOS Messenger Tix, ALT + c for 72 Hour Messenger Tix.
NOTE: Wala po tong pang kuha ng email tickets XORIII :*
*/
function setAccessKey() {
  var anchorElement1 = document.querySelectorAll(
    '[data-view-id="5238200867345"]'
  );
  var anchorElement2 = document.querySelectorAll(
    '[data-view-id="5342627075217"]'
  );
  var anchorElement3 = document.querySelectorAll(
    '[data-view-id="5342769136017"]'
  );

  if (anchorElement1 || anchorElement2 || anchorElement3) {
    anchorElement1.accessKey = "z";
    anchorElement2.accessKey = "x";
    anchorElement3.accessKey = "c";
  }
}

// window.onload = function () {
//     setAccessKey();
//   };
function setAccessKey() {
  var elements = document.getElementsByTagName("div");
  var element1, element2, element3;

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].innerText === "🆕All Messenger Tix") {
      element1 = elements[i];
      var anchorElement1 = element1.closest("a");
      if (anchorElement1) {
        anchorElement1.accessKey = "z";
      }
    } else if (elements[i].innerText === "🆕DOS Messenger Tix") {
      element2 = elements[i];
      var anchorElement2 = element2.closest("a");
      if (anchorElement2) {
        anchorElement2.accessKey = "x";
      }
    } else if (elements[i].innerText === "🆕72 Hour Messenger Tix") {
      element3 = elements[i];
      var anchorElement3 = element3.closest("a");
      if (anchorElement3) {
        anchorElement3.accessKey = "c";
      }
    }
  }

  console.log(element1);
  console.log(element2);
  console.log(element3);
}
setAccessKey();
