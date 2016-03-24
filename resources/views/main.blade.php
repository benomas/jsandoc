<!DOCTYPE html>
<html>
    <head>
        <?php echo '<title>'.trans('app.resume').'</title>'; ?>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
        <link href="css/app.css" rel="stylesheet" type="text/css">
        <script src="es6-shim/es6-shim.min.js"></script>
        <script src="systemjs/dist/system-polyfills.js"></script>

        <script src="angular2/bundles/angular2-polyfills.js"></script>
        <script src="systemjs/dist/system.src.js"></script>
        <script src="rxjs/bundles/Rx.js"></script>
        <script src="angular2/bundles/angular2.dev.js"></script>

        <script>
              System.config({
                packages: {
                  typescript: {
                    format: 'register',
                    defaultExtension: 'js'
                  }
                }
              });
              System.import('typescript/boot')
                    .then(null, console.error.bind(console));
        </script>
        <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                /*display: table;
                font-weight: 100;
                /*font-family: 'Lato';*/
            }

            .container {
                width: auto;
               /* text-align: center;
                display: table-cell;
                vertical-align: middle;*/
            }

            .content {
               /* text-align: center;
                display: inline-block;*/
            }

            /*.title {
                font-size: 96px;
            }*/
            .left-indent
            {
                margin-left:20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <my-app>Loading...</my-app>
            </div>
        </div>
    </body>
</html>
