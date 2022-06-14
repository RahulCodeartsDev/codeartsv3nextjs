import { teammemberdata } from "../../../data/teammemberdata"
export default function handler(req, res) {
    res.status(200).json(teammemberdata)
}