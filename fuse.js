const { FuseBox } = require("fuse-box");

fuse = FuseBox.init({
    homeDir: "src",
    output: "public/build/$name.js",
    cache: false,
    sourceMaps: true,
    target: "browser"
});

fuse.dev({
    open: true,            
    port: 8080,
    root: "public",
    });

fuse.bundle("vendor")
    .watch()
    .hmr()
    .instructions("~index.ts");

fuse.bundle("bundle")
    .watch()
    .hmr()
    .instructions('!>[index.ts]');
fuse.run();

