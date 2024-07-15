import { getLang } from '../components/ConfigHandler';
let translates = require('../datas/' + getLang() + '/translates.json');

export function __(text) {
    return translates[text] ? translates[text] : text;
}