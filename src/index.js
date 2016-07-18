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

angular.module(MODULE_NAME, [])
    .filter('css', cssFilter)
    .directive('css', cssDirective);

export default MODULE_NAME;