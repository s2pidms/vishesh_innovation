const path = require("path");
const fs = require("fs");
const PdfPrinter = require("pdfmake");

const fonts = {
    Roboto: {
        normal: path.resolve("../constantData/fonts/Roboto-Regular.ttf"),
        bold: path.resolve("../constantData/fonts/Roboto-Bold.ttf"),
        italics: path.resolve("../constantData/fonts/Roboto-Italic.ttf"),
        bolditalics: path.resolve("../constantData/fonts/Roboto-BoldItalic.ttf")
    }
};

const printer = new PdfPrinter(fonts);

exports.generatePdf = (docDefinition, fileName) => {
    return new Promise((resolve, reject) => {
        try {
            const filePath = path.join(__dirname, "../../assets" + "/" + "excel" + `/${fileName}.pdf`);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
            const pdfStream = printer.createPdfKitDocument(docDefinition);
            let file;
            pdfStream.pipe((file = fs.createWriteStream(filePath)));
            pdfStream.end();
            file.on("finish", async function () {
                resolve(filePath);
            });
        } catch (err) {
            reject(err);
        }
    });
};
