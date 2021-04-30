import axios from 'axios'

const TOKEN = 'USsjr1o0mcI29tnKMumxZcJxwaRxLJER2E'
const LANG = 'pt_BR'
const API = `https://gateway.battlenet.com.cn/d3/data/hero`

export const getCharacterService = (character) => {
  return axios.get(`${API}/${character}?locale=${LANG}&access_token=${TOKEN}`)
}
