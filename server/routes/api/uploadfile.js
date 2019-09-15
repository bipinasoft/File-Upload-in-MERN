const Busboy = require('busboy');

module.exports = (app) => {
    app.post('/api/upload', function (req, res, next) {
        const element1 = req.body.element1;

    var busboy = new Busboy({ headers: req.headers });

    // The file upload has completed
    busboy.on('finish', function() {
      console.log('Upload finished');
      
      // Your files are stored in req.files. In this case,
      // you only have one and it's req.files.element2:
      // This returns:
      // {
      //    element2: {
      //      data: ...contents of the file...,
      //      name: 'Example.jpg',
      //      encoding: '7bit',
      //      mimetype: 'image/png',
      //      truncated: false,
      //      size: 959480
      //    }
      // }
      
      // Grabs your file object from the request.
      const file = req.files.element2;
      console.log(file);
      
      // Begins the upload to the AWS S3
      uploadToS3(file);
    });

    req.pipe(busboy);
    });
};