const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.deleteInmate = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.inmateRecord.delete({ where: { id: id } });
    res.redirect('/index');
    console.log('Record has been deleted successfully')
  } catch (error) {
    console.log(error);
  }
};