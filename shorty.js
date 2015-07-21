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
        $("#theInput").text(keys);
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
        display();
    };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
