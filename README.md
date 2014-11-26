# AngularJS module for simple routing with animations support

## The problem

One of the worst pains of the original ngRoute module is weak animations support. It only supports one type of animation for all views changes. The main idea of this module is to provide support for different animations for different views (e.g. next and previous pages animated with left and right transitions, or flip left/right between some kind of pages).

## Solution

The module provides small extention of Angular's DSL for describing routes. So that you can use different animations for different views.

## Example

    $routeProvider
      .when('/',
        templateUrl: 'index.html'
        controller: 'IndexController'
        name: 'index'
        animations:
          pictures: ['slide-to-top', 'slide-from-bottom']
      )
      .when('/pictures',
        templateUrl: 'pictures.html'
        controller: 'PicturesController'
        name: 'pictures'
        animations:
          form: ['slide-from-bottom', 'slide-to-top']
      )
