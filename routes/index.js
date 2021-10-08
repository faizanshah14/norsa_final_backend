const authRouter = require('./auth');
const clientsRouter = require('./clients');
const merchantsRouter = require('./merchants');
const dealerRouter = require('./dealer');
const deviceRouter = require('./device');
const issuancehistoryRouter = require('./issuancehistory');
const userAccessRouter = require('./userAccess');
const nfcCardRouter = require('./nfcCard');


module.exports = function (app) {
  app.use('/api/auth', authRouter);
  app.use('/api/clients', clientsRouter);
  app.use('/api/merchants', merchantsRouter);
  app.use('/api/nfcCard', nfcCardRouter);
  app.use('/api/dealers', dealerRouter);
  app.use('/api/device', deviceRouter);
  app.use('/api/issuancehistory', issuancehistoryRouter);
  app.use('/api/userAccess', userAccessRouter);
};
