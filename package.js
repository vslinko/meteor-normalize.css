Package.describe({
    summary: "A modern, HTML5-ready alternative to CSS resets"
});

Package.on_use(function (api) {
    api.add_files([
        "normalize.css/normalize.css"
    ], "client");
});
