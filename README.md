App turns on
    1. create socket connection to the server
        [ predefined ip/port in config file ]
        e.g.
        config.txt
        IP:12.34.56.78
        PORT:1234
        // perhaps json file, read it, json parse, load config??
        // or read line, parse, load config

        keep trying until connection successful
        exponential backoff? 0s, 5s, 10s, 20s, 40s
        (total 6 times including initial try)
        show 'failed to connect. [RETRY]'

    2. if successfully connected, load login page
        -----------------------------
        |                           |
        |         [     ]           |
        |         [     ]           |
        |         [LOGIN]           |
        -----------------------------

on Login
    1. send server login via socket
        [ acct/pwd as json -> Server ]
        [ Server -> success&permissionlvl/fail as json ]
    2. on success load main page,
        on fail, show wrong id/pwd, try again.

on Successful Login (while loading main page)
    1. request inventory data from server
        [ request inventory as json -> Server via socket ]
        [ Server -> inventory data as json ]
    2. load inventory
    3. what else??

// any data passed between server and POS via socket will be in JSON String format.

on Main Page
    1. Placing an order
        // assumption : CAN make the sale
        send to Server, update request with items
        e.g. {action: sale, items: { beer :1, gin :2, rum :3 }, pos: id}
        server parses info, updates DB
        server emits to all relevant POSes ( all POSes in the same store )
        {action: sale, items: { beer :1, gin :2, rum :3 }, pos: id}
        when received, update inventory
        note: this is socket.
    2. Adding/Removing items to cart (main home screen)
        check for 'is it possible to sell this?'
        show cart, items, quantity and total price (and discounts)
    3. check your own ivnentory (inventory screen)
        top menu - inventory
        changes yelow grid to show list of items currently in stock,
        list of items on its way, (both availalbe and reserved)

TOP MENU
    1. HOME
        order page
        add items to cart
    2. CART
        list all items in cart
        show total
        place order button
    3. INVENTORY
        show all items currently in stock
        show items on route, both available and reserverd
    4. SETTINGS
        pass for now


App asks for login
  Different login is assosciate with different store
User logs in successfully
App pulls version, and necessary table from database
  Temporarily using JSON string to represent communications b/w store inventory and database inventory
  Example of table is inventory; name, sku, price, quantity, descripition

App reads JSON string and loads onto inventory.


Tables
store inventory       - connect to server on initial load
                      - POS requests inventory data from server
                      - POS gets inventory data and store in an object (JSON String format)

database inventory    - updates when purchase are made

database              - stores and warehouses and shipments





client --> server <--> database
       <-- server
