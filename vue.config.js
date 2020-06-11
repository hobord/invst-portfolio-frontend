var fs = require('fs');

module.exports = {
    devServer: {
        disableHostCheck: true,
        before: function(app, server, compiler) {
            app.get('/instruments/', function(req, res) {
                const content = fs.readFileSync('mock/instruments_list.json', 'utf8');
                const resp = JSON.parse(content);
                res.json(resp);
            });
            app.post('/instruments', function(req, res) {
                const content = fs.readFileSync('mock/instrument_create.json', 'utf8');
                const resp = JSON.parse(content);
                res.json(resp);
            });
            app.delete('/instruments/:ID', function(req, res) {
                const content = fs.readFileSync('mock/instrument_delete.json', 'utf8');
                const resp = JSON.parse(content);
                res.json(resp);
            });
        }
  }
}