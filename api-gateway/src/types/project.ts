import { Types } from "mongoose";

interface Project{
    name: string,
    createdAt: string,
    gitUrl: string,
    subDomain: string,
    customDomain: string,
    createdBy: Types.ObjectId
}

export default Project