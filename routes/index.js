const authRouter = require('./auth');
const clientsRouter = require('./clients');
const clientPictureRouter = require('./clientProfilePicture')
const publicClientPictureRouter = require('./publicClientProfilePicture')

const publicClientsRouter = require('./publicClient')

const merchantsRouter = require('./merchants');
const dealerRouter = require('./dealer');
const deviceRouter = require('./device');
const issuancehistoryRouter = require('./issuancehistory');
const userAccessRouter = require('./userAccess');
const nfcCardRouter = require('./nfcCard');


module.exports = function (app) {
  app.use('/api/public/clients',publicClientsRouter)
  app.use('/api/auth', authRouter);
  app.use('/api/clients', clientsRouter);
  app.use('/api/clientProfilePicture',clientPictureRouter)
  app.use('/api/public/clientProfilePicture',publicClientPictureRouter)
  app.use('/api/merchants', merchantsRouter); 
  app.use('/api/nfcCard', nfcCardRouter);
  app.use('/api/dealers', dealerRouter);
  app.use('/api/device', deviceRouter);
  app.use('/api/issuancehistory', issuancehistoryRouter);
  app.use('/api/userAccess', userAccessRouter);
};
