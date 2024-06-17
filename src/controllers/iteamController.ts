import { Request, Response } from "express";
import Item from "../models/mode";
import { Responehandler } from "../helper/helper";

export const createItem = async (req: Request, res: Response) => {
  try {
    const newItem = await Item.create({ name: req.body.name });
    Responehandler(res, 200, "Iteam Created", newItem, true);
  } catch (error: any) {
    Responehandler(res, 500, error.message, [], false);
  }
};

export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await Item.findAll();
    Responehandler(res, 200, "Success", items, true);
  } catch (error: any) {
    Responehandler(res, 500, error.message, [], true);
  }
};

export const getItemById = async (req: Request, res: Response) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (item) {
      Responehandler(res, 200, "Success", item, true);
    } else {
      Responehandler(res, 404, "Item not found", [], false);
    }
  } catch (error: any) {
    Responehandler(res, 500, error.message, [], false);
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (item) {
      item.name = req.body.name;
      await item.save();
      Responehandler(res, 201, "Item Fetch Successfully", item, false);
    } else {
      Responehandler(res, 404, "Item not found", [], false);
    }
  } catch (error: any) {
    Responehandler(res, 500, error.message, [], false);
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (item) {
      await item.destroy();
      res.status(204).send();
    } else {
      Responehandler(res, 404, "Item not found", [], false);
    }
  } catch (error: any) {
    Responehandler(res, 500, error.message, [], false);
  }
};
