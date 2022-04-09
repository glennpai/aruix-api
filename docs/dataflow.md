# Request flow in Aruix API

[![](https://mermaid.ink/img/pako:eNptk8tuwjAQRX_FskQVJIKqLlFBlXipi1YVdJewCMmQWHXsdOyUVsC_147zgtabzM099owv4URjmQCd0BSjIiPvi1AQswYDMs-QKS2LDJCsOQjROnGWWv1w_5TmEePjWObOa4lXc6ZyKuYMhA7m1WNXI6rcu36bFQk28FmC0mTF5XHnfLtyliQcjhGC99KWw86PpdAoOQdUp3lXXzqi7UK6d3YxoQFjKLREFQTPPbXbXZMFAspSg-e9IfiPe5xVcji8waTSDWfK_0EQiRNtgaAKKRSYBKpn3VwBfrEYlLeti_qQA-Nm0iBYfttpmRS2zap6aeduw1-b1gUT6dUPQKbT2blO-tzL1jGdtlx7bWc2ylq90J3Zz5L4Y7_bTO66XOpJus0GtWxzVeIb8efsPl-NdX1cKyuzCfPWq2Zy0fVjvNlDRzQHNF9zYv4KJwuGVGeQQ0gnpkwi_AhpKC6GK4sk0rBMmLkynRwirmBEo1LL7Y-I6URjCQ20YJH5APOauvwCltEgeA)](https://mermaid.live/edit#pako:eNptk8tuwjAQRX_FskQVJIKqLlFBlXipi1YVdJewCMmQWHXsdOyUVsC_147zgtabzM099owv4URjmQCd0BSjIiPvi1AQswYDMs-QKS2LDJCsOQjROnGWWv1w_5TmEePjWObOa4lXc6ZyKuYMhA7m1WNXI6rcu36bFQk28FmC0mTF5XHnfLtyliQcjhGC99KWw86PpdAoOQdUp3lXXzqi7UK6d3YxoQFjKLREFQTPPbXbXZMFAspSg-e9IfiPe5xVcji8waTSDWfK_0EQiRNtgaAKKRSYBKpn3VwBfrEYlLeti_qQA-Nm0iBYfttpmRS2zap6aeduw1-b1gUT6dUPQKbT2blO-tzL1jGdtlx7bWc2ylq90J3Zz5L4Y7_bTO66XOpJus0GtWxzVeIb8efsPl-NdX1cKyuzCfPWq2Zy0fVjvNlDRzQHNF9zYv4KJwuGVGeQQ0gnpkwi_AhpKC6GK4sk0rBMmLkynRwirmBEo1LL7Y-I6URjCQ20YJH5APOauvwCltEgeA)

The above diagram visualizes how a request originating from a client is passed through the structure of this app. 

## Steps

1. Client makes an HTTP request to a given endpoint. 
1. The request is first picked up by the app's middleware. The middleware functions allow the app to log incoming requests as well as check if the requests are for valid URLs before they are routed.
1. From the middleware, the request is then passed to the interceptors. Interceptors have both a "pre-routing" and "post-routing" hook to allow functionality during both of these windows. This app uses interceptors to build more useful response objects at different points during the request's lifecycle.
1. After the interceptor's pre-routing functions the request is passed to the controller. Here, a request's arguments are processed to ensure the request is valid for the endpoint. An operation is then performed using the arguments which may involve one or more calls to a controller's relevent services and a value is returned. 
1. Once the controller returns a value, the data is passed to the interceptors' post-routing processes which log the results of the request and the final response object is formed. 
1. If at any point during the lifecycle of the HTTP request an HTTP exception is raised, the app's exception filters will catch the exception, log the instance, and form a useful response object. 
1. The response oject is then returned to the client containing their requested data. 
