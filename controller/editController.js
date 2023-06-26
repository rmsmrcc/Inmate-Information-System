const { PrismaClient } = require("@prisma/client");
var prisma = new PrismaClient();

exports.getEdit = async (req, res) => {
    try {
        const inmate = await prisma.inmateRecord.findUnique({
            where: { id: req.params.id },
        });
        res.render('edit', { inmate });
    } catch (error) {
        console.log(error);
    }
};

exports.postEdit = async (req, res) => {
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
    const { id } = req.params;

    try {
        const updatedInmate = await prisma.inmateRecord.update({
            where: { id: id },
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
            },
        });
        const inmate = await prisma.inmateRecord.findUnique({ where: { id: id } });
        res.redirect('/view/' + id);
    } catch (error) {
        console.log(error);
    }
};