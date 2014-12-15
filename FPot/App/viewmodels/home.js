define(['durandal/app'], function (app) {
    var that = this;
    that.search = function() { app.showMessage('Search not yet implemented...'); },
        that.activeDate = ko.observable(),
        that.days = ko.observableArray(),
        that.activate = function() {
            var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            for (var i = 1; i < 14; i++) {
                var date = new Date();
                date.setDate(date.getDate() + i);
                that.days.push({
                    date: date, formattedDate: function () {
                        //if (i == 1)
                        //    return "Tommorow " + this.date.toDateString().slice(4);
                        //else
                            return date.toDateString();
                    }()});
            };
            that.activeDate(that.days()[0].date);
            that.selectedDate = ko.computed(
    {
        read: function () {
            return that.activeDate().toDateString();
        },
        write: function (selectedDay) {
            that.activeDate(selectedDay.date);
        }
    });

        };
    
    that.select = function (selectedDay) {
        that.selectedDate(selectedDay);
    };

    return that;

});