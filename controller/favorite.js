import * as favoriteRepository from '../data/favorite.js'

export async function processFavorite(req,res,next){
  const {gifId, isFav, userId} = req.body;
  const found = await favoriteRepository.findByUserAndGifId(gifId, userId);
  console.log(`found : ${JSON.stringify(found)}`);
  if(found){
      const result = await favoriteRepository.update(isFav, gifId, userId);
      if(result){
        return res.status(200).json(result);
      }
      return res.status(409).json({ message: `${gifId} doesn't exist` });
  }
  const tweet = await favoriteRepository.process(gifId,isFav,userId);
  res.status(201).json(tweet);
}

export async function getFavorite(req,res,next) {
    const id = req.params.id;
    const favorite = await favoriteRepository.getByGifId(id);
    if(favorite){
        res.status(200).json(favorite);
    }
    else{
        res.status(404).json({message : `favorite id ${id} not Found`})
    }
}

export async function getFavoriteListByUser(req,res,next) {
    const {name} = req.query;
    console.log(req.query);
    const favorites = await favoriteRepository.getFavoriteListByUser(name);
    if(favorites){
        res.status(200).json(favorites);
    }
    else{
        res.status(404).json({message : `favorite id ${id} not Found`})
    }
}