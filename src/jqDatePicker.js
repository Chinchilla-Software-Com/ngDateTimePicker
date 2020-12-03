angular.module("ngDateTimePicker", []);

angular
	.module('ngDateTimePicker')
	.directive('jqDatePicker', function () {
		return {
			restrict: 'A',
			require: 'ngModel',
			scope: { model: '=?ngModel' },
			link: function (scope, element, attrs, ngModelCtrl) {
				$(element).datepicker({
					dateFormat: 'DD, d  MM, yy',
					onSelect: function (date) {
						scope.model = date;
						scope.$apply();
					}
				});

				scope.$watch('model', function (newValue, oldValue) {
					$(element).datepicker("setDate", newValue);
				});
			}
		};
	})
	.directive('jqDateTimePicker', function () {
		return {
			restrict: 'A',
			require: 'ngModel',
			scope: { model: '=?ngModel' },
			link: function (scope, element, attrs, ngModelCtrl) {
				$(element).datetimepicker({
					dateFormat: "DD, d  MM, yy",
					timeFormat: "hh:mm tt",
					controlType: "select",
					oneLine: true,
					onSelect: function (date) {
						scope.model = date;
						scope.$apply();
					}
				});

				scope.$watch('model', function (newValue, oldValue) {
					$(element).datetimepicker("setDate", newValue);
				});
			}
		};
	});