'use strict';

var BigNumber = require('bignumber.js');

var Defaults = {};

Defaults.MIN_FEE_PER_KB = new BigNumber('0');
Defaults.MAX_FEE_PER_KB = new BigNumber('1000000');
Defaults.MIN_TX_FEE = new BigNumber('0');
Defaults.MAX_TX_FEE = new BigNumber('10000000');
Defaults.MAX_TX_SIZE_IN_KB = new BigNumber('100');

Defaults.MAX_KEYS = 100;

// Time after which a tx proposal can be erased by any copayer. in seconds
Defaults.DELETE_LOCKTIME = 600;

// Allowed consecutive txp rejections before backoff is applied.
Defaults.BACKOFF_OFFSET = 10;

// Time a copayer need to wait to create a new tx after her previous proposal was rejected. in seconds.
Defaults.BACKOFF_TIME = new BigNumber('600');

Defaults.MAX_MAIN_ADDRESS_GAP = 20;

// TODO: should allow different gap sizes for external/internal chains
Defaults.SCAN_ADDRESS_GAP = Defaults.MAX_MAIN_ADDRESS_GAP + 20;

Defaults.FEE_LEVELS = {
  proc: [{
    name: 'normal',
    nbBlocks: new BigNumber('2'),
    defaultValue: new BigNumber('10000'),
  }]

};

// How many levels to fallback to if the value returned by the network for a given nbBlocks is -1
Defaults.FEE_LEVELS_FALLBACK = new BigNumber('2');

// Minimum nb of addresses a wallet must have to start using 2-step balance optimization
Defaults.TWO_STEP_BALANCE_THRESHOLD = new BigNumber('100');

Defaults.FIAT_RATE_PROVIDER = 'BitPay';
Defaults.FIAT_RATE_FETCH_INTERVAL = new BigNumber('10'); // In minutes
Defaults.FIAT_RATE_MAX_LOOK_BACK_TIME = new BigNumber('120'); // In minutes

Defaults.HISTORY_LIMIT = new BigNumber('50');

// The maximum amount of an UTXO to be considered too big to be used in the tx before exploring smaller
// alternatives (proportinal to tx amount).
Defaults.UTXO_SELECTION_MAX_SINGLE_UTXO_FACTOR = new BigNumber('2');

// The minimum amount an UTXO need to contribute proportional to tx amount.
Defaults.UTXO_SELECTION_MIN_TX_AMOUNT_VS_UTXO_FACTOR = new BigNumber('0.1');

// The maximum threshold to consider fees non-significant in relation to tx amount.
Defaults.UTXO_SELECTION_MAX_FEE_VS_TX_AMOUNT_FACTOR = new BigNumber('0.05');

// The maximum amount to pay for using small inputs instead of one big input
// when fees are significant (proportional to how much we would pay for using that big input only).
Defaults.UTXO_SELECTION_MAX_FEE_VS_SINGLE_UTXO_FEE_FACTOR = new BigNumber('5');

// Minimum allowed amount for tx outputs (including change) in SAT
Defaults.MIN_OUTPUT_AMOUNT = new BigNumber('1');

// Number of confirmations from which tx in history will be cached 
// (ie we consider them inmutables)
Defaults.CONFIRMATIONS_TO_START_CACHING = new BigNumber('36'); // ~ 6hrs

// Number of addresses from which tx history is enabled in a wallet
Defaults.HISTORY_CACHE_ADDRESS_THRESOLD = new BigNumber('100');

// Cache time for blockchain height (in seconds)
Defaults.BLOCKHEIGHT_CACHE_TIME = new BigNumber('600');


// Max allowed timespan for notification queries in seconds
Defaults.MAX_NOTIFICATIONS_TIMESPAN = new BigNumber('1209600'); // 14 days
Defaults.NOTIFICATIONS_TIMESPAN = new BigNumber('60');

Defaults.SESSION_EXPIRATION = new BigNumber('3600'); // 1 hour to session expiration

Defaults.RateLimit = {
  createWallet: {
    windowMs: new BigNumber('3600000'), // hour window 
    delayAfter: new BigNumber('10'), // begin slowing down responses after the 3rd request 
    delayMs: new BigNumber('3000'), // slow down subsequent responses by 3 seconds per request 
    max: new BigNumber('20'), // start blocking after 20 request
    message: "Too many wallets created from this IP, please try again after an hour"
  },
  // otherPosts: {
  //   windowMs: 60 * 60 * 1000, // 1 hour window 
  //   max: 1200 , // 1 post every 3 sec average, max.
  // },
};

Defaults.COIN = 'proc';

module.exports = Defaults;
