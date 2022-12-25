const { Pool } = require('pg')
const dotenv=require('dotenv');
dotenv.config()
 
const db_Config = {

    connectionTimeoutMillis: 300,
    idleTimeoutMillis: 200,
    max: 20,
    connectionString: process.env.DATABASE_URL,

  }


  
const pool = new Pool(db_Config)


pool.on('connect', (client) => {
  console.log('SET DATESTYLE = iso, mdy')
  })


  pool.on('remove', (client) => {
    client.query('remove')
  })  

module.exports=pool