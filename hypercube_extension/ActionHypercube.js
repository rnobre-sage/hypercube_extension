import { CRUDAction } from "@sagebrasil/sage.br.hypercube.web.components";

const ActionHypercubePerson = CRUDAction(
    'hypercube_extension', 
    'http://5dc33dc11666f6001477fa4c.mockapi.io/api/v1/person'
)

export const listPerson = ActionHypercubePerson._find;
export const getPerson = ActionHypercubePerson._get;
export const postPerson = ActionHypercubePerson._post;
export const putPerson = ActionHypercubePerson._put;
export const deletePerson = ActionHypercubePerson._delete;