var express = require('express');
const { PrismaClient } = require("@prisma/client")
var prisma = new PrismaClient()

exports.getSched = async (req, res) => {
    res.render('sched');
    }
exports.postSched = async (req, res) => {
        res.render('sched');
        }