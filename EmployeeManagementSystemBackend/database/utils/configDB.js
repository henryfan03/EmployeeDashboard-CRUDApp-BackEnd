// THIS IMPLEMENTATION USES DOTENV TO CONFIGURE THE DATABASE AND SERVER, A COMMENTED .env FILE IS PROVIDED BELOW
// PORT="80"
// DBPASSWORD="password"
// DBUSER="postgres"
// DBNAME="final-backend"

const express = require('express')
const dotenv = require('dotenv').config()
const dbUser = process.env.DBUSER
const dbPwd = process.env.DBPASSWORD
const dbName = process.env.DBNAME

module.exports = {
  dbName,
  dbUser,
  dbPwd
};
