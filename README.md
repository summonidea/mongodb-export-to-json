# mongodb-export-to-json
Using node.js and mongoose package to read a mongo atlas collection and export it to a json file.

## step 1: install node dependencies
npm i

## step 2: update fields in mongobd connection string.
cloud.mongodb.com provides the connection string, too. Make sure to update certain fields
<user>
<password>
<projectname>
<databasename>

## step 3: update collection name. Collection should already exist in Mongo cloud
<collectionName>

## step 4: run
npm run dev

* Mongo Compass and Mongo´s command line may have an easier way export to json
