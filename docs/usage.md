# Aruix API RESTful Spec

All requests must contain a RAW JSON object in the body of the request with the following format:  

```JSON
{
    "user": "{USERNAME}",
    "data": {
        "{KEY1}": {VALUE1},
        "{KEY2}": {VALUE2},
        ...
    }
}
```

- `user` - **Required** - The user submitting the request
- `data` - **Optional** - Data used to perform operations at a given route. If an endpoint requires no arguments this can be omitted from the request
    - The `data` object **must** contain at least one record if included in the request 

## /coin

Endpoint to return results of a coin toss

- `GET` - `/coin` - Returns results of a coin toss
    - ARGUMENTS 
        - `flips` - The number of coin toss results to return

Example request body: 
```JSON
{
    "user": "chglenn20",
    "data": {
        "flips": 3
    }
}
```

Example response: 
```JSON
{
    "statusCode": 200,
    "data": [
        "Tails",
        "Heads",
        "Tails"
    ],
    "path": "/coin",
    "timestamp": "4/7/2022, 12:59:22 AM"
}
```

## /dice

Endpoint to return results of rolling dice

- `GET` - `/dice` - Returns results of rolling dice
    - ARGUMENTS 
        - `dice` - The number of dice to roll
        - `rolls` - The number of dice roll results to return

Example request body: 
```JSON
{
    "user": "chglenn20",
    "data": {
        "dice": 5,
        "rolls": 1
    }
}
```

Example response: 
```JSON
{
    "statusCode": 200,
    "data": [
        [
            6,
            5,
            1,
            5,
            2
        ]
    ],
    "path": "/dice",
    "timestamp": "4/9/2022, 3:45:14 PM"
}
```
