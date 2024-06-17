import { Response } from "express";

export const Responehandler = (
  res: Response,
  code: number,
  message: string,
  data: any = [],
  status: Boolean = true,
  meta: Array<any> = []
) => {
  let responsePayload = {
    message: message,
    data: data,
    status: status,
    meta: meta,
  };
  return res.status(code).json(responsePayload);
};
