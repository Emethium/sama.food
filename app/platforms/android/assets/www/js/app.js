phonon.options({
    navigator: {
        defaultPage: 'home',
        hashPrefix: '!',
        animatePages: true,
        enableBrowserBackButton: true,
        templateRootDirectory: './screens',
        useHash: true
    },
    i18n: null // I won't use internationalization
});

var app = phonon.navigator();

app.on({page: 'home', preventClose: false, content: null});
// Let's go!
app.start();

//phonon.panel('#bras').open();
//phonon.panel('#bras').close();
