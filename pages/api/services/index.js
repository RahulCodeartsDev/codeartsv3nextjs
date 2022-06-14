import { servicedata } from "../../../data/servicedata"
export default function handler(req, res) {
    res.status(200).json(servicedata)
}
