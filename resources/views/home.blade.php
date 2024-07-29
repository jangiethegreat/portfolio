@extends('layouts.app')

@section('content')

<div class="container">
    <div id="app">
        <div class="profile">
            <profile-component></profile-component>
        </div>
        <div class="skills">
            <skills-component></skills-component>
        </div>
    </div>
</div>



@endsection