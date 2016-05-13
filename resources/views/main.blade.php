<!DOCTYPE html>
<html>
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <?php echo '<title>'.trans('app.jsandoc').'</title>'; ?>
        <base href="/jsandoc/">
        <!--<link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">-->
        <link href="css/app.css" rel="stylesheet" type="text/css">
        <script src="es6-shim/es6-shim.min.js"></script>
        <script src="systemjs/dist/system-polyfills.js"></script>

        <script src="angular2/bundles/angular2-polyfills.js"></script>
        <script src="systemjs/dist/system.src.js"></script>
        <script src="rxjs/bundles/Rx.js"></script>
        <script src="angular2/bundles/angular2.dev.js"></script>
        <script src="angular2/bundles/http.dev.js"></script>
        <script src="angular2/bundles/router.dev.js"></script>

        <script>
              System.config(
              {
                packages:
                {
                  typescript:
                  {
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
                margin-left:10px;
            }
            .low-font
            {
                font-size:10px;
            }
            .nav.navbar-nav>li
            {
                cursor:pointer;
            }
            .nav.navbar-nav>li:hover
            {
                background-color: #5E5E5E;
            }
            a{
                text-decoration: none;
                cursor: pointer;
            }
            .emptySection
            {
                border-left:1px solid #CCCCCC;
                min-height: 10px;
            }
            .mini-remove
            {
                font-size: 10px !important;
            }

            .section-title
            {
              font-weight:bold;
            }
            .with-child-over
            {
                /*text-decoration:underline;*/
                color:#204D74;
            }
            .clickeable
            {
                cursor:pointer;
            }
            .border-left
            {
                border-left:2px solid #FFFFFF;
            }
            .border-left:hover
            {
                border-left:2px solid #204D74;
            }

            .section-child
            {
                padding-top:3px;
                padding-bottom:3px;
                padding-left:10px;
            }

            .section-edition
            {
                border-radius:0 0 5px 5px;
            }

            .section-edition-simple-list
            {
                border:1px solid #5BC0DE;
            }

            .section-edition-complex-list
            {
                border:1px solid #F0AD4E;
            }

            .list-box
            {
                border-radius: 0 0 0 5px;
                font-size: 10px;
                margin-top:-3px;
            }

            .simple-list-element-position
            {
                padding:3px;
                background-color:#5BC0DE;
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
