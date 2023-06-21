var express = require('express');
const { PrismaClient } = require("@prisma/client")
var prisma = new PrismaClient()

exports.getAddinmate = async (req, res) => {
    res.render('addinmate');
    }
exports.postAddinmate = async (req, res) => {
        res.render('addinmate');
        }