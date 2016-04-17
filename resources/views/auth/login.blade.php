<!-- resources/views/auth/login.blade.php -->

<form method="POST" action="/jsandoc/auth/login">
    {!! csrf_field() !!}
<div style="padding:10px; background-color: #CCCCCC;">
    <div>
        Email
        <input type="email" name="email" value="{{ old('email') }}">
    </div>

    <div>
        Password
        <input type="password" name="password" id="password">
    </div>

    <div>
        <input type="checkbox" name="remember"> Remember Me
    </div>

    <div>
        <button type="submit">Login</button>
    </div>
</div>
</form>