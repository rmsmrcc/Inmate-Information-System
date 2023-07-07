const express = require('express');
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getVisitorIndex = async (req, res) => {
  const allinmates = await prisma.inmateRecord.findMany();
  const allvisit = await prisma.visitSched.findMany();
  
  res.render('visitorindex', { allinmates, allvisit });
};