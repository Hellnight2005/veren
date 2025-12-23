// import jwt from 'jsonwebtoken'
// import User from '../models/user.model.js'
// import ApiError from '../utils/api-utils/ApiError.js'
// import asynHandler from '../utils/api-utils/asyncHandler.js'
// import { Request, Response, NextFunction } from 'express'

// export const verifyJwt = asynHandler(async (req: Request, res: Response, next: NextFunction) => {
//     const token =
//         req.cookies?.access_token ||
//         req.header("Authorization")?.replace("Bearer ", "");

//     if (!token) {
//         throw new ApiError(401, "Unauthorized")
//     }

//     const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
//     if (!ACCESS_TOKEN_SECRET) {
//         throw new Error("Access Token is not defined");
//     }

//     try {
//         const decodedToken = jwt.verify(token, ACCESS_TOKEN_SECRET);

//     } catch (error) {
//         console.log(error);
//     }
// })