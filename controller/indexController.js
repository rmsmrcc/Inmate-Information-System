var express = require('express');
const { PrismaClient } = require("@prisma/client")
var prisma = new PrismaClient()
const session = require('express-session');

exports.getIndex = async (req, res) => {
    res.render('index');
    }
exports.postIndex = async (req, res) => {
        res.render('index');
        }