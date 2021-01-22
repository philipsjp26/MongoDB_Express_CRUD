## How to use ?

requirements: 
> NPM or NVM </br>
> Nodemon

Installation:</br>
1. npm install nodemon --save-dev
2. npm install
3. npm start ( if want to start app.js )

routes: </br>
Methods [ GET ]
* http:[your_IP_address_env]:[your_port_env]/ping
    ```
    test endpoint to get status 
    ```
Methods [ POST ]
* http:[your_IP_address_env]:[your_port_env]/emp/add
    ```
    add data to mongoDB: 
    {
        "name": { your name } -> [type String],
        "age": { your age } -> [type Number]
    }
    ```
Methods [ GET ]
* http:[your_IP_address_env]:[your_port_env]/emp/all
    ```
    get all employee from mongoDB:

    ```
Methods [ PUT ]
* http:[your_IP_address_env]:[your_port_env]/emp/id/:id
    ```
    update by id employee:
    <!-- need request body payload json -->
    {
        "name": { your name } -> [type String],
        "age": { your age } -> [type Number]
    }
    ```
Methods [ DELETE ]
* http:[your_IP_address_env]:[your_port_env]/emp/id/:id
    ```
    Delete data employee by id
    ```
[x] note: 
    ```
    -> required install mongoDB Compass first 
    ```
</br>
