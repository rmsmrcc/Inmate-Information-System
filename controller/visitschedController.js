const { PrismaClient } = require("@prisma/client")
var prisma = new PrismaClient()

exports.getVisitSched = async (req, res) => {
  try {
    const inmate = await prisma.InmateRecord.findUnique({ where: { id: req.params.id } });
    res.render('visitsched', { inmate });
  } catch (error) {
    console.log(error);
  }
}
exports.postVisitSched = async (req, res) => {
  try {
    const {
      inmateNo,
      cellBlock,
      lastname,
      firstname,
      middlename,
      suffix,
      gender,
      bday,
      vlastname,
      vfirstname,
      vmiddlename,
      vsuffix,
      vperAdd,
      timeVisit,
      dateVisit,
      relationship,
      contact,
      visitor,
    } = req.body;

    const visitsched = await prisma.visitSched.create({
      data: {
        inmateNo,
        cellBlock,
        lastname,
        firstname,
        middlename,
        suffix,
        gender,
        bday,
        vlastname,
        vfirstname,
        vmiddlename,
        vsuffix,
        vperAdd,
        timeVisit,
        dateVisit,
        relationship,
        contact,
        visitor: {  // Provide the necessary information for the visitor object
          // Fill in the properties based on your requirements
          // For example:
          firstname,
          lastname,
      },
    }
    });

    console.log('Set Appointment successfully');
  } catch (error) {
    console.error(error);
  }
  res.redirect('visitorindex');
};