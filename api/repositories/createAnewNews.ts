import { NewsSchema } from "../models/modelNew";


class CreateNewsWithWonRepository {
    async execute({ ...newsData }) {
        const news = await NewsSchema.create({
            nameNews: newsData.nameNews,
            description: newsData.description,
            updateDate: newsData.updateDate,
            linkNews: newsData.linkNews,
            likes: newsData.likes,
        })

        await news.save();
    }

}
export { CreateNewsWithWonRepository };