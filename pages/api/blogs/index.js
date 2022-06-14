import { bloglistdata } from "../../../data/bloglistdata"
export default function handler(req, res) {
    res.status(200).json(bloglistdata)
}