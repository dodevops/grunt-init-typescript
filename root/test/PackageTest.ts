import 'mocha';
import chai = require('chai');
import {{%= classname %}} from '../index';
let should = chai.should();

describe(
    'My package', function () {
        it('should instantiate just fine', function(done) {
            let component = new {%= classname %}();
            should.exist(component, 'Component did not instantiate!');
            done();
        });
    }
);
