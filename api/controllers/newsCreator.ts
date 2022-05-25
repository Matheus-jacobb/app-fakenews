import { Request, Response } from "express";
import {CreateNewsWithWonRepository} from "../repositories/createAnewNews";


class NewsWithWonController {
    async handle(request: Request, response: Response, data) {
        try {

            const createNewsWithWonRepository = new CreateNewsWithWonRepository();

            var news;
            Object.keys(data).forEach(key => {
                news = createNewsWithWonRepository.execute({
                    nameNews: data.nameNews,
                    description: data.description,
                    updateDate: data.updateDate,
                    linkNews: data.linkNews,
                    likes: data.likes,
                });
            });
            return response.json("data saved successfully");
        } catch {

        }
    }
}

export { NewsWithWonController }