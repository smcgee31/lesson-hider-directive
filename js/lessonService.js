angular.module('directivePractice')
.service('lessonService', function($http) {

    var lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

    this.lessons = function() {
        return lessons;
    };

    this.getSchedule = function() {
        return $http.get('schedule.json')
        .then(function(response) {
            return response;         //  this line might say response.data in the old lessons
        });                          // but we are either going to do the parsing of data on
    };                               // this page OR in the directive but not both!

    this.announceDay = function(lesson, day) {
        console.log(lesson, day);
        alert(lesson + ' is active on ' + day + '.');
    };
});
