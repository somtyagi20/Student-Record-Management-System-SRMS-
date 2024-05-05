import { ApiError } from "../Utils/apiError.js";
import { asyncHandler } from "../Utils/asyncHandler.js";
import JWT from "jsonwebtoken";
import { Faculty } from "../Models/FacultySchema.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request");
  }

  const decodedToken = JWT.verify(
    token,
    process.env.FACULTY_ACCESS_TOKEN_SECRET
  );

  const user = await Faculty.findById(decodedToken?._id).select(
    "-password -refreshToken"
  );

  if (!user) {
    throw new ApiError(401, "Access token expired");
  }
  req.user = user;
  next();
});
