
import { get } from '../../utils/request';

const getUtilsRoom = async () => {
    return await get(`utilsRoom`);
}

export default getUtilsRoom;