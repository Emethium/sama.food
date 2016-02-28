phonon.options({
    navigator: {
        defaultPage: 'home',
        hashPrefix: '!',
        animatePages: true,
        enableBrowserBackButton: true,
        templateRootDirectory: 'screens/',
        useHash: true
    },
    i18n: null // I won't use internationalization
});

var app = phonon.navigator();

app.on({page: 'home', content: 'home.html'});
app.on({page: 'search', content: 'search.html'});
// Let's go!
app.start();
