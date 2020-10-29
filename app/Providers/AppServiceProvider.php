<?php

namespace App\Providers;

use Inertia\Inertia;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Paginator::useBootstrap();

        Inertia::share('app.name', config('app.name'));

        Inertia::share([
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object) [];
            },
            'success' => function () {
                return Session::get('success')
                    ? Session::get('success')
                    : null;
            }
        ]);

        Inertia::share('auth.user', function() {
            if (Auth::user()) {
                return [
                    'id' => Auth::user()->id,
                    'name' => Auth::user()->name,
                ];
            }
        });
    }
}
