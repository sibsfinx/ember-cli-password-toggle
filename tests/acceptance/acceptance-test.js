import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('password toggle acceptance tests', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
});

test("password-toggle test", function() {
    visit('/');
    andThen(function(){
        equal(find('input.ember-password-toggle-input').attr('type'), 'password');
        equal(find('input.ember-password-toggle-input').val(), 'password');
        equal(find('button.ember-password-toggle-btn').text(), 'Show');
        equal(find('button.ember-password-toggle-btn').attr('type'), 'button');
        equal(find('button.ember-password-toggle-btn').attr('tabindex'), '-1');
    });

    click('button.ember-password-toggle-btn');
    andThen(function(){
        equal(find('button.ember-password-toggle-btn').text(), 'Hide');
        equal(find('input.ember-password-toggle-input').attr('type'), 'text');
    });

    click('button.ember-password-toggle-btn');
    andThen(function(){
        equal(find('button.ember-password-toggle-btn').text(), 'Show');
        equal(find('input.ember-password-toggle-input').attr('type'), 'password');
    });
});
