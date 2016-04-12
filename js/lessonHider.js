angular.module('directivePractice')
.directive('lessonHider', function() {

    return {
        templateUrl: 'lessonHider.html',
        restrict: 'E',
        scope: {
            lesson: '=',
            dayAlert: '&'
        },
        controller: function($scope, lessonService) {
            $scope.getSchedule = lessonService.getSchedule();
        },
        link: function(scope, element, attr) {
            scope.getSchedule.then(function(response) {
                scope.schedule = response.data;     // we parse the data here because we didn't do it inthe service - you don't pasrse data twice - duh!
                scope.schedule.forEach(function(scheduleDay) {
                    if (scheduleDay.lesson === scope.lesson) {
                        element.css('text-decoration', 'line-through');
                        scope.lessonDay = scheduleDay.weekday;
                        return;
                    }
                });
            });
        },
    };




});
