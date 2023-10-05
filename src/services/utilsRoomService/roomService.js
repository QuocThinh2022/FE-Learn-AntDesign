

import { get, post } from "../../utils/request";

export const createRoom = async (options) => {
    return await post(`rooms`, options);
}

export const getListRoom = async () => {
    return await get(`rooms`);
}