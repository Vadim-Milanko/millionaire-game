import { QuestionsData } from '@/shared/interfaces/game';
import gameConfig from '@/data/config.json';

export interface IApi {
  fetchQuestionsData(): Promise<any>;
}

class Api implements IApi {
  async fetchQuestionsData(): Promise<QuestionsData> {
    return new Promise<QuestionsData>((resolve, reject) => resolve(gameConfig));
  }
}

const api = new Api();

export default api;
