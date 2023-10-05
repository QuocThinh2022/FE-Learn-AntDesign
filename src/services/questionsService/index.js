
import { get } from '../../utils/request';

export async function getQuestions(path) {
    return await get(`questions`);
}