if (Meteor.isClient) {
    var keys = [];
    var text;
    var desc;
    var mapping = [];

    putInMap([17,68],       "⌘ + Y", "delete line");
    putInMap([18,40],       "⌘ + ⇧ + down | ⌥ + ⇧ + down (no indentation)", "move line down");
    putInMap([18,38],       "⌘ + ⇧ + up | ⌥ + ⇧ + up (no indentation)", "move line up");
    putInMap([17,32],       "^ + (⇧) + space | ⌘ + J (templates)", "auto complete");
    putInMap([17,77],       "⌘ + ⇧ + F12", "maximize");
    putInMap([16,17,84],    "⌘ + N", "open type");
    putInMap([17,49],       "⌥ + enter", "open quick fix (intention)");
    putInMap([17,84],       "^ + H", "type hierarchy");
    putInMap([17,81],       "⌘ + ⇧ + backspace", "last edit location");
    putInMap([17,73],       "⌘ + ⌥ + I", "indent");
    putInMap([16,17,70],    "⌘ + ⌥ + L", "format");
    putInMap([16,17,79],    "⌘ + ⌥ + O", "organize imports");
    putInMap([16,17,82],    "⌘ + ⇧ + N", "open resource");
    putInMap([16,17,71],    "⌥ + F7", "references");
    putInMap([17,18,40],    "⌘ + D", "copy lines");
    putInMap([17,18,82],    "⇧ + F6", "rename");
    putInMap([17,72],       "^ + ⇧ + F", "search");
    putInMap([17,18,76],    "⌘ + ⌥ + V", "extract variable");
    putInMap([17,18,73],    "⌘ + ⌥ + N", "inline variable");
    putInMap([16,18,84],    "⌘ + ⌥ + ⇧ + T", "refactor");
    putInMap([17,76],       "⌘ + G", "goto line");
    putInMap([17,79],       "⌘ + F12", "outline");
    putInMap([18,37],       "⌘ + ⌥ + left", "previous editor");
    putInMap([68,91],       "F11", "show desktop");
    putInMap([16,17,73],    "^ + ⌥ + F8", "evaluate");
    putInMap([17,18,37],    "⌘ + ⇧ + F8", "decrease selection");
    putInMap([17,37,91],    "⇧ + F7", "smart step into");

    Template.body.helpers({
        mapping : mapping
    });
    function removeAll(item) {
        var index = keys.indexOf(item);
        while (index !== -1) {
            keys.splice(index, 1);
            index = keys.indexOf(item);
        }

    };
    function sortNumber(a,b) {
        return a - b;
    }
    function getFromMap(arrKeys){
        for (var i = 0; i < mapping.length; i++) {
            if (_.isEqual(arrKeys, mapping[i].pressed)) {
                return mapping[i];
            }
        }
        return {value: arrKeys, description: 'no match'}
    }
    function putInMap(arrKeys, shortcut, description){
        mapping.push({pressed: arrKeys, value: shortcut, description: description})
    }
    function display() {
        keys.sort(sortNumber);
        var ret = getFromMap(keys);
        $("#theInput").text(ret.value);
        $("#theDescription").text(ret.description);
    };

    onkeydown = function(e){
        e.preventDefault();
        if (keys.indexOf(e.keyCode) === -1) {
            keys.push(e.keyCode);
        }
        display();
    };
    onkeyup = function(e){
        e.preventDefault();
        removeAll(e.keyCode);
        if (e.keyCode === 46) {//del
            keys = [];
        }
        //display();
    };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
