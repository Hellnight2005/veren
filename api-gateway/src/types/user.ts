import { Types } from "mongoose";

interface IUser {
    githubId: string;
    provider: "github";

    name: string;
    email: string;
    userName: string
    avatar: string;

    projects: Types.ObjectId[];

    tokenVersion: number;

    createdAt: Date;
    updatedAt: Date;

    generateAccessToken(): string;
    generateRefreshToken(): string;
}

export default IUser