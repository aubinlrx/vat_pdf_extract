# Installation and usage via cli

```bash
$ npm install
```

install pdf-extract dependencies: (here)[https://github.com/nisaacson/pdf-extract]

- FR63539146290
- FR 63 539146290

```
/(FR)?( [0-9A-Z]{2}|[0-9A-Z]{2})( [0-9]{9}|[0-9]{9})/g
```

```bash
# Extract all vats matching the regexp in the service
$ node index.js --filepath='./pdfs/41eJB94RUW_8864843.pdf'
# Extract all vats matching the regexp in the service + exclude the vat provided.
$ node index.js --filepath='./pdfs/41eJB94RUW_8864843.pdf' --ignore='FR63539146290'
```

# Usage

```js
  var pdfService = require('./pdf_service');

  pdfService('path-to-a-pdf-file')
    .then(function(data) {
      console.log('VAT exported:', data);
    })
    .catch(function(error) {
      console.log(error)
    });
```
