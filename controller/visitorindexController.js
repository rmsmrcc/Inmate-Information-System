var express = require('express');
const { PrismaClient } = require("@prisma/client")
var prisma = new PrismaClient()

exports.getVisitorIndex = async(req,res) => {
  const allinmates = await prisma.inmateRecord.findMany();
    res.render('visitorindex', {allinmates})
      
  }
