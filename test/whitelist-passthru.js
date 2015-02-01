var should = require('should'),
    whitelistPassthru = require('../whitelist-passthru');

describe('whitelist-passthru', function() {
  var whitelist = ['/whitelisted'];
  var target;
  var testMiddleware = function(req, res, next) {
    target = 'Reached';
  };

  var passthru = whitelistPassthru(testMiddleware, whitelist);

  beforeEach(function(done) {
    target = null;
    done();
  });

  it("does skip wrapped middleware on whitelisted path", function(done) {
    passthru({ path: '/whitelisted' }, null, function () {});
    (target == null).should.be.true;
    done();
  });

  it('does not skip wrapped middleware on non-whitelisted path', function(done) {
    passthru({ path: '/other' }, null, function() {});
    target.should.equal('Reached');
    done();
  });
});

