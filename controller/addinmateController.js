const { PrismaClient } = require("@prisma/client")
var prisma = new PrismaClient();

exports.getAddinmate = (req, res) => {
    res.render('addinmate');
}
exports.postAddinmate = async (req, res) => {
    try {
      const {
        inmateNo,
        cellBlock,
        lastname,
        firstname,
        middlename,
        suffix,
        perAdd,
        gender,
        bday,
        civilstatus,
        eyeColor,
        crimeCom,
        sentence,
        dateStart,
        dateEnd,
        elastname,
        efirstname,
        emiddlename,
        esuffix,
        eperAdd,
        relationship,
        contact,
      } = req.body;
  
      const inmaterecord = await prisma.InmateRecord.create({
        data: {
        inmateNo,
        cellBlock,
        lastname,
        firstname,
        middlename,
        suffix,
        perAdd,
        gender,
        bday,
        civilstatus,
        eyeColor,
        crimeCom,
        sentence,
        dateStart,
        dateEnd,
        elastname,
        efirstname,
        emiddlename,
        esuffix,
        eperAdd,
        relationship,
        contact,
        }
      });
  
      console.log('Created inmate record successfully');
    } catch (error) {
      console.error(error);
    }
    res.redirect('addinmate');
  };