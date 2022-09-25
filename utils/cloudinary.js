const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "laraback",
    api_key: "453223958735746",
    api_secret: "C81MbbIfFbXbyzuZhSi9_VG5-wk",
});

module.exports = { cloudinary };