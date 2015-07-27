if (Meteor.isClient) {
    var keys = [];
    var text;
    var desc;

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
    function setPropertiesIfKeysMatch(arrKeys, shortcut, description){
        if (_.isEqual(keys, arrKeys)) {
            desc = description;
            text = shortcut;
        }
    }
    function display() {
        keys.sort(sortNumber);
        text =  keys;
        desc = 'no match';
        setPropertiesIfKeysMatch([17,68],       "cmd + Y", "delete line");
        setPropertiesIfKeysMatch([18,40],       "cmd + shift + down / alt + shift + down (no indentation)", "move line down");
        setPropertiesIfKeysMatch([18,38],       "cmd + shift + up / alt + shift + up (no indentation)", "move line up");
        setPropertiesIfKeysMatch([17,32],       "ctrl + (shift) + space", "auto complete");
        setPropertiesIfKeysMatch([17,77],       "cmd + shift + F12", "maximize");
        setPropertiesIfKeysMatch([16,17,84],    "cmd + N", "open type");
        setPropertiesIfKeysMatch([17,49],       "alt + enter", "open quick fix (intention)");
        setPropertiesIfKeysMatch([17,84],       "ctrl + H", "type hierarchy");
        setPropertiesIfKeysMatch([17,81],       "cmd + shift + backspace", "last edit location");
        setPropertiesIfKeysMatch([17,73],       "cmd + alt + I", "indent");
        setPropertiesIfKeysMatch([16,17,70],    "cmd + alt + L", "format");
        setPropertiesIfKeysMatch([16,17,79],    "cmd + alt + O", "organize imports");
        setPropertiesIfKeysMatch([16,17,82],    "cmd + shift + N", "open resource");
        setPropertiesIfKeysMatch([16,17,71],    "alt + F7", "references");
        setPropertiesIfKeysMatch([17,18,40],    "cmd + D", "copy lines");
        setPropertiesIfKeysMatch([17,18,82],    "shift + F6", "rename");
        setPropertiesIfKeysMatch([17,72],       "ctrl + shift + F", "search");
        setPropertiesIfKeysMatch([17,18,76],    "cmd + alt + V", "extract variable");
        setPropertiesIfKeysMatch([17,18,73],    "cmd + alt + N", "inline variable");
        setPropertiesIfKeysMatch([16,18,84],    "cmd + alt + shift + T", "refactor");
        setPropertiesIfKeysMatch([17,76],       "cmd + G", "goto line");
        setPropertiesIfKeysMatch([17,79],       "cmd + F12", "outline");
        setPropertiesIfKeysMatch([18,37],       "cmd + alt + left", "previous editor");
        setPropertiesIfKeysMatch([68,91],       "F11", "show desktop");
        setPropertiesIfKeysMatch([16,17,73],    "ctrl + alt + F8", "evaluate");
        setPropertiesIfKeysMatch([17,18,37],    "cmd + shift + F8", "decrease selection");
        setPropertiesIfKeysMatch([17,18,39],    "cmd + W", "increase selection");
        $("#theInput").text(text);
        $("#theDescription").text(desc);
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
