phonon.options({
    navigator: {
        defaultPage: 'home',
        hashPrefix: '!',
        animatePages: true,
        enableBrowserBackButton: true,
        templateRootDirectory: '',
        useHash: true
    },
    i18n: null // I won't use internationalization
});


var app = phonon.navigator();

// Let's go!
app.start();

//phonon.panel('#bras').open();
//phonon.panel('#bras').close();
