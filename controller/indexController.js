var express = require('express');
const { PrismaClient } = require("@prisma/client")
var prisma = new PrismaClient()

exports.getIndex = async (req, res) => {
    
    const allinmates = await prisma.inmateRecord.findMany();
    res.render('index', {allinmates})

    }
exports.postIndex = async (req, res) => {
        res.render('index');
        }