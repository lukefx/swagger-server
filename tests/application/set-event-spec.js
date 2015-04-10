'use strict';

var env = require('../test-environment');

describe('set event', function() {
    describe("set method", function() {
        it('should fire when setting a new setting',
            function() {
                var onSet = sinon.spy();
                var server = env.swaggerServer(env.files.petStore);
                server.on('set', onSet);

                server.app.set('Foo', 'Bar');

                sinon.assert.calledOnce(onSet);
                sinon.assert.calledWithExactly(onSet, 'Foo', 'Bar', undefined);
            }
        );

        it('should fire when changing a setting',
            function() {
                var onSet = sinon.spy();
                var server = env.swaggerServer(env.files.petStore);
                server.on('set', onSet);

                server.app.set('Foo', 'Bar');
                server.app.set('Foo', 'Baz');

                sinon.assert.calledTwice(onSet);
                sinon.assert.calledWithExactly(onSet, 'Foo', 'Baz', 'Bar');
            }
        );

        it('should fire when changing an Express setting',
            function() {
                var onSet = sinon.spy();
                var server = env.swaggerServer(env.files.petStore);
                server.on('set', onSet);

                server.app.set('strict routing', true);

                sinon.assert.calledOnce(onSet);
                sinon.assert.calledWithExactly(onSet, 'strict routing', true, undefined);
            }
        );

        it('should not fire when the setting isn\'t changed',
            function() {
                var onSet = sinon.spy();
                var server = env.swaggerServer(env.files.petStore);
                server.on('set', onSet);

                server.app.set('Foo', 'Bar');
                server.app.set('Foo', 'Bar');

                sinon.assert.calledOnce(onSet);
                sinon.assert.calledWithExactly(onSet, 'Foo', 'Bar', undefined);
            }
        );
    });
    
    describe("enable method", function() {
        it('should fire when enabling a new setting',
            function() {
                var onSet = sinon.spy();
                var server = env.swaggerServer(env.files.petStore);
                server.on('set', onSet);

                server.app.enable('Foo');

                sinon.assert.calledOnce(onSet);
                sinon.assert.calledWithExactly(onSet, 'Foo', true, undefined);
            }
        );

        it('should fire when enabling an existing setting',
            function() {
                var onSet = sinon.spy();
                var server = env.swaggerServer(env.files.petStore);
                server.on('set', onSet);

                server.app.set('Foo', 'Bar');
                server.app.enable('Foo');

                sinon.assert.calledTwice(onSet);
                sinon.assert.calledWithExactly(onSet, 'Foo', true, 'Bar');
            }
        );

        it('should fire when enabling an Express setting',
            function() {
                var onSet = sinon.spy();
                var server = env.swaggerServer(env.files.petStore);
                server.on('set', onSet);

                server.app.enable('strict routing');

                sinon.assert.calledOnce(onSet);
                sinon.assert.calledWithExactly(onSet, 'strict routing', true, undefined);
            }
        );

        it('should not fire when the setting isn\'t changed',
            function() {
                var onSet = sinon.spy();
                var server = env.swaggerServer(env.files.petStore);
                server.on('set', onSet);

                server.app.enable('Foo');
                server.app.enable('Foo');

                sinon.assert.calledOnce(onSet);
                sinon.assert.calledWithExactly(onSet, 'Foo', true, undefined);
            }
        );
    });
 
    describe("disable method", function() {
        it('should fire when disabling a new setting',
            function() {
                var onSet = sinon.spy();
                var server = env.swaggerServer(env.files.petStore);
                server.on('set', onSet);

                server.app.disable('Foo');

                sinon.assert.calledOnce(onSet);
                sinon.assert.calledWithExactly(onSet, 'Foo', false, undefined);
            }
        );

        it('should fire when disabling an existing setting',
            function() {
                var onSet = sinon.spy();
                var server = env.swaggerServer(env.files.petStore);
                server.on('set', onSet);

                server.app.set('Foo', 'Bar');
                server.app.disable('Foo');

                sinon.assert.calledTwice(onSet);
                sinon.assert.calledWithExactly(onSet, 'Foo', false, 'Bar');
            }
        );

        it('should fire when disabling an Express setting',
            function() {
                var onSet = sinon.spy();
                var server = env.swaggerServer(env.files.petStore);
                server.on('set', onSet);

                server.app.disable('strict routing');

                sinon.assert.calledOnce(onSet);
                sinon.assert.calledWithExactly(onSet, 'strict routing', false, undefined);
            }
        );

        it('should not fire when the setting isn\'t changed',
            function() {
                var onSet = sinon.spy();
                var server = env.swaggerServer(env.files.petStore);
                server.on('set', onSet);

                server.app.disable('Foo');
                server.app.disable('Foo');

                sinon.assert.calledOnce(onSet);
                sinon.assert.calledWithExactly(onSet, 'Foo', false, undefined);
            }
        );
    });
    
});
