// The error response design


class ApiError extends Error{
  constructor(statusCode, messages="Something Went Wrong", errors = [], stack=""){
    super(messages),
    this.statusCode = statusCode,
    this.success = false,
    this.messages = messages,
    this.errors = errors;
    


    if(stack){
      this.stack = stack
    }
    else{
      Error.captureStackTrace(this, this.constructor)
    }
  }
}


export {ApiError};