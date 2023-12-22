
const path = require('path');

let mainController = {

    viewHome: (req, res) => {
        res.render('index');
    },
};
    
module.exports = mainController;