if (Meteor.isClient) {
    var keys = [];

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
    function display() {
        keys.sort(sortNumber);
        var text =  keys;
        var desc = 'no match';
        if (_.isEqual(keys, [17,68])) {
            desc = "delete line";
            text = "cmd + Y";
        }
        if (_.isEqual(keys, [18,40])) {
            desc = "move line down";
            text = "alt + shift + down";
        }
        if (_.isEqual(keys, [18,38])) {
            desc = "move line up";
            text = "alt + shift + up";
        }
        if (_.isEqual(keys, [17,32])) {
            desc = "auto complete";
            text = "ctrl + (shift) + space";
        }
        if (_.isEqual(keys, [17,77])) {
            desc = "maximize";
            text = "cmd + shift + F12";
        }
        if (_.isEqual(keys, [16,17,84])) {
            desc = "open type";
            text = "cmd + N";
        }
        if (_.isEqual(keys, [17,49])) {
            desc = "open quick fix (intention)";
            text = "alt + enter";
        }
        if (_.isEqual(keys, [17,84])) {
            desc = "type hierarchy";
            text = "ctrl + H";
        }
        if (_.isEqual(keys, [17,81])) {
            desc = "last edit location";
            text = "ctrl + shift + backspace";
        }
        if (_.isEqual(keys, [17,73])) {
            desc = "indent";
            text = "cmd + alt + I";
        }
        if (_.isEqual(keys, [16,17,70])) {
            desc = "format";
            text = "cmd + alt + L";
        }
        if (_.isEqual(keys, [16,17,82])) {
            desc = "open resource";
            text = "cmd + shift + N";
        }
        if (_.isEqual(keys, [16,17,71])) {
            desc = "references";
            text = "alt + F7";
        }
        if (_.isEqual(keys, [17,18,40])) {
            desc = "copy lines";
            text = "cmd + D";
        }
        if (_.isEqual(keys, [17,18,38])) {
            desc = "copy lines";
            text = "cmd + D";
        }
        if (_.isEqual(keys, [17,72])) {
            desc = "search";
            text = "ctrl + shift + F";
        }
        if (_.isEqual(keys, [17,18,76])) {
            desc = "extract variable";
            text = "cmd + alt + V";
        }
        if (_.isEqual(keys, [16,18,84])) {
            desc = "refactor";
            text = "cmd + alt + shift + T";
        }
        if (_.isEqual(keys, [17,76])) {
            desc = "goto line";
            text = "cmd + G";
        }
        $("#theInput").text(text);
        $("#theDescription").text(desc);
    };

    onkeydown = function(e){
        e.preventDefault();
        if (keys.indexOf(e.keyCode) === -1)
            keys.push(e.keyCode);
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
