define(['durandal/app'], function (app) {
    var that = this
    that.search = function() { app.showMessage('Search not yet implemented...'); },
        that.activeDate = ko.observable(new Date()),
        that.days = ko.observableArray([]),
        that.activate = function() {
            var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            for (var i = 0; i < 14; i++) {
                var date = new Date();
                date.setDate(date.getDate() + i);
                this.days.push({ date: date, day: weekdays[date.getDay()] });
            };
        };
    that.select = function (selectedDay) {
        that.activeDate(selectedDay.date);
    };

    return that;

});