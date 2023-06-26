const {PrismaClient} = require("@prisma/client")
var prisma = new PrismaClient()

exports.getView = async(req,res) => {
  try {
    const inmate = await prisma.InmateRecord.findUnique({ where: { id: req.params.id }});
    res.render('view', { inmate });
  } catch (error) {
    console.log(error);
  }
}