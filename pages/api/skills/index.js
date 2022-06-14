import { skilldata } from "../../../data/skilldata"
export default function handler(req, res) {
    res.status(200).json(skilldata)
}