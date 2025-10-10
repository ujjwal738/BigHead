import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";

// const healthCheck = async (req, res) => {
//   try {
//     res.status(200)
//     .json(new ApiResponse(200, {
//       message: "Big Head Server Is Running"
//     }))
// } catch (err) {
//     res.status(404).json(new ApiError(404, "Wrong endpoint!!!!", [req.originalUrl]))
//     console.error(err);
// }
// }

const healthCheck = asyncHandler(async (req, res, next)=> {

  if(req.query){
        res.status(404).json(new ApiError( 404 , "No query Allowed in this URL", req.query))
      }
  else
    res
      .status(200)
      .json(new ApiResponse(200, { message: "Big Head Server is running" }));
});


const HealthCheckController = {
  healthCheck,
};

export default HealthCheckController;