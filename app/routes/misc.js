var fs = require('fs');

module.exports.viewConceptApplication = function(req, res) {
    fs.readdir('./public/img/library', function(err, images) {
        res.render('base', {
            images: images
        });
    });
};
