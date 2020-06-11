var fs = require('fs');

module.exports = {
    devServer: {
        disableHostCheck: true,
        before: function(app, server, compiler) {
            app.get('/investments', function(req, res) {
                const content = fs.readFileSync('mock/invesmtents_list.json', 'utf8');
                const resp = JSON.parse(content);
                res.json(resp);
            });
            app.post('/investments', function(req, res) {
                const content = fs.readFileSync('mock/invesmtent_create.json', 'utf8');
                const resp = JSON.parse(content);
                res.json(resp);
            });
            app.delete('/investments', function(req, res) {
                const content = fs.readFileSync('mock/invesmtent_delete.json', 'utf8');
                const resp = JSON.parse(content);
                res.json(resp);
            });
        }
  }
}