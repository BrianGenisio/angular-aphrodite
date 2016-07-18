import angular from 'angular';
import { StyleSheet, css } from 'aphrodite';

const MODULE_NAME = 'angular-aphrodite';

function cssFilter() {
    return function(styles) {
        if(!Array.isArray(styles)) {
            styles = [styles];
        }
        
        return css.apply(this, styles);
    };
}

function cssDirective() {
    return {
        restrict: 'A',
        scope: {css: '='},
        link: function(scope, element) {
            scope.$watch('css', function(styles, oldVal) {
                if(!Array.isArray(styles)) {
                    styles = [styles];
                }

                element[0].className = ''
                element.addClass(css.apply(this, styles));
            });
        }
    }
}

function stylesheetDirective() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            const text = element.text();
            element.remove();
            
            const dataName = attrs.name;
            const data = JSON.parse(text);
            
            scope[dataName] = StyleSheet.create(data);
        }
    };
}

angular.module(MODULE_NAME, [])
    .filter('css', cssFilter)
    .directive('css', cssDirective)
    .directive('stylesheet', stylesheetDirective);

export default MODULE_NAME;