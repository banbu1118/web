import URLRecord from "../models/urlRecordModel.js";

export async function getOriginURL(req,res) {
    const {urlCode} = req.params;

    if(!urlCode) {
        return res.status(400).json({error: "Please provide a valid URL code."});
    }

    const urlRecord = await  URLRecord.findOne({where: {urlCode}})

    if(!urlRecord) {
        return res.status(404).json({error: "URL not found."});
    }

    return res.status(200).json({message: "Success",data: urlRecord.originURL});
}