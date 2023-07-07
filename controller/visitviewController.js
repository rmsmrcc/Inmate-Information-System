const {PrismaClient} = require("@prisma/client")
var prisma = new PrismaClient()

exports.getVisitView = async(req,res) => {
  try {
    const visit = await prisma.VisitSched.findUnique({ where: { id: req.params.id }});
    res.render('visitview', { visit });
  } catch (error) {
    console.log(error);
  }
}