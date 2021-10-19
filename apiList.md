| Path                                                        | Methods   | Middlewares    |
| ----------------------------------------------------------- | --------- | -------------- |
| *                                                           | OPTIONS   | corsMiddleware |
| /api/auth/signup                                            | POST      | anonymous      |
| /api/auth/login                                             | POST      | anonymous      |
| /api/auth/logout                                            | GET       | anonymous      |
| /api/auth/verification-email                                | POST      | anonymous      |
| /api/auth/confirm-email                                     | GET       | anonymous      |
| /api/auth/forgot-password                                   | POST      | anonymous      |
| /api/auth/reset-password                                    | POST      | anonymous      |
| /api/auth/change-password                                   | POST      | anonymous      |
| /api/auth/validate-reset-password                           | POST      | anonymous      |
| /api/auth/refresh-session                                   | POST      | anonymous      |
| /api/clients/getAllClients/:limit&:offset                   | GET       | anonymous      |
| /api/clients/getAllClients                                  | GET       | anonymous      |
| /api/clients/getClientById/:id                              | GET       | anonymous      |
| /api/clients/createClient                                   | POST      | anonymous      |
| /api/clients/upsertClient                                   | POST      | anonymous      |
| /api/clients/deleteClient/:id                               | DELETE    | anonymous      |
| /api/merchants/getAllMerchants/:limit&:offset               | GET       | anonymous      |
| /api/merchants/getAllMerchants                              | GET       | anonymous      |
| /api/merchants/getMerchantById/:id                          | GET       | anonymous      |
| /api/merchants/createMerchant                               | POST      | anonymous      |
| /api/merchants/upsertMerchant                               | POST      | anonymous      |
| /api/merchants/deleteMerchant/:id                           | DELETE    | anonymous      |
| /api/merchants/getAllMerchantTypes/:limit&:offset           | GET       | anonymous      |
| /api/merchants/getAllMerchantTypes                          | GET       | anonymous      |
| /api/merchants/getMerchantTypeById/:id                      | GET       | anonymous      |
| /api/merchants/createMerchantType                           | POST      | anonymous      |
| /api/merchants/upsertMerchantType                           | POST      | anonymous      |
| /api/merchants/deleteMerchantType/:id                       | DELETE    | anonymous      |
| /api/merchants/getAllMerchantTypeDiscounts/:limit&:offset   | GET       | anonymous      |
| /api/merchants/getAllMerchantTypeDiscounts                  | GET       | anonymous      |
| /api/merchants/getMerchantTypeDiscountById/:id              | GET       | anonymous      |
| /api/merchants/createMerchantTypeDiscount                   | POST      | anonymous      |
| /api/merchants/upsertMerchantTypeDiscount                   | POST      | anonymous      |
| /api/merchants/deleteMerchantTypeDiscount/:id               | DELETE    | anonymous      |
| /api/nfcCard/getAllNfcCards/:limit&:offset                  | GET       | anonymous      |
| /api/nfcCard/getAllNfcCards                                 | GET       | anonymous      |
| /api/nfcCard/getNfcCardById/:id                             | GET       | anonymous      |
| /api/nfcCard/createNfcCard                                  | POST      | anonymous      |
| /api/nfcCard/upsertNfcCard                                  | POST      | anonymous      |
| /api/nfcCard/deleteNfcCard/:id                              | DELETE    | anonymous      |
| /api/dealers/getAlldealers/:limit&:offset                   | GET       | anonymous      |
| /api/dealers/getAlldealers                                  | GET       | anonymous      |
| /api/dealers/getDealerById/:id                              | GET       | anonymous      |
| /api/dealers/createDealer                                   | POST      | anonymous      |
| /api/dealers/upsertDealer                                   | POST      | anonymous      |
| /api/dealers/deleteDealer/:id                               | DELETE    | anonymous      |
| /api/device/getAllDevices                                   | GET       | anonymous      |
| /api/device/getAllDevices/:limit&:offset                    | GET       | anonymous      |
| /api/device/getDeviceById/:id                               | GET       | anonymous      |
| /api/device/createDevice                                    | POST      | anonymous      |
| /api/device/upsertDevice                                    | POST      | anonymous      |
| /api/device/deleteDevice/:id                                | DELETE    | anonymous      |
| /api/issuancehistory/getAllIssuancehistories/:limit&:offset | GET       | anonymous      |
| /api/issuancehistory/getAllIssuancehistories                | GET       | anonymous      |
| /api/issuancehistory/getIssuancehistoryById/:id             | GET       | anonymous      |
| /api/issuancehistory/createIssuancehistory                  | POST      | anonymous      |
| /api/issuancehistory/upsertIssuancehistory                  | POST      | anonymous      |
| /api/issuancehistory/deleteIssuancehistory/:id              | DELETE    | anonymous      |
| /api/userAccess/checkAdminStatus                            | POST      | anonymous      |
| /api/userAccess/changeUserStatus                            | POST      | anonymous      |
| /api/userAccess/dormantUser                                 | POST      | anonymous      |