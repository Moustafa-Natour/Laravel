<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel React App</title>

    <script>
        console.log("Loading Laravel React App");
        // Provide fallback for assets if needed
        window.assetUrl = "{{ asset('') }}";
    </script>

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])

    <!-- Fallback for production if Vite directive doesn't work -->
    @if (app()->environment('production') && file_exists(public_path('build/assets/app.js')))
        <link rel="stylesheet" href="{{ asset('build/assets/app.css') }}">
        <script type="module" src="{{ asset('build/assets/app.js') }}"></script>
    @endif
</head>

<body>
    <div id="app"></div>
</body>

</html>
