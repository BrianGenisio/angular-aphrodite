const styles = aphrodite.StyleSheet.create({
    a: {
        color: '03A9F4'
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



function AppCtrl() {
    this.url = 'https://github.com/Khan/aphrodite';
    this.styles = styles;
}


angular.module('app', ['angular-aphrodite'])
    .directive('app', function() {
        return {
            templateUrl: './app.html',
            controller: 'AppCtrl',
            controllerAs: 'app'
        }
    })
    .controller('AppCtrl', AppCtrl);