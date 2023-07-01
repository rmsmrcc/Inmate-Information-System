const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { decrypt } = require('caesar-encrypt');

exports.getLogin = (req, res) => {
    res.render('login');
};
exports.getVisitorLogin = (req, res) => {
    res.render('visitlog');
};

exports.getAdminLogin = (req, res) => {
    res.render('adminlog');
};
//Login Admin

exports.postAdminLogin = async (req, res,error) => {
    const { email_admin, password_admin } = req.body;

    if (email_admin && password_admin) {
        const admin = await prisma.Admin.findUnique({
            where:
             { email_admin }
        });

        if (admin) {
            const decryptedpw = decrypt(admin.password_admin, admin.shift);
            if (decryptedpw === password_admin) {
                    res.redirect('/index');
            } else {
                res.send('Incorrect Email and/or Password');
                console.log(error);
            }
        } else {
            res.send('Incorrect Email and/or Password');
            console.log(error);
        }
    } else {
        res.send('Please enter an email and password');
    }
    res.end();
};

// Login Visitor
exports.postVisitLogin = async (req, res,error) => {
    const { email_visitor, password_visitor } = req.body;

    if (email_visitor && password_visitor) {
        const visitor = await prisma.Visitor.findUnique({
            where:
             { email_visitor }
        });

        if (visitor) {
            const decryptedpw = decrypt(visitor.password_visitor, visitor.shift);
            if (decryptedpw === password_visitor) {
                    res.redirect('/visitorindex');
            } else {
                res.send('Incorrect Email and/or Password');
                console.log(error);
            }
        } else {
            res.send('Incorrect Email and/or Password');
            console.log(error);
        }
    } else {
        res.send('Please enter an email and password');
    }
    res.end();
};