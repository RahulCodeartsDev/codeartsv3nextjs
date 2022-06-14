import { menudata } from "../../../data/menudata"
export default function handler(req, res) {
    res.status(200).json(menudata)
}