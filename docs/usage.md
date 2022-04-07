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
- `data` - **Optional** - Data used to perform operations at a given route
    - The `data` object may have zero or more records but must have at least one record if included in the request 

## /coin

Endpoint to return results of a coin toss

- `GET` - `/coin` - Returns results of a coin toss
    - OPTIONS - `flips` - The number of coin toss results to return

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
