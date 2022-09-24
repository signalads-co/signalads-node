Signal Ads Node SDK
---------------------

Usage
---------------------

- Send Single SMS

`const signal = require('signalads-node')`

`signal.setApiKey('your-api-key')`

`await signal.sendSingleSms(sender, text, receptor)`

- Send Multiple SMS With Same Text

`const signal = require('signalads-node')`

`signal.setApiKey('your-api-key')`

`const receptors = ['09121234567']`

`await signal.sendMultipleSms(sender, text, receptors)`


- Send Multiple SMS With Multiple Text

`const signal = require('signalads-node')`

`signal.setApiKey('your-api-key')`

`const pairs = [{text: 'Hi', receptor: '09123456789'}]`

`await signal.sendPairToPairSms(sender, pairs)`


- Send Sms With Pattern

`const signal = require('signalads-node')`

`signal.setApiKey('your-api-key')`

`const patternParams = ['param1', 'param2', 'param3']`

`const receptors = ['09121234567']`

`await signal.sendMessageWithPattern(sender, patternId, patternParams, receptors)`

- Get account credit

`const signal = require('signalads-node')`

`signal.setApiKey('your-api-key')`

`await signal.getAccountCredit()`

