

import { del, get, patch, post } from "../../utils/request";

export const createRoom = async (options) => {
    return await post(`rooms`, options);
}

export const getListRoom = async () => {
    return await get(`rooms`);
}

export async function updateRoom(id, options) {
    return await patch(`rooms/`+id, options);
}

export async function deleteRoom(id) {
    return await del(`rooms/`+id);
}