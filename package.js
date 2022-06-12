Package.describe({
  name: "pfafman:mongo-counter",
  summary: "Atomic counters stored in MongoDB",
  version: "0.0.8",
  git: "https://github.com/pfafman/meteor-mongo-counter.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.8.1");
  api.use(['coffeescript', 'mongo-livedata'], 'server');

  api.addFiles('counter.coffee', 'server');

  if (api.export) {
    api.export('incrementCounter', 'server');
    api.export('decrementCounter', 'server');
    api.export('setCounter', 'server');
    api.export('deleteCounters', 'server', {testOnly: true});
  }
});

Package.onTest(function(api) {
  api.use(['coffeescript', 'tinytest', "konecty:mongo-counter"]);
  api.addFiles('counter-tests.coffee', 'server');
});
