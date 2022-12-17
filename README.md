## Signal Ads Node SDK

## Usage

- Send Single SMS

```node

const signal = require('signalads-node')

signal.setApiKey('your-api-key')

await signal.sendSingleSms(sender, text, receptor)

// typescript usage
import { sendSingleSms, setApiKey } from 'signalads-node';

setApiKey('your-api-key')

await sendSingleSms(sender, text, receptor)

```

`Sample Output`

```json

{
  "data": {
    "message_id": "2bb0220b-...",
    "price": 160
  },
  "message": "پیام شما با موفقیت در صف ارسال قرار گرفت",
  "error": {
    "message": null,
    "errors": null
  }
}

```


- Send Multiple SMS With Same Text

```node

const signal = require('signalads-node')

signal.setApiKey('your-api-key')

const receptors = ['09121234567']

await signal.sendMultipleSms(sender, text, receptors)

// typescript usage
import { sendMultipleSms, setApiKey } from 'signalads-node';

setApiKey('your-api-key')

const receptors = ['09121234567']

await sendMultipleSms(sender, text, receptors)

```

`Sample Output`

```json

{
  "data": {
    "message_id": "755455f6-....",
    "price": 160
  },
  "message": "پیام شما با موفقیت در صف ارسال قرار گرفت",
  "error": {
    "message": null,
    "errors": null
  }
}

```

- Send Multiple SMS With Multiple Text

```node

const signal = require('signalads-node')

signal.setApiKey('your-api-key')

const pairs = [{text: 'Hi', receptor: '09123456789'}]

await signal.sendPairToPairSms(sender, pairs)

// typescript usage
import { sendPairToPairSms, setApiKey } from 'signalads-node';

setApiKey('your-api-key')

const pairs = [{text: 'Hi', receptor: '09123456789'}]

await sendPairToPairSms(sender, pairs)

```

`Sample Output`

```json

{
  "data": {
    "message_id": "bb6100b3-....",
    "price": 160
  },
  "message": "پیام شما با موفقیت در صف ارسال قرار گرفت",
  "error": {
    "message": null,
    "errors": null
  }
}

```

- Send Sms With Pattern

```node

const signal = require('signalads-node')

signal.setApiKey('your-api-key')

const patternParams = ['param1', 'param2', 'param3']

const receptors = ['09121234567']

await signal.sendMessageWithPattern(sender, patternId, patternParams, receptors)

// typescript usage
import { sendMessageWithPattern, setApiKey } from 'signalads-node';

setApiKey('your-api-key')

const patternParams = ['param1', 'param2', 'param3']

const receptors = ['09121234567']

await sendMessageWithPattern(sender, patternId, patternParams, receptors)
```

`Sample Output`

```json

{
  "data": {
    "message_id": "bb6100b3-....",
    "price": 160
  },
  "message": "پیام شما با موفقیت در صف ارسال قرار گرفت",
  "error": {
    "message": null,
    "errors": null
  }
}

```

- Get account credit

```node

const signal = require('signalads-node')

signal.setApiKey('your-api-key')

await signal.getAccountCredit()

// typescript usage
import { getAccountCredit, setApiKey } from 'signalads-node';

setApiKey('your-api-key')

await getAccountCredit()

```

`Sample Output`

```json

{
  "data": {
    "credit": "333946"
  },
  "message": null,
  "error": {
    "message": null,
    "errors": null
  }
}

```
