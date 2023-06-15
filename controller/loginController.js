const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const session = require('express-session');

const { decrypt } = require('caesar-encrypt');

exports.getLogin = (req, res) => {
    res.render('login');
};
exports.postLogin = async (req, res,error) => {
    const { email, password } = req.body;

    if (email && password) {
        const admin = await prisma.admin.findUnique({
            where: { email }
        });

        if (admin) {
            const decryptedpw = decrypt(admin.password, admin.shift);
            if (decryptedpw === password) {
                const adminId = admin.id; // get the user ID from the result
                session.adminId = adminId;
                if(admin.adminlevel === 'Admin'){
                    res.redirect('/index');
                }else{
                    res.redirect('/index');
                }
                console.log(adminId)
                console.log(`logged in as admin email-> ${email}, admin password-> ${decryptedpw}, admin encrypted pw -> ${admin.password}`);
                
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