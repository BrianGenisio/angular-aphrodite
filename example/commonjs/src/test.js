import angular from 'angular';
import {StyleSheet} from 'aphrodite';
import angularAphrodite from 'angular-aphrodite'

var styles = StyleSheet.create({
    a: {
        color: '#03A9F4',
        ':visited': {
            color: '#0099E4'
        }
    },

    main: {
        padding: '1em',
        'font-family': 'Arial, Helvetica, sans-serif',
        'text-align': 'center',
        'margin-top': '50px',
        display: 'block'
    },

    footer: {
        'text-align': 'center',
        'font-size': '0.8em'
    },
    
    red: {
        backgroundColor: 'red'
    },

    blue: {
        backgroundColor: 'blue'
    },

    hover: {
        ':hover': {
            backgroundColor: 'red'
        }
    },

    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
        }
    }
});

angular.module('app', [angularAphrodite])
    .directive('test', function() {
        return {
            template: require('./test.html'),
            controller: function($scope) {
                $scope.styles = styles;
            }
        }
    });