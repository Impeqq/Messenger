import { API } from "@features/constants";

export const getImage = (id?: string) =>
  id ? `http://${API}/file/${id}` : null;
