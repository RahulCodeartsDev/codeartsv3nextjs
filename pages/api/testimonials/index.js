import { testimonialdata } from "../../../data/testimonialdata"
export default function handler(req, res) {
    res.status(200).json(testimonialdata)
}