const { encrypt } = require('caesar-encrypt') ;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getVisitorRegister = (req, res) => {
    res.render('visitreg');
};

exports.getAdminRegister = (req, res) => {
    res.render('adminreg');
};

//Register Controller

exports.postAdminRegister = async (req, res) => {
    let shift = Math.floor((Math.random() * 26) + 1);
    const { email_admin, password_admin } = req.body;
  
    const existingUser = await prisma.Admin.findUnique({
      where: {
        email_admin: email_admin,
      },
    });
  
    if (existingUser) {
      res.send("email already taken");
    } else {
      var pw = encrypt(password_admin, shift);
      await prisma.Admin.create({
        data: {
          email_admin: email_admin,
          password_admin: pw,
          shift: shift,
        },
      });
      console.log("entry added");
      console.log("User: " + email_admin);
      console.log("Password: " + password_admin);
      res.redirect('/');
    }
  };

  //Register Visitor

  exports.postVisitorRegister = async (req, res) => {
    let shift = Math.floor((Math.random() * 26) + 1);
    const { email_visitor, password_visitor} = req.body;
  
    const existingUser = await prisma.Visitor.findUnique({
      where: {
        email_visitor: email_visitor,
      },
    });
  
    if (existingUser) {
      res.send("email already taken");
    } else {
      var pw = encrypt(password_visitor, shift);
      await prisma.Visitor.create({
        data: {
          email_visitor: email_visitor,
          password_visitor: pw,
          shift: shift,
        },
      });
      console.log("entry added");
      console.log("User: " + email_visitor);
      console.log("Password: " + password_visitor);
      res.redirect('/');
    }
  };