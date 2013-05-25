
define(["const"], function(Const) {
    var exports = {};

    exports.findAll = function() {
        var entries = localStorage[Const.KEY_ENTRIES];
        if (!entries) return [];
        else return JSON.parse(entries);
    };

    exports.findById = function(id) {
        var entries = this.findAll();
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].id == id) {
                return entries[i];
            }
        }
    };

    exports.saveAll = function(entries) {
        localStorage[Const.KEY_ENTRIES] = JSON.stringify(entries);
    };

    exports.saveById = function(id, entry) {
        var entries = this.findAll(),
            newEntries = [];
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].id == id) {
                newEntries.push(entry);
                continue;
            }
            newEntries.push(entries[i]);
        }
        this.saveAll(newEntries);
    };

    exports.remove = function(id) {
        var entries = this.findAll(),
            newEntries = [];
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].id == id) {
                continue;
            }
            newEntries.push(entries[i]);
        }
        this.saveAll(newEntries);
    };

    exports.heroStateOpen = function() {
        if (!localStorage[Const.ID_HERO]) localStorage[Const.ID_HERO] = Const,STATE_HERO_OPEN;
        return Const.STATE_HERO_OPEN === localStorage[Const.ID_HERO];
    };

    exports.changeHeroState = function(state) {
        localStorage[Const.ID_HERO] = state;
    };

    return exports;
});
