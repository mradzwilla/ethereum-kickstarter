import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x6332f88819A388d64B2fC9184a6A24297093576b', //Rinkby test address
);

export default instance;