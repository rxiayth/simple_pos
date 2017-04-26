App turns on
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

